import SpecificError from '../models/ErrorData';
import UserInfos from '../models/api/UserInfos';

class UserInfosFactory {
  constructor(data, type) {
    try {
      if (type === 'api') {
        this.data = new UserInfos(data);
      } else {
        throw new SpecificError('Erreur 400', 'Données non disponibles');
      }
    } catch (err) {
      this.data = err;
    }
  }
}

export default UserInfosFactory;
