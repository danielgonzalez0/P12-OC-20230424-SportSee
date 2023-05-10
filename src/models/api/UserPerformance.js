import PerformanceData from '../PerformanceData';

/**
 * Map the kind value from english to french using a mapping table
 * @param {string} kind
 * @returns {string} kind translate in french
 */
export const kindMappingTable = (kind) => {
  const mapping = [
    { en: 'cardio', fr: 'Cardio' },
    { en: 'energy', fr: 'Energie' },
    { en: 'endurance', fr: 'Endurance' },
    { en: 'strength', fr: 'Force' },
    { en: 'speed', fr: 'Vitesse' },
    { en: 'intensity', fr: 'Intensité' },
  ];
  const mappedKind = mapping.filter((mappedValue) => kind === mappedValue.en);
  return mappedKind[0].fr;
};

class UserPerformance {
  constructor(user) {
    this.constructor_id = user.data.userId;
    this.constructor_kind = user.data.kind;
    this.constructor_data = user.data.data;
  }

  get id() {
    return this.constructor_id;
  }

  get kind() {
    return this.constructor_kind;
  }

  get data() {
    const arrayOfDatas = this.constructor_data.map((element) => {
      const data = new PerformanceData(element);
      switch (data.kind) {
        case 1:
          return {
            value: data.value,
            kind: kindMappingTable(this.constructor_kind[1]),
          };
        case 2:
          return {
            value: data.value,
            kind: kindMappingTable(this.constructor_kind[2]),
          };
        case 3:
          return {
            value: data.value,
            kind: kindMappingTable(this.constructor_kind[3]),
          };
        case 4:
          return {
            value: data.value,
            kind: kindMappingTable(this.constructor_kind[4]),
          };
        case 5:
          return {
            value: data.value,
            kind: kindMappingTable(this.constructor_kind[5]),
          };
        case 6:
          return {
            value: data.value,
            kind: kindMappingTable(this.constructor_kind[6]),
          };
        default:
          return { data };
      }
    });
    return arrayOfDatas;
  }
}

export default UserPerformance;
