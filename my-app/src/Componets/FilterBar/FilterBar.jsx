import React from "react";

const FilterBar = () => {
  return (
    <div >
      <h2>Filtrar por: </h2>
      <select name="species" id="species">
        <option defaultValue="default" key="default">Especie</option>
        <option value="gato">Gato/a</option>
        <option value="perro">Perro/a</option>
        </select>

      <select name="sex" id="sex">
      <option defaultValue="default" key="default">Sexo</option>
      <option value="hembra">Hembra</option>
      <option value="macho">Macho</option>
        </select>

        
      <select name="age" id="age">
      <option defaultValue="default" key="default">Edad</option>
      <option value="cachorro">Cachorro/a</option>
      <option value="joven">Joven</option>
      <option value="adulto">Adulto/a</option>
      </select>

      <select name="size" id="size">
      <option defaultValue="default" key="default">Tamaño</option>
      <option value="pequeño">Chico/a</option>
      <option value="mediano">Mediano/a</option>
      <option value="grande">Grande</option>
      </select>
    </div>
  );
};

export default FilterBar;
