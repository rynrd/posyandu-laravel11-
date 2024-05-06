<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Berat>
 */
class BeratFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'tanggal' => fake()->dateTimeBetween('-1 month', 'now'),
            'berat' => fake()->numberBetween(1, 100) / 10 . ' kg',
        ];
    }
}
