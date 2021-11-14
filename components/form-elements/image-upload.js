import React, { useState, useEffect, useRef } from "react";

import Button from "../ui-elements/Button";

import classes from "./ImageUpload.module.css";

const ImageUpload = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  const pickedHandler = (event) => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }

    props.onInput(props.id, pickedFile, fileIsValid);
  };

  return (
    <div className={classes.formControl}>
      <input
        id={props.id}
        style={{ display: "none" }}
        ref={filePickerRef}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div className={classes.imageUpload}>
        <div className={classes.imageUploadPreview}>
          {previewUrl && <img src={previewUrl} alt="preview" />}
          {!previewUrl && (
            <p>vyberte obrázek (typu png/jpg/jpeg a max. vel. 500kb) </p>
          )}
        </div>
        <Button  type="button" onClick={pickImageHandler} sx={{ marginBottom: "2em" }}>Vyberte obrázek</Button>
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default ImageUpload;
