<?php

use App\BusquedasAutor;
use App\BusquedasInternet;
use App\BusquedasObras;
use App\BusquedasObrasDeAutor;
use App\YouTube;
use App\Twitter;
use App\News;
use App\EdicionesQuijote;
use App\Interaction;
use App\ObrasPorIdioma;
use App\PrediccionTiempo;
use App\Translation;
use App\Wikidata;
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

        BusquedasAutor::truncate();
        // $this->call(UsersTableSeeder::class);
        $cantidadBusquedasAutor = 10;
        factory(BusquedasAutor::class, $cantidadBusquedasAutor)->create();

        BusquedasInternet::truncate();
        // $this->call(UsersTableSeeder::class);
        $cantidadBusquedasInternet = 10;
        factory(BusquedasInternet::class, $cantidadBusquedasInternet)->create();

        BusquedasObras::truncate();
        // $this->call(UsersTableSeeder::class);
        $cantidadBusquedasObras = 10;
        factory(BusquedasObras::class, $cantidadBusquedasObras)->create();

        BusquedasObrasDeAutor::truncate();
        // $this->call(UsersTableSeeder::class);
        $cantidadBusquedasObrasDeAutor = 10;
        factory(BusquedasObrasDeAutor::class, $cantidadBusquedasObrasDeAutor)->create();

        EdicionesQuijote::truncate();
        // $this->call(UsersTableSeeder::class);
        $cantidadEdicionesQuijote = 10;
        factory(EdicionesQuijote::class, $cantidadEdicionesQuijote)->create();

        News::truncate();
        // $this->call(UsersTableSeeder::class);
        $cantidadNews = 10;
        factory(News::class, $cantidadNews)->create();

        ObrasPorIdioma::truncate();
        // $this->call(UsersTableSeeder::class);
        $cantidadObrasPorIdioma = 10;
        factory(ObrasPorIdioma::class, $cantidadObrasPorIdioma)->create();

        PrediccionTiempo::truncate();
        // $this->call(UsersTableSeeder::class);
        $cantidadPrediccionTiempo = 10;
        factory(PrediccionTiempo::class, $cantidadPrediccionTiempo)->create();

        Translation::truncate();
        // $this->call(UsersTableSeeder::class);
        $cantidadTranslation = 10;
        factory(Translation::class, $cantidadTranslation)->create();

        Twitter::truncate();
        // $this->call(UsersTableSeeder::class);
        $cantidadTwitter = 10;
        factory(Twitter::class, $cantidadTwitter)->create();

        Wikidata::truncate();
        // $this->call(UsersTableSeeder::class);
        $cantidadWikidata = 10;
        factory(Wikidata::class, $cantidadWikidata)->create();

        YouTube::truncate();
        // $this->call(UsersTableSeeder::class);
        $cantidadYouTube = 10;
        factory(YouTube::class, $cantidadYouTube)->create();
    }
}
