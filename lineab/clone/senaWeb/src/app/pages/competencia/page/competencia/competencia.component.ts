import { Component, OnInit } from '@angular/core';
import { competenciaModel } from '@models/competencia.model';
import { CompetenciaService } from '@services/competencia.service';
import { UINotificationService } from '@services/uinotification.service';

@Component({
  selector: 'app-competencia',
  templateUrl: './competencia.component.html',
  styleUrls: ['./competencia.component.scss']
})
export class CompetenciaComponent implements OnInit{
  private modalCompetencia = false;

  competencia: competenciaModel = null;
  competencias: competenciaModel[] = [];

  constructor(
    private _uiNotificationService: UINotificationService,
    private _competenciaService: CompetenciaService
  ) { }

  ngOnInit(): void {
    this.getCompetencia();
  }

  getCompetencia() {
    this._competenciaService.traerCompetencias()
      .subscribe(competencia => {
        this.competencias = competencia;
      }, error => {
        this._uiNotificationService.error("Error de conexión");
      });
  }

  eliminarCompetencia(compId: number) {
    this._competenciaService.eliminarCompetencia(compId).subscribe(() => {
      this.getCompetencia();
    })
  }

  actualizarCompetencia(competencia: competenciaModel) {
    this.competencia = competencia;
    this.modalCompetencia = true;
  }

  createCompetencia() {
    this.competencia = null;
    this.modalCompetencia = true;
  }

  guardarCompetencia(competencia: competenciaModel) {
    if (competencia.id) {
      this._competenciaService.actualizarCompetencia(competencia).subscribe(rol => {
        this.getCompetencia();
        this.reset();
      });
    } else {
      this._competenciaService.crearCompetencias(competencia).subscribe(rol => {
        this.getCompetencia();
        this.reset();
      })
    }
  }

  reset() {
    this.competencia = null;
    this.modalCompetencia = false;
  }
}
