import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filterLostSearchArea, filterLostSpecies, filterLostSex, filterLostAge, filterLostSize, getLostPets, getPets } from "../../Redux/Actions";

export default function FilterBar ({value})  {
  const dispatch = useDispatch();
  const defaultValue = "defaultValue";
  const [input, setInput] = useState("");
console.log(value);
  const handlerInputChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }

  let arrayFilterValues = []
  function handlerFilterBySpecie(e) {
    e.preventDefault();
    if (e.target.value === defaultValue) {
      if(arrayFilterValues.includes("gato") || arrayFilterValues.includes("perro")) {
        let index;
        arrayFilterValues.forEach((el, i) => el === "perro" || el === "gato" ? index = i:null) 
        if(index === 0)  return arrayFilterValues.shift();
        if(index === arrayFilterValues.length-1)  return arrayFilterValues.pop();
        let result = [...arrayFilterValues.slice(0, index),  ...arrayFilterValues.slice(index+1)];
        return arrayFilterValues = result;
      }
    }
    if(e.target.value === "gato") {
      if(arrayFilterValues.includes("perro")) {
        let index;
        arrayFilterValues.forEach((el, i) => el === "perro"? index = i:null) 
        if(index === 0) {
          arrayFilterValues.shift();
          return arrayFilterValues.push(e.target.value)
        };
        if(index === arrayFilterValues.length-1)  {
          arrayFilterValues.pop();
          return arrayFilterValues.push(e.target.value);
        };
        let result = [...arrayFilterValues.slice(0, index),  ...arrayFilterValues.slice(index+1)];
        result.push(e.target.value)
        return arrayFilterValues = result
      } else {
        arrayFilterValues.push(e.target.value)
      }
    }
    if(e.target.value === "perro") {
      if(arrayFilterValues.includes("gato")) {
        let index;
        arrayFilterValues.forEach((el, i) => el === "gato"? index = i:null) 
        if(index === 0) {
          arrayFilterValues.shift();
          return arrayFilterValues.push(e.target.value)
        };
        if(index === arrayFilterValues.length-1)  {
          arrayFilterValues.pop();
          return arrayFilterValues.push(e.target.value);
        };
        let result = [...arrayFilterValues.slice(0, index),  ...arrayFilterValues.slice(index+1)];
        result.push(e.target.value)
        return arrayFilterValues = result
      }  else {
        arrayFilterValues.push(e.target.value)
      }     
    }
  }


  function handlerFilterBySex (e) {
    e.preventDefault();
    if (e.target.value === defaultValue) {
      if(arrayFilterValues.includes("macho") || arrayFilterValues.includes("hembra")) {
        let index;
        arrayFilterValues.forEach((el, i) => el === "macho" || el === "hembra" ? index = i:null) 
        if(index === 0)  return arrayFilterValues.shift();
        if(index === arrayFilterValues.length-1)  return arrayFilterValues.pop();
        let result = [...arrayFilterValues.slice(0, index),  ...arrayFilterValues.slice(index+1)];
        return arrayFilterValues = result;
      }
    }
    if(e.target.value === "macho") {
      if(arrayFilterValues.includes("hembra")) {
        let index;
        arrayFilterValues.forEach((el, i) => el === "hembra"? index = i:null) 
        if(index === 0) {
          arrayFilterValues.shift();
          return arrayFilterValues.push(e.target.value)
        };
        if(index === arrayFilterValues.length-1)  {
          arrayFilterValues.pop();
          return arrayFilterValues.push(e.target.value);
        };
        let result = [...arrayFilterValues.slice(0, index),  ...arrayFilterValues.slice(index+1)];
        result.push(e.target.value)
        return arrayFilterValues = result
      } else {
        arrayFilterValues.push(e.target.value)
      }
    }
    if(e.target.value === "hembra") {
      if(arrayFilterValues.includes("macho")) {
        let index;
        arrayFilterValues.forEach((el, i) => el === "macho"? index = i:null) 
        if(index === 0) {
          arrayFilterValues.shift();
          return arrayFilterValues.push(e.target.value)
        };
        if(index === arrayFilterValues.length-1)  {
          arrayFilterValues.pop();
          return arrayFilterValues.push(e.target.value);
        };
        let result = [...arrayFilterValues.slice(0, index),  ...arrayFilterValues.slice(index+1)];
        result.push(e.target.value)
        return arrayFilterValues = result
      }  else {
        arrayFilterValues.push(e.target.value)
      }     
    }
  }


