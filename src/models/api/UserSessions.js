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
    console.log(arrayOfSessions);
    return arrayOfSessions;
  }
}

// switch (data.day) {
//   case 1:
//     return { day: 'L', sessionLength: data.sessionLength };
//   case 2:
//     return { day: 'M', sessionLength: data.sessionLength };
//   case 3:
//     return { day: 'M', sessionLength: data.sessionLength };
//   case 4:
//     return { day: 'J', sessionLength: data.sessionLength };
//   case 5:
//     return { day: 'V', sessionLength: data.sessionLength };
//   case 6:
//     return { day: 'S', sessionLength: data.sessionLength };
//   case 7:
//     return { day: 'D', sessionLength: data.sessionLength };
//   default:
//     return { day: data.day, sessionLength: data.sessionLength };
// }
