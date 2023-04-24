export class UserInfos {
  constructor(data) {
    this._id = data.id;
    this._firstName = data.userInfos.firstName;
    this._lastName = data.userInfos.lastName;
    this._age = data.userInfos.age;
    this._todayScore = data.todayScore;
    this._score = data.score;
    this._calorieCount = data.keyData.calorieCount;
    this._proteinCount = data.keyData.proteinCount;
    this._carbohydrateCount = data.keyData.carbohydrateCount;
    this._lipidCount = data.keyData.lipidCount;
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
