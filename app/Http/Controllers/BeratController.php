<?php

namespace App\Http\Controllers;

use App\Models\Berat;
use App\Http\Requests\StoreBeratRequest;
use App\Http\Requests\UpdateBeratRequest;
use App\Http\Resources\BeratResource;

class BeratController extends Controller
{
    /**
     * Menampilkan daftar data berat badan.
     */
    public function index()
    {
        $query = Berat::query();
        $sortField = request("sort_field", 'id');

        // Penyesuaian query berdasarkan id anak
        if (request("anak_id")) {
            $query->where("anak_id", request("anak_id"));
        }

        $berats = $query->orderBy($sortField)->paginate(100);

        return inertia("Berat/Index", [
            "berats" => BeratResource::collection($berats),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }

    /**
     * Menampilkan formulir untuk membuat data berat badan baru.
     */
    public function create()
    {
        return inertia("Berat/Create");
    }

    /**
     * Menyimpan data berat badan baru ke penyimpanan.
     */
    public function store(StoreBeratRequest $request)
    {
        $data = $request->validated();
        Berat::create($data);

        return to_route('berat.index')
            ->with('success', 'Data Berat Badan Berhasil Ditambahkan');
    }

    /**
     * Menampilkan data berat badan yang spesifik.
     */
    public function show(Berat $berat)
    {
        return inertia('Berat/Show', [
            'berat' => new BeratResource($berat),
        ]);
    }

    /**
     * Menampilkan formulir untuk mengedit data berat badan yang spesifik.
     */
    public function edit(Berat $berat)
    {
        return inertia('Berat/Edit', [
            'berat' => new BeratResource($berat),
        ]);
    }

    /**
     * Memperbarui data berat badan yang spesifik.
     */
    public function update(UpdateBeratRequest $request, Berat $berat)
    {
        $data = $request->validated();
        $berat->update($data);

        return to_route('berat.index')
            ->with('success', 'Data Berat Badan Berhasil Diperbarui');
    }

    /**
     * Menghapus data berat badan yang spesifik dari penyimpanan.
     */
    public function destroy(Berat $berat)
    {
        $berat->delete();

        return to_route('berat.index')
            ->with('success', 'Data Berat Badan Berhasil Dihapus');
    }
}
