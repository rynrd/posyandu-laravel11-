<?php

namespace App\Http\Controllers;

use App\Models\Anak;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GaleriController extends Controller
{
    public function index()
    {
        // Ambil semua data anak dengan hanya memilih kolom image_path
        $photos = Anak::select('image_path')->get();

        // Return view Galeri dengan data foto
        return Inertia::render('Galeri', [
            'photos' => $photos
        ]);
    }
}
