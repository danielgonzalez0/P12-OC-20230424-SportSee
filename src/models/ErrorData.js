/**
 * create a customized error
 */
export class SpecificError {
  constructor(name, message) {
    this._message = message;
    this._name = name;
  }

  get message() {
    return this._message;
  }

  get name() {
    return this._name;
  }
}
