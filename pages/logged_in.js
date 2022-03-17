import React, { useContext } from "react";
import { AuthContext } from "../context/Auth";

function logged_in() {
  const { signingOut } = useContext(AuthContext);
  return (
    <div>
      <button className='btn' onClick={signingOut}>
        SignOut
      </button>
    </div>
  );
}

export default logged_in;
