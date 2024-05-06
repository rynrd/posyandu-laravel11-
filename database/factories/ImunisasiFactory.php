<?php

namespace Database\Factories;

use App\Models\Imunisasi;
use Illuminate\Database\Eloquent\Factories\Factory;

class ImunisasiFactory extends Factory
{
    /**
     * Menentukan model yang akan dijadikan blueprint
     *
     * @var string
     */
    protected $model = Imunisasi::class;

    /**
     * Mendefinisikan state default dari model.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [

            'jenis_imunisasi' => fake()->randomElement([
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
            ]),
            'umur' => fake()->numberBetween(1, 60),
            'tgl_imunisasi' => fake()->date(),
        ];
    }
}
