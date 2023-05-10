import SessionActivity from '../SessionActivity';

class UserActivities {
  constructor(user) {
    this.constructor_id = user.data.userId;
    this.constructor_sessions = user.data.sessions;
  }

  get id() {
    return this.constructor_id;
  }

  get sessions() {
    const arrayOfSessions = this.constructor_sessions.map(
      (session) => new SessionActivity(session),
    );
    return arrayOfSessions;
  }
}

export default UserActivities;
