<?php

namespace App\Http\Controllers;

use App\Models\Resultado;
use Illuminate\Http\Request;

class ResultadosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $data = Resultado::all();
        return response() -> json($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $data = $request->all();
        $resultado = new Resultado($data);
        $resultado->save();
        return response()->json([
            'exito al crear' => $resultado
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Resultado  $resultados
     * @return \Illuminate\Http\Response
     */
    public function show(Resultado $resultados)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Resultado  $resultados
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id)
    {
        
        $data = $request->all();
        $newresultado= Resultado::findOrFail($id);
        $newresultado-> fill($data);
        $newresultado-> save();
        return response() -> json($newresultado);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Resultado  $resultados
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        $resultado = Resultado::findOrFail($id);
        $resultado->delete();
        return response()->json([
            'exito al eliminar'
        ]);
    }
}
