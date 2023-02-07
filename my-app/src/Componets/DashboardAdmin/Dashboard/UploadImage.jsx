import React, { useState } from "react";
import { Container, FormGroup, Input } from "reactstrap";
import { useDispatch } from "react-redux";
import { setImageAsync } from "../../../Redux/Actions";

export default function UploadImage({image, setImage}) {
  
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);

  function handleSetImage(e){
    e.preventDefault()
    dispatch(setImageAsync(e.target.files))
  }

  return (
    <div>
      <FormGroup>
        <Input
          type="file"
          name="file"
          placeholder="Selecciona las imagenes"
          onChange={(e) => handleSetImage(e)}
        />
        {loading ? (<h3>Cargando imagenes...</h3>) : (<img src={image} style={{width: "100px"}}/>)}
      </FormGroup>
    </div>
  );
}
