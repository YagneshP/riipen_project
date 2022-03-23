import React, { useContext } from "react";
import { AuthContext } from "../context/Auth";

function Logged_in() {
  const { signingOut } = useContext(AuthContext);
  return (
    <div>
      <button className='btn' onClick={signingOut}>
        SignOut
      </button>
    </div>
  );
}

export default Logged_in;
