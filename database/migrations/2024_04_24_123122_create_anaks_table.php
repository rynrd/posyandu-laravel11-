<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('anaks', function (Blueprint $table) {
            $table->id();
            $table->string('image_path')->nullable();
            $table->string('nama');
            $table->string('nik');
            $table->date('tanggal_lahir');
            $table->string('usia');
            $table->enum('jk', ['Laki-laki', 'Perempuan']);
            $table->string('nama_ibu');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('anaks');
    }
};
