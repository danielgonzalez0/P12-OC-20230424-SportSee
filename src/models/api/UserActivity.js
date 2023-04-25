import { SessionActivity } from "../SessionActivity";

export class UserActivity {
  constructor(data) {
    this._id = data.userId;
    this._sessions = data.sessions;
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
