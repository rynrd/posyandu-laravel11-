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
        Schema::create('berats', function (Blueprint $table) {
            $table->id();
            $table->date('tanggal');
            $table->integer('berat');
            $table->foreignId('anak_id')->constrained('anaks');
            $table->timestamps();   
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('berats');
    }
};
