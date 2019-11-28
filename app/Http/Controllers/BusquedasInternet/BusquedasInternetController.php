<?php

namespace App\Http\Controllers\BusquedasInternet;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\BusquedasInternet;

class BusquedasInternetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $busquedasinternet = BusquedasInternet::all();
        return response()->json($busquedasinternet)->header('Access-Control-Allow-Origin', '*');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $busquedainternet =BusquedasInternet::create();

        //$interacciones = Interaction::all();
        return response()->json($busquedainternet)->header('Access-Control-Allow-Origin', '*');
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
       

        /*$interaction->date = $request->input('date');
        $interaction->time = $request->input('time');*/

        
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
