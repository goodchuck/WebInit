export const ErrorType = {
  /**
   * Common
   */
  free: 'free',

  /**
   * M-PTW
   */
  permitRequired: 'permitRequired',
  signatureNotRequired: 'signatureNotRequired',
  signatureApprovalComfirm: 'signatureApprovalComfirm',
  signatureApprovalSuccess: 'signatureApprovalSuccess',
  notSelectedUser: 'notSelectedUser',
};

export const ErrorTypeMsg = {
  getDescription: (key, msg) => {
    switch (key) {
      // common
      case ErrorType.free:
        return msg;

      // M=PTW
      case ErrorType.permitRequired:
        return 'Please select the Main Permit.';
      case ErrorType.signatureNotRequired:
        return 'Please enter required values.';
      case ErrorType.signatureApprovalComfirm:
        return 'Would you like signatureAo proceed with the approval ?';
      case ErrorType.signatureApprovalSuccess:
        return 'It has been processed';
      case ErrorType.notSelectedUser:
        return 'Please select the approver first.';

      default:
        return '';
    }
  },
};
