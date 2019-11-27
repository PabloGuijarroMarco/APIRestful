<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/
Route::resource('interactions', 'Interaction\InteractionController');
Route::resource('busquedasautor', 'BusquedasAutor\BusquedasAutorController');
Route::resource('busquedasinternet', 'BusquedasInternet\BusquedasInternetController');
Route::resource('busquedasobras', 'BusquedasObras\BusquedasObrasController');
Route::resource('busquedasobrasdeautor', 'BusquedasObrasDeAutor\BusquedasObrasDeAutorController');
Route::resource('edicionesquijote', 'EdicionesQuijote\EdicionesQuijoteController');
Route::resource('news', 'News\NewsController');
Route::resource('obrasporidioma', 'ObrasPorIdioma\ObrasPorIdiomaController');
Route::resource('predicciontiempo', 'PrediccionTiempo\PrediccionTiempoController');
Route::resource('translation', 'Translation\TranslationController');
Route::resource('twitter', 'Twitter\TwitterController');
Route::resource('wikidata', 'Wikidata\WikidataController');
Route::resource('youtube', 'YouTube\YouTubeController');