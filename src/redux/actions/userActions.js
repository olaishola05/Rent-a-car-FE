export const registerUserToApi = (userData) => (dispatch) => {
  fetch('http://127.0.0.1:3001/api/v1/users', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ user: userData }),
  })
    .then((resp) => resp.json())
    .then((data) => {
      if (data.error) {
        const key = Object.keys(data.error);
        const errorMsg = data.error[key][0];
        dispatch({ type: 'SIGNUP_FAILED', errorMsg });
      } else {
        localStorage.setItem('user', JSON.stringify(data));
        localStorage.setItem('token', data.token);
        localStorage.setItem('isLoggedIn', true);
        window.history.pushState({}, '', '/');
        window.location.reload();
        dispatch({ type: 'SIGNUP_SUCCESS', data });
      }
    });
};

export const logUserToApi = (userData) => (dispatch) => {
  fetch('http://127.0.0.1:3001/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Accept: 'application/json',
      Authorization: localStorage.token,
    },
    body: JSON.stringify({ user: userData }),
  })
    .then((resp) => resp.json())
    .then((data) => {
      if (data.error) {
        const key = Object.keys(data.error);
        const errorMsg = data.error[key][0];
        dispatch({ type: 'LOGIN_FAILED', errorMsg });
      } else {
        localStorage.setItem('user', JSON.stringify(data));
        localStorage.setItem('token', data.token);
        localStorage.setItem('isLoggedIn', true);
        window.history.pushState({}, '', '/');
        window.location.reload();
        dispatch({ type: 'LOGIN_SUCCESS', data });
      }
    });
};
