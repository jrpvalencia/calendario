import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetenciaRoutingModule } from './competencia-routing.module';
import { AddCompetenciaComponent } from './components/add-competencia/add-competencia.component';
import { ListCompetenciaComponent } from './components/list-competencia/list-competencia.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ComunModule } from '@components/comun.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CompetenciaComponent } from './page/competencia/competencia.component';


@NgModule({
  declarations: [
    AddCompetenciaComponent,
    ListCompetenciaComponent,
    CompetenciaComponent
  ],
  imports: [
    CommonModule,
    CompetenciaRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ComunModule,
    SweetAlert2Module.forChild()
  ]
})
export class CompetenciaModule { }
