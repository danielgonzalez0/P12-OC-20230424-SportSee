import { SessionDuration } from '../SessionDuration';

export class UserSessions {
  constructor(user) {
    this._id = user.data.userId;
    this._sessions = user.data.sessions;
  }

  get id() {
    return this._id;
  }
  get sessions() {
    let arrayOfSessions = this._sessions.map((session) => {
      const data = new SessionDuration(session);
      return { day: data.day, sessionLength: data.sessionLength };
    });
    return arrayOfSessions;
  }
}


