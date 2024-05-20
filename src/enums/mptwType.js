export const MptwType = {
  DRAFT: 'DRAFT',
  ON_GOING: 'ON_GOING',
  DENY: 'DENY',
  APPROVED: 'APPROVED',
  RECEIVE: 'RECEIVE',
  READ: 'READ',
  ISSUE: 'ISSUE',
  REGULAR: 'REGULAR',
  DAILY: 'DAILY',
  CLOSE: 'CLOSE',
  RECEIVER: 'RECEIVER',
  SITE_HSE_OFFICER_SUBCORN: 'SITE_HSE_OFFICER_SUBCORN',
  COORDINATOR: 'COORDINATOR',
  ISSUER: 'ISSUER'
};

export const MptwApproverType = {
  /**
   * backend에서 이미 정의 된 enums
   */
  CIVIL: 'CIVIL',
  BUILDING: 'BUILDING',
  STEEL_STRUCTURE: 'STEEL_STRUCTURE',
  MECHANICAL: 'MECHANICAL',
  PIPING: 'PIPING',
  ELECTRICAL: 'ELECTRICAL',
  INSTRUMENT: 'INSTRUMENT',
  PRECOM: 'PRECOM',
  PRESENTATIVE_SUBCON: 'PRESENTATIVE_SUBCON', // Deprecated
  PRESENTATIVE_SECL: 'PRESENTATIVE_SECL',
  STEEL_STRUCTURE_SUBCON: 'STEEL_STRUCTURE_SUBCON',
  AREA_SAFETY_SUBCON: 'AREA_SAFETY_SUBCON',
  HSE_SITE_IN_CHARGE: 'HSE_SITE_IN_CHARGE', // Deprecated
  PERMIT_ISSUER: 'PERMIT_ISSUER',
  PERMIT_COORDINATOR: 'PERMIT_COORDINATOR',
  PERMIT_RECEIVER: 'PERMIT_RECEIVER',
  OPERATOR: 'OPERATOR',
  RIGGER: 'RIGGER',
  SAFETY: 'SAFETY',

  /**
   * Custom enums
   */
  RECEIVER: 'PERMIT_RECEIVER',
  SITE_HSE_OFFICER_SUBCORN: 'HSE_SITE_IN_CHARGE',
  COORDINATOR: 'PERMIT_COORDINATOR',
  ISSUER: 'PERMIT_ISSUER'
};

