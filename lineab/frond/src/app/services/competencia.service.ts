import { Injectable } from '@angular/core';
import { competenciaModel } from '@models/competencia.model';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class CompetenciaService {
  competencia: competenciaModel;
  permisos: number;
  constructor(
    private _coreService: CoreService
  ) {}
  
  public traerCompetencias() {
    return this._coreService.get<competenciaModel[]>('Competencias');
  }

  public getompetenciasById(id) {
    return this._coreService.post('Competencia/', id);
  }

  crearCompetencias(competencia: competenciaModel) {
    return this._coreService.post<competenciaModel>('Competencias', competencia);
  }

  eliminarCompetencia(competenciaId: number) {
    return this._coreService.delete('Competencias/' + competenciaId);
  }
  actualizarCompetencia(competencia: competenciaModel) {
    return this._coreService.put('Competencias/' + competencia.id, competencia);
  }

}
