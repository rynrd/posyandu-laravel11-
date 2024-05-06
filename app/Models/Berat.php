<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Berat extends Model
{
    protected $fillable = ['tanggal', 'berat',];
    use HasFactory;
    public function anaks()
    {
        return $this->belongsTo(Anak::class);
    }
}
