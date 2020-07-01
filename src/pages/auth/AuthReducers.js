export const forgotReducer = (state, action) => {
  switch (action.type) {
    case "REQUEST_START":
      return {
        ...state,
        loading: true,
      };
    case "REQUEST_SUCCESS":
      return {
        success: true,
        loading: false,
        error: null,
      };
    case "REQUEST_FAILED":
      return {
        success: false,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const restoreReducer = (state, action) => {
  switch (action.type) {
    case "CHECK_RECOVERY_TOKEN":
      return {
        ...state,
        loading: true,
      };
    case "VALID_RECOVERY_TOKEN":
      return {
        ...state,
        loading: false,
        error: null,
        validRecoveryToken: true,
      };
    case "INVALID_RECOVERY_TOKEN":
      return {
        ...state,
        loading: false,
        validRecoveryToken: false,
        error: action.payload,
      };
    case "NEW_PASSWORD_REQUEST":
      return {
        ...state,
        loading: true,
        validRecoveryToken: true,
        error: null,
      };
    case "NEW_PASSWORD_SUCCESS":
      return {
        ...state,
        success: true,
        loading: false,
        error: null,
      };
    case "NEW_PASSWORD_FAILED":
      return {
        ...state,
        success: false,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
