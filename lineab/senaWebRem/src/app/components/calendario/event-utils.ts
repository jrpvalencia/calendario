import { EventInput } from '@fullcalendar/core';
import { CalendarioModel } from '@models/calendario.model';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
var id = this.JornadaService.traerJornada;
export const INITIAL_EVENTS:CalendarioModel[] = [
  {
    start : this.JornadaService.ge();

  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: TODAY_STR + 'T00:00:00',
    end: TODAY_STR + 'T03:00:00'
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: TODAY_STR + 'T12:00:00',
    end: TODAY_STR + 'T15:00:00'
  }
];

export function createEventId() {
  return String(eventGuid++);
}
