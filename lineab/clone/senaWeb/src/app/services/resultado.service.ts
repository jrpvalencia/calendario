import { Injectable } from '@angular/core';
import { resultadoModel } from '@models/resultado.model';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {
  resultado: resultadoModel;
  permisos: number;
  constructor(
    private _coreService: CoreService
  ) {}

  public traerResultado() {
    return this._coreService.get<resultadoModel[]>('resultados');
  }

  public getResultadoById(id) {
    return this._coreService.post('resultado/', id);
  }

  crearResultado(resultado: resultadoModel) {
    return this._coreService.post<resultadoModel>('resultados', resultado);
  }

  eliminarResultado(resultadoId: number) {
    return this._coreService.delete('resultados/' + resultadoId);
  }
  actualizarResultado(resultado: resultadoModel) {
    return this._coreService.put('resultados/' + resultado.id, resultado);
  }
}
