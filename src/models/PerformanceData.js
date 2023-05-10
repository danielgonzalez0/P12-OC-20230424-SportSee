class PerformanceData {
  constructor(data) {
    this.constructor_value = data.value;
    this.constructor_kind = data.kind;
  }

  get value() {
    return this.constructor_value;
  }

  get kind() {
    return this.constructor_kind;
  }
}

export default PerformanceData;
