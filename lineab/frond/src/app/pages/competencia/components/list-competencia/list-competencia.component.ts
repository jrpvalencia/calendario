import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { competenciaModel } from '@models/competencia.model';

@Component({
  selector: 'app-list-competencia',
  templateUrl: './list-competencia.component.html',
  styleUrls: ['./list-competencia.component.scss']
})
export class ListCompetenciaComponent {

  @Input() competencias: competenciaModel[] = [];

  @Output() update: EventEmitter<competenciaModel> = new EventEmitter();
  @Output() delete: EventEmitter<number> = new EventEmitter();
  @Output() create: EventEmitter<void> = new EventEmitter();

  numReg = 5;
  pageActual = 0;

  constructor(){
  
  }

  enviarNumeroRegistros(num: number) {
    this.numReg = num;
  }

  actualizar(competencia: competenciaModel) {
    this.update.emit(competencia);
  }

  eliminar(idcompetencia: number) {
    this.delete.emit(idcompetencia);
  }

  agregar() {
    this.create.emit();
  }
}
