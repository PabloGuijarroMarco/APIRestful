<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Interaction::class, function (Faker\Generator $faker) {

    return [
       /* 'date' => $faker->date,
        'time' => $faker->dateTime,*/
    ];
});

$factory->define(App\BusquedasAutor::class, function (Faker\Generator $faker) {

    return [
       /* 'date' => $faker->date,
        'time' => $faker->dateTime,*/
    ];
});

$factory->define(App\BusquedasInternet::class, function (Faker\Generator $faker) {

    return [
       /* 'date' => $faker->date,
        'time' => $faker->dateTime,*/
    ];
});

$factory->define(App\BusquedasObras::class, function (Faker\Generator $faker) {

    return [
       /* 'date' => $faker->date,
        'time' => $faker->dateTime,*/
    ];
});

$factory->define(App\BusquedasObrasDeAutor::class, function (Faker\Generator $faker) {

    return [
       /* 'date' => $faker->date,
        'time' => $faker->dateTime,*/
    ];
});

$factory->define(App\EdicionesQuijote::class, function (Faker\Generator $faker) {

    return [
       /* 'date' => $faker->date,
        'time' => $faker->dateTime,*/
    ];
});

$factory->define(App\News::class, function (Faker\Generator $faker) {

    return [
       /* 'date' => $faker->date,
        'time' => $faker->dateTime,*/
    ];
});

$factory->define(App\ObrasPorIdioma::class, function (Faker\Generator $faker) {

    return [
       /* 'date' => $faker->date,
        'time' => $faker->dateTime,*/
    ];
});

$factory->define(App\PrediccionTiempo::class, function (Faker\Generator $faker) {

    return [
       /* 'date' => $faker->date,
        'time' => $faker->dateTime,*/
    ];
});

$factory->define(App\Translation::class, function (Faker\Generator $faker) {

    return [
       /* 'date' => $faker->date,
        'time' => $faker->dateTime,*/
    ];
});

$factory->define(App\Twitter::class, function (Faker\Generator $faker) {

    return [
       /* 'date' => $faker->date,
        'time' => $faker->dateTime,*/
    ];
});

$factory->define(App\Wikidata::class, function (Faker\Generator $faker) {

    return [
       /* 'date' => $faker->date,
        'time' => $faker->dateTime,*/
    ];
});

$factory->define(App\YouTube::class, function (Faker\Generator $faker) {

    return [
       /* 'date' => $faker->date,
        'time' => $faker->dateTime,*/
    ];
});