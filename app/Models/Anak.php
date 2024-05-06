<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Anak extends Model
{
    protected $fillable = [
        'image_path',
        'nama',
        'nik',
        'tanggal_lahir',
        'usia',
        'jk',
        'nama_ibu',
    ];

    use HasFactory;

    public function berats()
    {
        return $this->hasMany(Berat::class);
    }

    public function imunisasis()
    {
        return $this->hasMany(Imunisasi::class);
    }
}
