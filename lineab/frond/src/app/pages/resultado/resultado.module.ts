import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunModule } from '@components/comun.module';

import { ResultadoRoutingModule } from './resultado-routing.module';
import { ResultadoComponent } from './page/resultado/resultado.component';
import { ListResultadoComponent } from './components/list-resultado/list-resultado.component';
import { AddResultadoComponent } from './components/add-resultado/add-resultado.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    ResultadoComponent,
    ListResultadoComponent,
    AddResultadoComponent
  ],
  imports: [
    CommonModule,
    ResultadoRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ComunModule,
    SweetAlert2Module.forChild()
  ]
})
export class ResultadoModule { }
