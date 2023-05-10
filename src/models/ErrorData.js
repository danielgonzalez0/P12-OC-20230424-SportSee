/**
 * create a customized error
 */
class SpecificError {
  constructor(name, message) {
    this.constructor_message = message;
    this.constructor_name = name;
  }

  get message() {
    return this.constructor_message;
  }

  get name() {
    return this.constructor_name;
  }
}

export default SpecificError;
