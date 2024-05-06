<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Imunisasi extends Model
{
    use HasFactory;

    protected $fillable = [
        'jenis_imunisasi',
        'umur',
        'tgl_imunisasi',
        'id_anak', // tambahkan id_anak ke fillable jika diperlukan
    ];

    public function anak()
    {
        return $this->belongsTo(Anak::class, 'id_anak');
    }
}
