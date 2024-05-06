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
        Schema::create('imunisasis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('anak_id')->constrained('anaks');
            $table->enum('jenis_imunisasi', [
                'Hepatitis B',
                'BCG',
                'Polio tetes 1',
                'DPT-HB-Hib 1',
                'Polio tetes 2',
                'PCV 1',
                'DPT-HB-Hib 2',
                'Polio tetes 3',
                'PCV 2',
                'DPT-HB-Hib 3',
                'Polio tetes 4',
                'Polio Suntik(IPV)',
                'Campak-Rubella',
                'JE',
                'PCV 3',
            ]);
            $table->integer('umur');
            $table->date('tgl_imunisasi');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('imunisasis');
    }
};
