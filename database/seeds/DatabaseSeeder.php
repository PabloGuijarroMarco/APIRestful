<?php

use App\Interaction;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Interaction::truncate();
        // $this->call(UsersTableSeeder::class);
        $cantidadInteracciones = 10;
        factory(Interaction::class, $cantidadInteracciones)->create();
    }
}
