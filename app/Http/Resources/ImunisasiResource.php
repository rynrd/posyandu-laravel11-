<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ImunisasiResource extends JsonResource
{
    /**
     * Transformasi sumber daya menjadi sebuah array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'id_anak' => $this->anak_id,
            'jenis_imunisasi' => $this->jenis_imunisasi,
            'umur' => $this->umur,
            'tgl_imunisasi' => $this->tgl_imunisasi,
        ];
    }
}