export const MptwTypes = {
  getColor: (key) => {
    switch (key) {
      case MptwType.DRAFT:
        return '#F47E29';
      case MptwType.ON_GOING:
        return '#157EFB';
      case MptwType.DENY:
        return '#DE3E47';
      case MptwType.APPROVED:
        return '#67B18F';
      case MptwType.RECEIVE:
        return '#DE3E47';
      case MptwType.READ:
        return '#A4A7A7';
      default:
        return '#000';
    }
  },
  getTypeColor: (key) => {
    switch (key) {
      case MptwType.ISSUE:
        return '#73C1D3';
      case MptwType.REGULAR:
        return '#F2C236';
      case MptwType.DAILY:
        return '#F2C236';
      case MptwType.CLOSE:
        return '#AD5850';
      default:
        return '#67B18f';
    }
  },
  getPressureType: (key) => {
    switch (key) {
      case 'Receiver':
        return MptwApproverType.RECEIVER;
      case 'Site HSE Officer (Subcon.)':
        return MptwApproverType.SITE_HSE_OFFICER_SUBCORN;
      case 'Coordinator':
        return MptwApproverType.COORDINATOR;
      case 'Issuer':
        return MptwApproverType.ISSUER;
      default:
        return MptwApproverType.RECEIVER;
    }
  },
  getPressureKey: (key) => {
    switch (key) {
      case 'Receiver':
        return 'receivers';
      case 'Site HSE Officer (Subcon.)':
        return 'area-safety-subcon';
      case 'Coordinator':
        return 'coordinators';
      case 'Issuer':
        return 'issuers';
      default:
        return 'receivers';
    }
  },
  getRodeClosureType: (key) => {
    switch (key) {
      case 'Civil':
        return MptwApproverType.CIVIL;
      case 'Bulding':
        return MptwApproverType.BUILDING;
      case 'Steel Structure':
        return MptwApproverType.STEEL_STRUCTURE;
      case 'Mechanical':
        return MptwApproverType.MECHANICAL;
      case 'Piping':
        return MptwApproverType.PIPING;
      case 'Electrical':
        return MptwApproverType.ELECTRICAL;
      case 'Instrument':
        return MptwApproverType.INSTRUMENT;
      case 'Precom':
        return MptwApproverType.PRECOM;
      case 'HSE':
        return MptwApproverType.PRESENTATIVE_SECL;
      default:
        return '';
    }
  },
  getRodeClosureKey: (key) => {
    switch (key) {
      case 'Civil':
        return 'civil';
      case 'Bulding':
        return 'building';
      case 'Steel Structure':
        return 'steel-structure';
      case 'Mechanical':
        return 'mechanical';
      case 'Piping':
        return 'piping';
      case 'Electrical':
        return 'electrical';
      case 'Instrument':
        return 'instrument';
      case 'Precom':
        return 'precom';
      case 'HSE':
        return 'presentative-secl';
      default:
        return '';
    }
  },
  getMechanicalKey: (key) => {
    switch (key) {
      case 'Operator':
        return 'operator';
      case 'Rigger':
        return 'rigger';
      case 'Safety':
        return 'safety';
      default:
        return '';
    }
  },
  getMechanicalType: (key) => {
    switch (key) {
      case 'Operator':
        return MptwApproverType.OPERATOR;
      case 'Rigger':
        return MptwApproverType.RIGGER;
      case 'Safety':
        return MptwApproverType.SAFETY;
      default:
        return '';
    }
  },
  getGratingType: (key) => {
    switch (key) {
      case 'steel-structure-subcon':
        return MptwApproverType.STEEL_STRUCTURE_SUBCON;
      case 'area-safety-subcon':
        return MptwApproverType.AREA_SAFETY_SUBCON;
      case 'steel-structure':
        return MptwApproverType.STEEL_STRUCTURE;
      case 'coordinators':
        return MptwApproverType.PERMIT_COORDINATOR;
      case 'issuers':
        return MptwApproverType.PERMIT_ISSUER;
      default:
        return '';
    }
  },
  getExcavationKey: (key) => {
    switch (key) {
      case 'Civil':
        return 'civil';
      case 'Piping':
        return 'piping';
      case 'Electrical':
        return 'electrical';
      case 'Instrument':
        return 'instrument';
      default:
        return '';
    }
  },
  getExcavationType: (key) => {
    switch (key) {
      case 'Civil':
        return MptwApproverType.CIVIL;
      case 'Piping':
        return MptwApproverType.PIPING;
      case 'Electrical':
        return MptwApproverType.ELECTRICAL;
      case 'Instrument':
        return MptwApproverType.INSTRUMENT;
      default:
        return '';
    }
  },
  getLotoType: (key) => {
    switch (key) {
      case 'electrical':
        return MptwApproverType.ELECTRICAL;
      case 'instrument':
        return MptwApproverType.INSTRUMENT;
      case 'mechanical':
        return MptwApproverType.MECHANICAL;
      case 'piping':
        return MptwApproverType.PIPING;
      case 'precom':
        return MptwApproverType.PRECOM;
      case 'presentative-secl':
        return MptwApproverType.PRESENTATIVE_SECL;

      case 'closing-electrical':
        return MptwApproverType.MECHANICAL;
      case 'closing-instrument':
        return MptwApproverType.PIPING;
      case 'closing-mechanical':
        return MptwApproverType.ELECTRICAL;
      case 'closing-piping':
        return MptwApproverType.INSTRUMENT;
      case 'closing-precom':
        return MptwApproverType.PRECOM;
      case 'closing-presentative-secl':
        return MptwApproverType.PRESENTATIVE_SECL;

      case 'issuers':
        return MptwApproverType.PERMIT_ISSUER;
      default:
        return '';
    }
  }
};
