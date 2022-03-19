import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./searchList";


export default function Search() {
 
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  
  return (
    <div className="about">
      <h1> Search</h1><p></p>
      <div style={{"width":"30%"}}>
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          color="secondary"
          size="normal"
          focused
          fullWidth
          label="Search"
        />
      </div>
      <List input={inputText}/>
    </div>
  );
}

