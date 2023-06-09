import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxPaginationModule } from 'ngx-pagination';
import { CardsListItemComponent } from './cards/cards-list-item/cards-list-item.component';
import { CardsListComponent } from './cards/cards-list/cards-list.component';
import { CustomModalComponent } from './custom-modal/custom-modal.component';
import { CustomSearchComponent } from './custom-search/custom-search.component';
import { CustomSwitchComponent } from './custom-switch/custom-switch.component';
import { CustomPaginationComponent } from './custom-table-serve/custom-pagination/custom-pagination.component';
import { CustomTableServeComponent } from './custom-table-serve/custom-table-serve.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { FormCustomMessagesComponent } from './form-custom-messages/form-custom-messages.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    ModalModule,
    CommonModule,
    NgxPaginationModule,
    FullCalendarModule
  ],
  exports: [
    CustomSearchComponent,
    CardsListComponent,
    CardsListItemComponent,
    CustomModalComponent,
    FormCustomMessagesComponent,
    CustomTableServeComponent,
    CustomSwitchComponent,
    CustomTableComponent,
    CalendarioComponent
  ],
  declarations: [
    CustomSearchComponent,
    CardsListComponent,
    CardsListItemComponent,
    CustomModalComponent,
    FormCustomMessagesComponent,
    CustomTableServeComponent,
    CustomPaginationComponent,
    CustomSwitchComponent,
    CustomTableComponent,
    CalendarioComponent

  ]
})
export class ComunModule { }
