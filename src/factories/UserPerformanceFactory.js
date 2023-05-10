import SpecificError from '../models/ErrorData';
import UserPerformance from '../models/api/UserPerformance';

class UserPerformanceFactory {
  constructor(data, type) {
    try {
      if (type === 'api') {
        this.data = new UserPerformance(data);
      } else {
        throw new SpecificError('Erreur 400', 'Données non disponibles');
      }
    } catch (err) {
      this.data = err;
    }
  }
}

export default UserPerformanceFactory;
