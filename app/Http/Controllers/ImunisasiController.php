<?php

namespace App\Http\Controllers;

use App\Models\Imunisasi;
use App\Http\Requests\StoreImunisasiRequest;
use App\Http\Requests\UpdateImunisasiRequest;
use App\Http\Resources\ImunisasiResource;

class ImunisasiController extends Controller
{
    /**
     * Menampilkan daftar data imunisasi badan.
     */
    public function index()
    {
        $query = Imunisasi::query();
        $sortField = request("sort_field", 'id');

        // Penyesuaian query berdasarkan id anak
        if (request("anak_id")) {
            $query->where("anak_id", request("anak_id"));
        }

        $imunisasis = $query->orderBy($sortField)->paginate(100);

        return inertia("Imunisasi/Index", [
            "imunisasis" => ImunisasiResource::collection($imunisasis),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }

    /**
     * Menampilkan formulir untuk membuat data imunisasi badan baru.
     */
    public function create()
    {
        return inertia("Imunisasi/Create");
    }

    /**
     * Menyimpan data imunisasi badan baru ke penyimpanan.
     */
    public function store(StoreImunisasiRequest $request)
    {
        $data = $request->validated();
        Imunisasi::create($data);

        return to_route('imunisasi.index')
            ->with('success', 'Data Imunisasi Berhasil Ditambahkan');
    }

    /**
     * Menampilkan data imunisasi badan yang spesifik.
     */
    public function show(Imunisasi $imunisasi)
    {
        return inertia('Imunisasi/Show', [
            'imunisasi' => new ImunisasiResource($imunisasi),
        ]);
    }

    /**
     * Menampilkan formulir untuk mengedit data imunisasi badan yang spesifik.
     */
    public function edit(Imunisasi $imunisasi)
    {
        return inertia('Imunisasi/Edit', [
            'imunisasi' => new ImunisasiResource($imunisasi),
        ]);
    }

    /**
     * Memperbarui data imunisasi badan yang spesifik.
     */
    public function update(UpdateImunisasiRequest $request, Imunisasi $imunisasi)
    {
        $data = $request->validated();
        $imunisasi->update($data);

        return to_route('imunisasi.index')
            ->with('success', 'Data Imunisasi Badan Berhasil Diperbarui');
    }

    /**
     * Menghapus data imunisasi badan yang spesifik dari penyimpanan.
     */
    public function destroy(Imunisasi $imunisasi)
    {
        $imunisasi->delete();

        return to_route('imunisasi.index')
            ->with('success', 'Data Imunisasi Badan Berhasil Dihapus');
    }
}
