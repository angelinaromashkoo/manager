import {AuthTypes} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case AuthTypes.EMAIL_CHANGED:
      return {...state, email: action.payload};

    case AuthTypes.PASSWORD_CHANGED:
      return {...state, password: action.payload};

    case AuthTypes.LOGIN_USER:
      return {...state, loading: true, error: ''};

    case AuthTypes.LOGIN_USER_SUCCESS:
      return {...state, ...INITIAL_STATE, user: action.payload};

    case AuthTypes.LOGIN_USER_FAIL:
      return {
        ...state,
        error: 'Authentication failed',
        password: '',
        loading: false,
      };

    default:
      return state;
  }
};