function handlerFilterByAge(e) {
  e.preventDefault();
    if (e.target.value === defaultValue) {
      if(arrayFilterValues.includes("cachorro") || arrayFilterValues.includes("joven") || arrayFilterValues.includes("adulto")) {
        let index;
        arrayFilterValues.forEach((el, i) => el === "cachorro" || el === "joven" || el === "adulto" ? index = i:null) 
        if(index === 0)  return arrayFilterValues.shift();
        if(index === arrayFilterValues.length-1)  return arrayFilterValues.pop();
        let result = [...arrayFilterValues.slice(0, index),  ...arrayFilterValues.slice(index+1)];
        return arrayFilterValues = result;
      }
    }
    if(e.target.value === "cachorro") {
      if(arrayFilterValues.includes("joven") || arrayFilterValues.includes("adulto")) {
        let index;
        arrayFilterValues.forEach((el, i) => el === "joven" || el === "adulto"? index = i:null) 
        if(index === 0) {
          arrayFilterValues.shift();
          return arrayFilterValues.push(e.target.value)
        };
        if(index === arrayFilterValues.length-1)  {
          arrayFilterValues.pop();
          return arrayFilterValues.push(e.target.value);
        };
        let result = [...arrayFilterValues.slice(0, index),  ...arrayFilterValues.slice(index+1)];
        result.push(e.target.value)
        return arrayFilterValues = result
      } else {
        arrayFilterValues.push(e.target.value)
      }
    }
    if(e.target.value === "joven") {
      if(arrayFilterValues.includes("cachorro") || arrayFilterValues.includes("adulto")) {
        let index;
        arrayFilterValues.forEach((el, i) => el === "cachorro" || el === "adulto"? index = i:null) 
        if(index === 0) {
          arrayFilterValues.shift();
          return arrayFilterValues.push(e.target.value)
        };
        if(index === arrayFilterValues.length-1)  {
          arrayFilterValues.pop();
          return arrayFilterValues.push(e.target.value);
        };
        let result = [...arrayFilterValues.slice(0, index),  ...arrayFilterValues.slice(index+1)];
        result.push(e.target.value)
        return arrayFilterValues = result
      }  else {
        arrayFilterValues.push(e.target.value)
      }     
    }
    if(e.target.value === "adulto") {
      if(arrayFilterValues.includes("cachorro") || arrayFilterValues.includes("joven")) {
        let index;
        arrayFilterValues.forEach((el, i) => el === "cachorro" || el === "joven"? index = i:null) 
        if(index === 0) {
          arrayFilterValues.shift();
          return arrayFilterValues.push(e.target.value)
        };
        if(index === arrayFilterValues.length-1)  {
          arrayFilterValues.pop();
          return arrayFilterValues.push(e.target.value);
        };
        let result = [...arrayFilterValues.slice(0, index),  ...arrayFilterValues.slice(index+1)];
        result.push(e.target.value)
        return arrayFilterValues = result
      }  else {
        arrayFilterValues.push(e.target.value)
      }     
    }
}

