//importation

import { FAIL_PERSON, GET_PERSON, LOAD_PERSON } from "../actionType/Person";

//initial state
const initialState = {
  personList: [],
  error: null,
  load: false,
};

//pure function
const personReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_PERSON:
      return { ...state, load: true };
    case GET_PERSON:
      return { ...state, load: false, personList: payload.personList };
    case FAIL_PERSON:
      return { ...state, load: false, error: payload };

    default:
      return state;
  }
};
export default personReducer;
