const userReducer = (state = { user: null, isLoggedIn: false, error: null }, action) => {
  switch (action.type) {
    case 'SIGNUP_SUCCESS':
    case 'LOGIN_SUCCESS':
      return { user: action.data, isLoggedIn: true, error: null };

    case 'SIGNUP_FAILED':
    case 'LOGIN_FAILED':
      return { user: null, isLoggedIn: false, error: action.errorMsg };

    case 'LOGGED_OUT':
      return {
        ...state, user: null, isLoggedIn: false, error: null,
      };

    default:
      return state;
  }
};

export default userReducer;
