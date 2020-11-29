import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {AuthTypes} from './types';

export const emailChanged = (text) => {
  return {
    type: AuthTypes.EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = (text) => {
  return {
    type: AuthTypes.PASSWORD_CHANGED,
    payload: text,
  };
};

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    dispatch({type: AuthTypes.LOGIN_USER});

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);

        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((user) => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({type: AuthTypes.LOGIN_USER_FAIL});
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: AuthTypes.LOGIN_USER_SUCCESS,
    payload: user,
  });
  Actions.main();
};
