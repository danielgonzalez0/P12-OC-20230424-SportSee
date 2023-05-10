import SpecificError from '../models/ErrorData';
import UserActivities from '../models/api/UserActivities';

class UserActivitiesFactory {
  constructor(data, type) {
    try {
      if (type === 'api') {
        this.data = new UserActivities(data);
      } else {
        throw new SpecificError('Erreur 400', 'Données non disponibles');
      }
    } catch (err) {
      this.data = err;
    }
  }
}
export default UserActivitiesFactory;
