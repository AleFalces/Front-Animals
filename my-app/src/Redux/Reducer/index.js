// import {} from "../ActionTypes";

const initialState = {
  num: 0,
  allPets: [],
  details: {},
  allUsers: [],
};

const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NUM":
      return {
        ...state,
        num: state.num + 1,
      };
    default:
      return state;
  }
};

export default RootReducer;
