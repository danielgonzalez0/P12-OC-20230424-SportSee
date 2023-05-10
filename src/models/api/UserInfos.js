class UserInfos {
  constructor(user) {
    this.constructor_id = user.data.id;
    this.constructor_firstName = user.data.userInfos.firstName;
    this.constructor_lastName = user.data.userInfos.lastName;
    this.constructor_age = user.data.userInfos.age;
    this.constructor_todayScore = user.data.todayScore;
    this.constructor_score = user.data.score;
    this.constructor_calorieCount = user.data.keyData.calorieCount;
    this.constructor_proteinCount = user.data.keyData.proteinCount;
    this.constructor_carbohydrateCount = user.data.keyData.carbohydrateCount;
    this.constructor_lipidCount = user.data.keyData.lipidCount;
  }

  get id() {
    return this.constructor_id;
  }

  get firstName() {
    return this.constructor_firstName;
  }

  get lastName() {
    return this.constructor_lastName;
  }

  get age() {
    return this.constructor_age;
  }

  get todayScore() {
    if (this.constructor_todayScore) {
      return this.constructor_todayScore;
    }
    return this.constructor_score;
  }

  get calorieCount() {
    return this.constructor_calorieCount;
  }

  get proteinCount() {
    return this.constructor_proteinCount;
  }

  get carbohydrateCount() {
    return this.constructor_carbohydrateCount;
  }

  get lipidCount() {
    return this.constructor_lipidCount;
  }
}

export default UserInfos;
