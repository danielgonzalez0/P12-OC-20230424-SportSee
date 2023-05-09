import { SpecificError } from '../models/ErrorData';
import { UserSessions } from '../models/api/UserSessions';

export class UserSessionsFactory {
  constructor(data, type) {
    try {
      if (type === 'api') {
        return new UserSessions(data);
      } else {
        throw new SpecificError('Erreur 400', 'Données non disponibles');
      }
    } catch (err) {
      return err;
    }
  }
}
