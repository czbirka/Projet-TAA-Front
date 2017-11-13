import { Condition } from './condition';
import { User } from './user';

export class Activite {
    id: number;
    nom: string;
    condition: Condition;
    lieux: any[];
    user: User;
  }

