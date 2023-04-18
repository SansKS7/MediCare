export const initialState = {
  PatientUser: window.localStorage.getItem('patient_user'),
};

export const actionTypes = {
  SET_PATIENT: "SET_PATIENT",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_PATIENT:
      window.localStorage.setItem('patient_user',action.PatientUser);
      return {
        ...state,
        PatientUser: action.PatientUser,
      };
    default:
      return state;
  }
};

export default reducer;
