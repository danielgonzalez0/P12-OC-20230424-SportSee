import SpecificError from '../models/ErrorData';
import UserSessions from '../models/api/UserSessions';

class UserSessionsFactory {
  constructor(data, type) {
    try {
      if (type === 'api') {
        this.data = new UserSessions(data);
      } else {
        throw new SpecificError('Erreur 400', 'Données non disponibles');
      }
    } catch (err) {
      this.data = err;
    }
  }
}

export default UserSessionsFactory;
