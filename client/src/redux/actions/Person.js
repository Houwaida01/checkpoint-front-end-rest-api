//IMPORTATION
import { FAIL_PERSON, GET_PERSON, LOAD_PERSON } from "../actionType/Person";

import axios from "axios";

//get person
export const getPerson = () => async (dispatch) => {
  dispatch({ type: LOAD_PERSON });
  try {
    let result = await axios.get("/api/personne");
    dispatch({ type: GET_PERSON, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_PERSON, payload: error.response });
  }
};

//add person
export const addPerson = (newPerson) => async (dispatch) => {
  try {
    await axios.post("/api/personne/add", newPerson);
    dispatch(getPerson());
  } catch (error) {
    dispatch({ type: FAIL_PERSON, payload: error.response });
  }
};

//delete person
export const deletePerson = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/personne/deletePers/${id}`);
    dispatch(getPerson());
  } catch (error) {
    dispatch({ type: FAIL_PERSON, payload: error.response });
  }
};
//edit person
export const editPerson=(id,editPerson)=>async(dispatch)=>{
    try {
        await axios.put(`/api/personne/editPers/${id}`,editPerson)
        dispatch(getPerson())
    } catch (error) {
        dispatch({ type: FAIL_PERSON, payload: error.response });
        
    }
}