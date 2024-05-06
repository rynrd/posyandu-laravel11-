<?php

namespace App\Http\Controllers;

use App\Models\Anak;
use App\Http\Requests\StoreAnakRequest;
use App\Http\Requests\UpdateAnakRequest;
use App\Http\Resources\AnakResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class AnakController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Anak::query();
        $sortField = request("sort_field", 'id');
        $sortDirection = request("sort_direction", "desc");
        if (request("nama")) {
            $query->where("nama", "like", "%" . request("nama") . "%");
        }

        if (request("nik")) {
            $query->where("nik", "like", "%" . request("nik") . "%");
        }
        if (request("jk")) {
            $query->where("jk", "like", "%" . request("jk") . "%");
        }
        $anaks = $query->orderBy($sortField, $sortDirection)->paginate(10);
        return inertia("Anak/Index", [
            "anaks" => AnakResource::collection($anaks),
            'queryParams' => request()->query() ?: null,
            'success' => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Anak/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAnakRequest $request)
    {
        $data = $request->validated();
        /** @var $image Illuminate\Http\UploadedFile  */
        $image = $data['image_path'] ?? null;
        if ($image) {
            $data['image_path'] = $image->store('anak/' . Str::random(), 'public');
        }

        Anak::create($data);

        return to_route('anak.index')
            ->with('success', 'Data Anak Berhasil Di Tambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(Anak $anak)
    {
        return inertia('Anak/Show', [
            'anak' => new AnakResource($anak),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Anak $anak)
    {
        return inertia('Anak/Edit', [
            'anak' => new AnakResource($anak),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAnakRequest $request, Anak $anak)
    {
        $data = $request->validated();
        $image = $data['image_path'] ?? null;
        if ($image) {
            if ($anak->image_path) {
                Storage::disk('public')->deleteDirectory(dirname($anak->image_path));
            }
            $data['image_path'] = $image->store('anak/' . Str::random(), 'public');
        }
        $anak->update($data);
        return to_route('anak.index')
            ->with('success', "Data Anak \'" . $anak->nama . "\' Berhasil Di Perbaharui");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Anak $anak)
    {
        $nama = $anak->nama;
        $anak->delete();
        if ($anak->image_path) {
            Storage::disk('public')->deleteDirectory(dirname($anak->image_path));
        }
        return to_route('anak.index')
            ->with('success', 'Data Anak \'' . $nama . '\' Berhasil Di Hapus');
    }
}
