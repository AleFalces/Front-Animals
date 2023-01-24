import React from "react";
import { NavLink } from "react-router-dom";

const FilterBar = () => {
  return (
    <div >
      <h2>Filtrar por: </h2>
      <select name="species" id="species">
        <option defaultValue="default" key="default">Especie</option>
        <option value="cat">Gatx</option>
        <option value="dog">Perrx</option>
        </select>

      <select name="sex" id="sex">
      <option defaultValue="default" key="default">Sexo</option>
      <option value="female">Hembra</option>
      <option value="male">Macho</option>
        </select>

        
      <select name="age" id="age">
      <option defaultValue="default" key="default">Edad</option>
      <option value="poppy">Cachorrx</option>
      <option value="young">Joven</option>
      <option value="adult">Adultx</option>
      </select>

      <select name="size" id="size">
      <option defaultValue="default" key="default">Tamaño</option>
      <option value="small">Chicx</option>
      <option value="medium">Medianx</option>
      <option value="big">Grande</option>
      </select>
    </div>
  );
};

export default FilterBar;
