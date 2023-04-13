<?php

namespace App\Http\Controllers;

use App\Models\Competencia;
use Illuminate\Http\Request;

class CompetenciaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $data = Competencia::all();
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
        $competencia = new Competencia($data);
        $competencia->save();
        return response()->json([
            'exito al crear' => $competencia
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Competencia  $competencia
     * @return \Illuminate\Http\Response
     */
    public function show(Competencia $competencia)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Competencia  $competencia
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id)
    {
        
        $data = $request->all();
        $ValCompetencia= Competencia::findOrFail($id);
        $ValCompetencia-> fill($data);
        $ValCompetencia-> save();
        return response() -> json($ValCompetencia);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Competencia  $competencia
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        $Competencia = Competencia::findOrFail($id);
        $Competencia->delete();
        return response()->json([
            'exito al eliminar'
        ]);
    }
}
