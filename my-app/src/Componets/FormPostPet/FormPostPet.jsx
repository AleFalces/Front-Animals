import React, { useState } from "react";
import {} from "../../Redux/Actions";
import { Link, redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { postPet } from "../../Redux/Actions";

export default function FormPostPet() {
  // const dispatch = useDispatch();

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    species: "",
    sex: "",
    age: "",
    size: "",
    area: "",
    detail: "",
    img: "",
  });

  function validate(input) {
    let errors = {};

    if (input.detail.length < 15) {
      errors.detail = "Debes escribir al menos 16 carácteres";
    } else if (!input.detail.match(/^[a-zA-Z\s]+$/)) {
      errors.name = "Solo letras, por favor!";
    } else if (input.species === "default") {
      errors.species = "Selecciona una especie";
    } else if (input.age) {
      errors.age = "Selecciona una edad para la mascota";
    } else if (!input.size) {
      errors.size = "Selecciona un tamaño aproximado";
    } else if (!input.area) {
      errors.area = "Especifica el área donde te encuentras";
    } else if (!input.area.match(/^[a-zA-Z\s]+$/)) {
      errors.area = "Solo letras, por favor!";
    } else if (!input.img) {
      errors.img = "Agrega una foto del animal";
    } else if (!input.sex) {
      errors.sex = "Selecciona si es macho o hembra";
    }
    return errors;
  }

  const handlerChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handlerCreate = (event) => {
    event.preventDefault();
    // dispatch(postPet(input)); //importar accion de juli
    setInput({
      species: "",
      sex: "",
      age: "",
      size: "",
      area: "",
      detail: "",
      img: "",
      status: "",
    });
    alert("Formulario creado con éxito!");
    redirect("/adoption");
  };

  return (
    <div>
      <form>
        <h1>Completa el formulario</h1>
        <div>
        <select name="species">
          <option value="default" key="defaultSpecies">
            Especie
          </option>
          <option value="cat" key="cat">
            Gatx
          </option>
          <option value="dog" key="dog">
            Perrx
          </option>
        </select>
        {errors.species &&(<p>{errors.species}</p>)}
        </div>
        

        <select name="sex" key="sex">
          <option value="default" key="defaultSex">
            Sexo
          </option>
          <option value="female" key="female">
            Hembra
          </option>
          <option value="male" key="male">
            Macho
          </option>
        </select>

        <select name="age" key="age">
          <option value="default" key="defaultAge">
            Edad
          </option>
          <option value="puppy" key="puppy">
            Cachorrx
          </option>
          <option value="young" key="young">
            Joven
          </option>
          <option value="adult" key="adult">
            Adultx
          </option>
        </select>

        <select name="size" key="size">
          <option value="default" key="defaultSize">
            Tamaño
          </option>
          <option value="small" key="small">
            Chicx
          </option>
          <option value="medium" key="medium">
            Medianx
          </option>
          <option value="big" key="big">
            Grande
          </option>
        </select>

        <select name="status" key="status">
          <option value="default" key="defaultSize">
            Estado
          </option>
          <option value="lost">
            Perdidx</option>
          <option value="adopted">
            En adopción</option>
        </select>

        <div>
          
          <label htmlFor="">Área:</label>
          <input
            type="text"
            name="name"
            placeholder="Lugar donde se encuentra.."
            onChange={(e) => handlerChange(e)}
          />
        </div>
        <div>
          
          <label htmlFor="">Detalles:</label>
          <input
            type="text"
            name="name"
            placeholder="Descripcion de la mascota.."
            onChange={(e) => handlerChange(e)}
          />{" "}
        </div>
        {/* Falta agregar el campo para subir imagenes del animal */}

        <Link to={"/home"}>
          <button>Atrás</button>
        </Link>
        <button onClick={handlerCreate}>Postear la mascota</button>
      </form>
    </div>
  );
}
