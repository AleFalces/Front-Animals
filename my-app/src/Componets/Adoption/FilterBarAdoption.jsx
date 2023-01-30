import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterBySpecie,
  filterBySex,
  filterByAge,
  filterBySize,
  filterBySearchArea,
  getAdoptionPets,
  filterValuesAdoption
} from "../../Redux/Actions";

const FilterBar = () => {
  const dispatch = useDispatch();
  const defaultValue = "defaultValue";
  const [input, setInput] = useState("");

  const handlerInputChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }
  const handlerFilterBySpecie = (e) => {
    e.preventDefault();
    if (e.target.value !== defaultValue) {
      dispatch(filterBySpecie(e.target.value));
    }
    e.target.value = defaultValue;
  };

  const handlerFilterBySex = (e) => {
    e.preventDefault();
    if (e.target.value !== defaultValue) {
      dispatch(filterBySex(e.target.value));
    }
    e.target.value = defaultValue;
  };

  const handlerFilterByAge = (e) => {
    e.preventDefault();
    if (e.target.value !== defaultValue) {
      dispatch(filterByAge(e.target.value));
    }
    e.target.value = defaultValue;
  };

  const handlerFilterBySize = (e) => {
    e.preventDefault();
    if (e.target.value !== defaultValue) {
      dispatch(filterBySize(e.target.value));
    }
    e.target.value = defaultValue;
  };

  const handlerSearchByArea = (e) => {
    e.preventDefault();
    if (input !== "" && input.trim() !== "") {
      dispatch(filterBySearchArea(input.trim()));
    } else {
      alert("Debes especificar un area para que podamos buscar!");
    }
  };

  const handlerRefreshPets = (e) => {
    e.preventDefault();
    dispatch(getAdoptionPets());
  };


  useEffect(() => {}, [dispatch]);
return (
    <div className="filterBarContainer">
      <h2>Mascotas en Adopcion</h2>
      <div className="selectsContainer">
        <button
          className="selectsFilter"
          onClick={(e) => handlerRefreshPets(e)}
        >
          Todos
        </button>

        <select
          className="selectsFilter"
          name="species"
          id="species"
          onChange={(e) => handlerFilterBySpecie(e)}
        >
          <option value="defaultValue" key="default">
            Especie
          </option>
          <option value="gato">Gato/a</option>
          <option value="perro">Perro/a</option>
        </select>

        <select
          className="selectsFilter"
          name="sex"
          id="sex"
          onChange={(e) => handlerFilterBySex(e)}
        >
          <option value="defaultValue" key="default">
            Sexo
          </option>
          <option value="hembra">Hembra</option>
          <option value="macho">Macho</option>
        </select>

        <select
          className="selectsFilter"
          name="age"
          id="age"
          onChange={(e) => handlerFilterByAge(e)}
        >
          <option value="defaultValue" key="default">
            Edad
          </option>
          <option value="cachorro">Cachorro/a</option>
          <option value="joven">Joven</option>
          <option value="adulto">Adulto/a</option>
        </select>

        <select
          className="selectsFilter"
          name="size"
          id="size"
          onChange={(e) => handlerFilterBySize(e)}
        >
          <option value="defaultValue" key="default">
            Tamaño
          </option>
          <option value="pequeño">Pequeño</option>
          <option value="mediano">Mediano/a</option>
          <option value="grande">Grande</option>
        </select>
      </div>
      <div className="searchBar">
        <label className="titleSearch">Buscar por area:</label>
        <input
          className="inputSearch"
          type="text"
          onChange={(e) => handlerInputChange(e)}
          placeholder="Ej: La plata..."
        />
        <button
          className="buttonSearch"
          onClick={(e) => handlerSearchByArea(e)}
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

export default FilterBar;


// return (
//     <div className="filterBarContainer">
//       <h2>Mascotas en Adopcion</h2>
//       <div className="selectsContainer">
//         <button
//           className="selectsFilter"
//           onClick={(e) => handlerRefreshPets(e)}
//         >
//           Todos
//         </button>

//         <select
//           className="selectsFilter"
//           name="species"
//           id="species"
//           onChange={(e) => handlerFilterBySpecie(e)}
//         >
//           <option value="defaultValue" key="default">
//             Especie
//           </option>
//           <option value="gato">Gato/a</option>
//           <option value="perro">Perro/a</option>
//         </select>

//         <select
//           className="selectsFilter"
//           name="sex"
//           id="sex"
//           onChange={(e) => handlerFilterBySex(e)}
//         >
//           <option value="defaultValue" key="default">
//             Sexo
//           </option>
//           <option value="hembra">Hembra</option>
//           <option value="macho">Macho</option>
//         </select>

//         <select
//           className="selectsFilter"
//           name="age"
//           id="age"
//           onChange={(e) => handlerFilterByAge(e)}
//         >
//           <option value="defaultValue" key="default">
//             Edad
//           </option>
//           <option value="cachorro">Cachorro/a</option>
//           <option value="joven">Joven</option>
//           <option value="adulto">Adulto/a</option>
//         </select>

//         <select
//           className="selectsFilter"
//           name="size"
//           id="size"
//           onChange={(e) => handlerFilterBySize(e)}
//         >
//           <option value="defaultValue" key="default">
//             Tamaño
//           </option>
//           <option value="pequeño">Pequeño</option>
//           <option value="mediano">Mediano/a</option>
//           <option value="grande">Grande</option>
//         </select>
//       </div>
//       <div className="searchBar">
//         <label className="titleSearch">Buscar por area:</label>
//         <input
//           className="inputSearch"
//           type="text"
//           onChange={(e) => handlerInputChange(e)}
//           placeholder="Ej: La plata..."
//         />
//         <button
//           className="buttonSearch"
//           onClick={(e) => handlerSearchByArea(e)}
//         >
//           Buscar
//         </button>
//       </div>
//     </div>
//   );