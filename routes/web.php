<?php

use App\Http\Controllers\AgendaController;
use App\Http\Controllers\AnakController;
use App\Http\Controllers\BeratController;
use App\Http\Controllers\ChartJSController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GaleriController;
use App\Http\Controllers\ImunisasiController;
use App\Http\Controllers\LayananController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VitaminController;
use App\Http\Controllers\WawasanController;
use App\Models\Berat;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', '/dashboard');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])
        ->name('dashboard');
    Route::get('/agenda', [AgendaController::class, 'index'])->name('agenda.index');
    Route::get('/galeri', [GaleriController::class, 'index'])->name('galeri.index');
    Route::get('/layanan', [LayananController::class, 'index'])->name('layanan.index');
    Route::get('/wawasan', [WawasanController::class, 'index'])->name('wawasan.index');
    Route::resource('anak', AnakController::class);
    // Route::resource('berat', BeratController::class);
    // Route::resource('imunisasi', ImunisasiController::class);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
