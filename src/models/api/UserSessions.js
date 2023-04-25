import { SessionDuration } from '../SessionDuration';

export class UserSessions {
  constructor(data) {
    this._id = data.userId;
    this._sessions = data.sessions;
  }

  get id() {
    return this._id;
  }
  get sessions() {
    let arrayOfSessions = this._sessions.map(
      (session) => new SessionDuration(session)
    );
    return arrayOfSessions;
  }
}
