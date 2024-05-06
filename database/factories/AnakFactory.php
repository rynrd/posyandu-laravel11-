<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Anak>
 */
class AnakFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $tahun = fake()->numberBetween(1, 5); // Usia antara 1-5 tahun
        $bulan = fake()->numberBetween(0, 11); // Bulan antara 0-11 (0 berarti tidak ada bulan)

        // Format usia dalam "n tahun n bulan"
        $usia = ($tahun > 1 ? $tahun . ' tahun ' : ($tahun == 1 ? '1 tahun ' : '')) . ($bulan > 0 ? $bulan . ' bulan' : '');

        return [
            'image_path' => fake()->imageUrl(),
            'nama' => fake()->name(),
            'nik' => fake()->unique()->numerify('################'),
            'tanggal_lahir' => fake()->date(),
            'usia' => $usia,
            'jk' => fake()->randomElement(['Laki-laki', 'Perempuan']),
            'nama_ibu' => fake()->name(),
        ];
    }
}
