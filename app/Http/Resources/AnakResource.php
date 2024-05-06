<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class AnakResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'image_path' => $this->image_path ? Storage::url($this->image_path) : ' ',
            'nama' => $this->nama,
            'nik' => $this->nik,
            'tanggal_lahir' => $this->tanggal_lahir,
            'usia' => $this->usia,
            'jk' => $this->jk,
            'nama_ibu' => $this->nama_ibu,
            // Tambahkan elemen array lainnya sesuai kebutuhan
        ];
    }
}
