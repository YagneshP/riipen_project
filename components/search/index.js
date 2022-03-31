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
export default function Search({ products }) {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className='about'>
      <center>
        <div style={{ width: "30%" }}>
          <TextField
            id='outlined-basic'
            onChange={inputHandler}
            variant='outlined'
            size='normal'
            focused
            fullWidth
            label='Search'
            placeholder='Search Product'
          />
        </div>
      </center>
      <List input={inputText} products={products} />
    </div>
  );
}
