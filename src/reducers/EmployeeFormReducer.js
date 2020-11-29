import {EmployeeTypes} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EmployeeTypes.EMPLOYEE_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value};

    case EmployeeTypes.EMPLOYEE_CREATE:
      return INITIAL_STATE;

    case EmployeeTypes.EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;

    default:
      return state;
  }
};
