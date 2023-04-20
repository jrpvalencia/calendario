import { Component, ChangeDetectorRef } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import esLocale from '@fullcalendar/core/locales/es';
import { JornadaService } from '@services/jornada.service';
import { JornadaModel } from '@models/jornada.model';

@Component({
  selector: 'calendario-root',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {
  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    locale: esLocale,
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
    
  };
  currentEvents: EventApi[] = [];
  jornadas: JornadaModel[] = [];
  constructor(
    private changeDetector: ChangeDetectorRef,
    private _JornadaService: JornadaService
    ) 
    {
    }
ngOnInit():void{
  this.getJornada();
}
  getJornada(){
   this._JornadaService.traerJornada().subscribe(
      jornada => {
  this.jornadas=jornada;
      
  //console.log(jornada, "esta fue");
  this.jornadas.forEach(jor=>{
  
  console.log(jor.horaInicial, "vale mano", jor.horaFinal, jor.diaJornada);
  })}
  )}
  


  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  
  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('ingresa el titulo de nuevo evento');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Quieres eliminar este evento? '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
    
  }
  
}
