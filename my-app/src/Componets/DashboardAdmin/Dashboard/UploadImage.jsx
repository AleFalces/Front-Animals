import React from "react";
import { FormGroup, Input } from "reactstrap";

import { setImageAsync } from "../../../utils";

export default function UploadImage({setImage}) {

  async function handleSetImage(e){
    e.preventDefault()
    const img = await setImageAsync(e.target.files)
    setImage(img)
  }

  return (
    <div>
      <FormGroup>
        <Input
          type="file"
          name="file"
          placeholder="Selecciona una imagen"
          onChange={(e) => handleSetImage(e)}
        />
      </FormGroup>
    </div>
  );
}
