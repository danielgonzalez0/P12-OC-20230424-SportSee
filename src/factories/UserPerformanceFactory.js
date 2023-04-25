import { SpecificError } from '../models/ErrorData';
import { UserPerformance } from '../models/api/UserPerformance';

export class UserPerformanceFactory {
  constructor(data, type) {
    try {
      if (type === 'api') {
        return new UserPerformance(data);
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
