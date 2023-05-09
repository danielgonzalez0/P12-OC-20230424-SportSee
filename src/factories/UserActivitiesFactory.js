import { SpecificError } from '../models/ErrorData';
import { UserActivities } from '../models/api/UserActivities';

export class UserActivitiesFactory {
  constructor(data, type) {
    try {
      if (type === 'api') {
        return new UserActivities(data);
      } else {
        throw new SpecificError('Erreur 400', 'Données non disponibles');
      }
    } catch (err) {
      return err;
    }
  }
}
