<?php

namespace App\Http\Controllers;

use App\Models\Anak;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $totalAnak = Anak::count();
        $totalLaki = Anak::where('jk', 'Laki-laki')->count();
        $totalPerempuan = Anak::where('jk', 'Perempuan')->count();

        // Mengirimkan variabel $totalAnak ke dalam view
        return inertia('Dashboard', compact('totalAnak', 'totalLaki', 'totalPerempuan'));
    }
}
