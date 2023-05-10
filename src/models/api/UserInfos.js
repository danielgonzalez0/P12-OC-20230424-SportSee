export class UserInfos {
  constructor(user) {
    this._id = user.data.id;
    this._firstName = user.data.userInfos.firstName;
    this._lastName = user.data.userInfos.lastName;
    this._age = user.data.userInfos.age;
    this._todayScore = user.data.todayScore;
    this._score = user.data.score;
    this._calorieCount = user.data.keyData.calorieCount;
    this._proteinCount = user.data.keyData.proteinCount;
    this._carbohydrateCount = user.data.keyData.carbohydrateCount;
    this._lipidCount = user.data.keyData.lipidCount;
  }

  get id() {
    return this._id;
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get age() {
    return this._age;
  }
  get todayScore() {
    if (this._todayScore) {
      return this._todayScore;
    } else {
      return this._score;
    }
  }
  get calorieCount() {
    return this._calorieCount;
  }
  get proteinCount() {
    return this._proteinCount;
  }
  get carbohydrateCount() {
    return this._carbohydrateCount;
  }
  get lipidCount() {
    return this._lipidCount;
  }
}
