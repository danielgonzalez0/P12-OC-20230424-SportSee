import { SpecificError } from '../models/ErrorData';
import { UserActivities } from '../models/api/UserActivities';

export class UserActivitiesFactory {
  constructor(data, type) {
    try {
      if (type === 'api') {
        return new UserActivities(data);
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

