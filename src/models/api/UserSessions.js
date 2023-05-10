import SessionDuration from '../SessionDuration';

class UserSessions {
  constructor(user) {
    this.constructor_id = user.data.userId;
    this.constructor_sessions = user.data.sessions;
  }

  get id() {
    return this.constructor_id;
  }

  get sessions() {
    const arrayOfSessions = this.constructor_sessions.map((session) => {
      const data = new SessionDuration(session);
      return { day: data.day, sessionLength: data.sessionLength };
    });
    return arrayOfSessions;
  }
}

export default UserSessions;
