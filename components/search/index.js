import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./searchList";
import { commerce } from "../../lib/commerce";

// export async function getStaticProps() {
//   const { data: products } = await commerce.products.list();
//   return {
//     props: {
//       products,
//     },
//   };
// }
export default function Search({products}) {
  console.log("products1", products);
  
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  
  return (
    <div className='about'>
      {/* <h1 id="search"> Search</h1><p></p> */}
      <center><div style={{"width":"30%"}}>
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          color="secondary"
          size="normal"
          focused
          fullWidth
          label="Search"
          placeholder="search"
        />
      </div></center>
      <List input={inputText} products={products}/>
    </div>
  );
}

