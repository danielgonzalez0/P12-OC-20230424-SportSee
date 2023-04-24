import { SpecificError } from '../models/ErrorData';
import { UserInfos } from '../models/api/UserInfos';

export class UserInfosFactory {
  constructor(data, type) {
    try {
      if (type === 'api') {
        return new UserInfos(data);
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
