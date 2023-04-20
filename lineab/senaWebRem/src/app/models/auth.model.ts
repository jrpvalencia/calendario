import { ActivationCompanyUserModel } from '@models/calendario.model';
import { PersonaModel } from './persona.model';

export interface AuthModel {
  user: PersonaModel;
  permission: string;
  userActivate: ActivationCompanyUserModel;
}
