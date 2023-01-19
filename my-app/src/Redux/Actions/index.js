import axios from "axios";

export function num() {
  return async function (dispatch) {
    return dispatch({
      type: "NUM",
    });
  };
}
