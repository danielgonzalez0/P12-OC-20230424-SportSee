class SessionDuration {
  constructor(data) {
    this.constructor_day = data.day;
    this.constructor_sessionLength = data.sessionLength;
  }

  get day() {
    return this.constructor_day;
  }

  get sessionLength() {
    return this.constructor_sessionLength;
  }
}

export default SessionDuration;
