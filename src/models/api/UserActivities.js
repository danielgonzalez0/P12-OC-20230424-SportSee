import { SessionActivity } from '../SessionActivity';

export class UserActivities {
  constructor(user) {
    this._id = user.data.userId;
    this._sessions = user.data.sessions;
  }

  get id() {
    return this._id;
  }
  get sessions() {
    let arrayOfSessions = this._sessions.map(
      (session) => new SessionActivity(session)
    );
    return arrayOfSessions;
  }
}
