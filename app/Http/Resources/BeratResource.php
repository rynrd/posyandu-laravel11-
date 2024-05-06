<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BeratResource extends JsonResource
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
            'tanggal' => $this->tanggal,
            'berat' => $this->berat,
            'anak_id' => $this->anak_id,
        ];
    }
}
