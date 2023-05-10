class SessionActivity {
  constructor(data) {
    this.constructor_day = data.day;
    this.constructor_kilogram = data.kilogram;
    this.constructor_calories = data.calories;
  }

  get day() {
    return this.constructor_day;
  }

  get kilogram() {
    return this.constructor_kilogram;
  }

  get calories() {
    return this.constructor_calories;
  }
}

export default SessionActivity;
