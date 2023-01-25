import React, { useState } from "react";
import { useEffect } from "react";
import { Link, redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postPet } from "../../Redux/Actions";

export default function FormPostPet() {
  const dispatch = useDispatch();

  useEffect(()=>{
              
  },[])


  const [input, setInput] = useState({
        species: "",
        sex: "",
        age: "",
        size: "",
        area: "",
        detail: "",
        img: "",
        userId: ""
      });
  const errors = {
       species: "",
       sex: "",
       age: "",
       size: "",
       area: "",
       detail: "",
       img: "",
       userId: ""
     };
            
  const handlerChange = (e) => {
    setInput({
     ...input,
      [e.target.name]: e.target.value.trim(),
   });
   console.log("input",input)
   console.log("error",errors)
  };

              

  function handlerErrors(e) {
    e.preventDefault();
    if(input.species === "") {
      errors.species = "Debes seleccionar gato o perro"
    }
    if(input.sex === ""){
      errors.sex = `Debes seleccionar macho o hembra`
    } 
    if(input.age === "") {
        errors.age = "Debes seleccionar la edad aproximada de la mascota"
    } 
    if(input.size === "") {
        errors.size = "Debes seleccionar un tamaño aproximado"
    }
    if(input.area.trim() === "") {
        errors.area = "Debes escribir una localidad"
    }
    if(input.detail.trim() !== "") {
      if(input.detail.trim().length < 15) {
        errors.detail = "La descripcion debe ser de al menos 16 caraceteres"
      }
    } else {
      errors.detail = "Debes escribir una breve descripcion de la mascota"
    }
    if(input.img === ""){
      errors.img = "Debes poner el link de una imagen"
    }
    if(input.userId.trim() === "") {
      errors.userId = "Debes ingresar el UUID del usuario"
    }
    if (!errors.species && !errors.sex && !errors.age && !errors.size && !errors.area && !errors.detail && !errors.img) {
        handlerSubmit(e)
    } 
    else {

        alert("Error en el formulario")
    }
  };
  const handlerSubmit = (e) => {
    e.preventDefault();

    dispatch(postPet(input)); 
    alert("Mascota creada con éxito!");
  
  };

  return (
    <div>
      <form onSubmit={(e)=>handlerErrors(e)}>
        <h1>Completa el formulario</h1>
        <div>
        <select name="species" onChange={(e)=>handlerChange(e)}>
          <option value="default" key="defaultSpecies">
            Especie
          </option>
          <option value="gato" key="cat">
            Gatx
          </option>
          <option value="perro" key="dog">
            Perrx
          </option>
        </select>
        {errors.species &&(<p>{errors.species}</p>)}
        </div>
        

        <select name="sex" key="sex" onChange={(e)=>handlerChange(e)}>
          <option value="default" key="defaultSex">
            Sexo
          </option>
          <option value="hembra" key="hembra">
            Hembra
          </option>
          <option value="macho" key="macho">
            Macho
          </option>
        </select>

        <select name="age" key="age" onChange={(e)=>handlerChange(e)}>
          <option value="default" key="defaultAge">
            Edad
          </option>
          <option value="cachorro" key="cachorro">
            Cachorro
          </option>
          <option value="joven" key="joven">
            Joven
          </option>
          <option value="adulto" key="adulto">
            Adulto
          </option>
        </select>

        <select name="size" key="size" onChange={(e)=>handlerChange(e)}>
          <option value="default" key="defaultSize">
            Tamaño
          </option>
          <option value="pequeño" key="pequeño">
            Chico
          </option>
          <option value="mediano" key="mediano">
            Mediano
          </option>
          <option value="grande" key="grande">
            Grande
          </option>
        </select>

        <select name="status" key="status" onChange={(e)=>handlerChange(e)}>
          <option value="default" key="defaultSize">
            Estado
          </option>
          <option value="encontrado" key="encontrado">
            Encontrado</option>
          <option value="perdido" key="perdido">
            Perdido</option>
        </select>

        <div>
          
          <label>Área:</label>
          <input
            type="text"
            name="area"
            placeholder="Lugar donde se encuentra.."
            onChange={(e) => handlerChange(e)}
          />
        </div>
        <div>
          
          <label>Detalles:</label>
          <input
            type="text"
            name="detail"
            placeholder="Descripcion de la mascota.."
            onChange={(e) => handlerChange(e)}
          />
        </div>
        <div>
          <label>ID de Usuario:</label>
          <input
            type="text"
            name="userId"
            placeholder="UUID del usuario.."
            onChange={(e) => handlerChange(e)}
          />
        </div>
        <div>
          <label>Imagen:</label>
          <input
            type="text"
            name="img"
            placeholder="https://urlDeLaImagen.jpg"
            onChange={(e) => handlerChange(e)}
          />
        </div>        
        <Link to={"/home"}>
          <button>Atrás</button>
        </Link>
        <button onClick={(e)=>handlerErrors(e)}>Postear la mascota</button>
      </form>
    </div>
  );
}