function handlerFilterBySize(e) {
  e.preventDefault();
    if (e.target.value === defaultValue) {
      if(arrayFilterValues.includes("pequeño") || arrayFilterValues.includes("mediano") || arrayFilterValues.includes("grande")) {
        let index;
        arrayFilterValues.forEach((el, i) => el === "pequeño" || el === "mediano" || el === "grande" ? index = i:null) 
        if(index === 0)  return arrayFilterValues.shift();
        if(index === arrayFilterValues.length-1)  return arrayFilterValues.pop();
        let result = [...arrayFilterValues.slice(0, index),  ...arrayFilterValues.slice(index+1)];
        return arrayFilterValues = result;
      }
    }
    if(e.target.value === "pequeño") {
      if(arrayFilterValues.includes("mediano") || arrayFilterValues.includes("grande")) {
        let index;
        arrayFilterValues.forEach((el, i) => el === "mediano" || el === "grande"? index = i:null) 
        if(index === 0) {
          arrayFilterValues.shift();
          return arrayFilterValues.push(e.target.value)
        };
        if(index === arrayFilterValues.length-1)  {
          arrayFilterValues.pop();
          return arrayFilterValues.push(e.target.value);
        };
        let result = [...arrayFilterValues.slice(0, index),  ...arrayFilterValues.slice(index+1)];
        result.push(e.target.value)
        return arrayFilterValues = result
      } else {
        arrayFilterValues.push(e.target.value)
      }
    }
    if(e.target.value === "mediano") {
      if(arrayFilterValues.includes("pequeño") || arrayFilterValues.includes("grande")) {
        let index;
        arrayFilterValues.forEach((el, i) => el === "pequeño" || el === "grande"? index = i:null) 
        if(index === 0) {
          arrayFilterValues.shift();
          return arrayFilterValues.push(e.target.value)
        };
        if(index === arrayFilterValues.length-1)  {
          arrayFilterValues.pop();
          return arrayFilterValues.push(e.target.value);
        };
        let result = [...arrayFilterValues.slice(0, index),  ...arrayFilterValues.slice(index+1)];
        result.push(e.target.value)
        return arrayFilterValues = result
      }  else {
        arrayFilterValues.push(e.target.value)
      }     
    }
    if(e.target.value === "grande") {
      if(arrayFilterValues.includes("pequeño") || arrayFilterValues.includes("mediano")) {
        let index;
        arrayFilterValues.forEach((el, i) => el === "pequeño" || el === "mediano"? index = i:null) 
        if(index === 0) {
          arrayFilterValues.shift();
          return arrayFilterValues.push(e.target.value)
        };
        if(index === arrayFilterValues.length-1)  {
          arrayFilterValues.pop();
          return arrayFilterValues.push(e.target.value);
        };
        let result = [...arrayFilterValues.slice(0, index),  ...arrayFilterValues.slice(index+1)];
        result.push(e.target.value)
        return arrayFilterValues = result
      }  else {
        arrayFilterValues.push(e.target.value)
      }     
    }
}

let selectSpeciesValue = document.getElementById("species")
let selectSexValue = document.getElementById("age")
let selectAgeValue = document.getElementById("size")
let selectSizeValue = document.getElementById("sex")
function handlerFilterButton (e) {
  e.preventDefault();
  // dispatch(filterAdoptionPets(arrayFilterValues));
  selectSpeciesValue.value = defaultValue
  selectSexValue.value = defaultValue
  selectAgeValue.value = defaultValue
  selectSizeValue.value = defaultValue 
}
function handlerSearchByArea (e) {
  e.preventDefault();
  if (input !== "" && input.trim() !== "") {
    dispatch(filterLostSearchArea(input.trim()));
  } else {
    alert("Debes especificar un area para que podamos buscar!");
  }
};

function handlerRefreshPets (e) {
  e.preventDefault();
  dispatch(getLostPets());
};

useEffect(() => {
  dispatch(getLostPets());
}, [dispatch]);

return (
    <div className="filterBarContainer">
      <h2>Mascotas en Adopcion</h2>
      <div className="selectsContainer">
        <div>
        <h1>Especie</h1>
        <select
          className="selectsFilter"
          name="species"
          id="species"
          onChange={(e) => handlerFilterBySpecie(e)}
          >
          <option value="defaultValue" key="default">
            Ninguno
          </option>
          <option value="gato">Gato/a</option>
          <option value="perro">Perro/a</option>
        </select>
          </div>

        <div>
          <h1>Sexo</h1>
        <select
          className="selectsFilter"
          name="sex"
          id="sex"
          onChange={(e) => handlerFilterBySex(e)}
          >
          <option value="defaultValue" key="default">
            Ninguno
          </option>
          <option value="hembra">Hembra</option>
          <option value="macho">Macho</option>
        </select>
        </div>

        <div>
        <h1>Edad</h1>
        <select
          className="selectsFilter"
          name="age"
          id="age"
          onChange={(e) => handlerFilterByAge(e)}
          >
          <option value="defaultValue" key="default">
            Ninguno
          </option>
          <option value="cachorro">Cachorro/a</option>
          <option value="joven">Joven</option>
          <option value="adulto">Adulto/a</option>
        </select>
        </div>
        <div>
        <h1>Tamaño</h1>
        <select
          className="selectsFilter"
          name="size"
          id="size"
          onChange={(e) => handlerFilterBySize(e)}
          >
          <option value="defaultValue" key="default">
            Ninguno
          </option>
          <option value="pequeño">Pequeño</option>
          <option value="mediano">Mediano/a</option>
          <option value="grande">Grande</option>
        </select>
        </div>

        <div>
          <button
            className="selectsFilter"
            onClick={(e) => handlerFilterButton(e)}
            >
            Filtrar
          </button>
          <button
            className="selectsFilter"
            onClick={(e) => handlerRefreshPets(e)}
            >
            Todos
          </button>
        </div>
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
