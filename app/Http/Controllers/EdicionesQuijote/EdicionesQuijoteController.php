<?php

namespace App\Http\Controllers\EdicionesQuijote;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\EdicionesQuijote;

class EdicionesQuijoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $edicionesquijote = EdicionesQuijote::all();
        return response()->json($edicionesquijote)->header('Access-Control-Allow-Origin', '*');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $edicionesquijote =EdicionesQuijote::create();

        //$interacciones = Interaction::all();
        return response()->json($edicionesquijote)->header('Access-Control-Allow-Origin', '*');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      /* $rules = [
            'date' => 'required',
            'time' => 'required',
        ];
        $this->validate($request, $rules);
         $interaction = Interaction::create($request->all());
        return $this->showOne($interaction, 201);*/
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
