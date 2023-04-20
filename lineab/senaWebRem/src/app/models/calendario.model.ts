
import { DiaJornadaModel } from './dia_jornada.model';
import { GrupoModel } from './grupo.model';
import { JornadaModel } from './jornada.model';


export interface CalendarioModel {
  jornada?: JornadaModel;
  diaJornada?: DiaJornadaModel;
  grupo?: GrupoModel;

}
