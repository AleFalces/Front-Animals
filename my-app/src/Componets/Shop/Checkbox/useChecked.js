import { useState } from "react";
import { setChecklist } from "../../../Redux/Actions";
import { useDispatch } from "react-redux";

export const useChecked = (initialState) => {
  const [checked, setChecked] = useState(initialState);
  const dispatch = useDispatch();

  const handlerClickCheckbox = ({ target }) => {
    setChecked({
      ...checked,
      [target.name]: !checked[target.name], // probar sin [target.name]
    });
    console.log("FUNCION HANDLERCLICKCHECK!!", checked);
    dispatch(setChecklist(checked));
  };
  return [checked, handlerClickCheckbox];
};
