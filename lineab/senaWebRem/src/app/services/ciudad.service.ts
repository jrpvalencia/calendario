import { Injectable } from '@angular/core';
import { CiudadModel } from '@models/ciudad.model';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor(
    private _coreService: CoreService
  ) { }

  traerCiudades() {
     return this._coreService.get<CiudadModel[]>('ciudades');
  }

  ciudadesByDep(iddepartamento: number) {
    const url = `ciudades/departamento/${iddepartamento}`;
    return this._coreService.get<CiudadModel[]>(url);

  }
}
