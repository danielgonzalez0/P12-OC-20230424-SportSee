import { SpecificError } from '../models/ErrorData';
import { UserSessions } from '../models/api/UserSessions';

export class UserSessionsFactory {
  constructor(data, type) {
    try {
      if (type === 'api') {
        return new UserSessions(data);
      } else {
        throw new SpecificError(
          'Erreur Modelisation',
          'type de format de modelisation inconnu'
        );
      }
    } catch (err) {
      return err;
    }
  }
}
