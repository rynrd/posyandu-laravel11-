<?php

namespace Database\Seeders;

use App\Models\Anak;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'User',
            'email' => 'user@example.com',
            'password' => bcrypt('user1234'),
        ]);
        Anak::factory(30)
            ->hasBerats(30)
            ->hasImunisasis(30)
            ->hasVitamins(30)
            ->create();
    }
}
