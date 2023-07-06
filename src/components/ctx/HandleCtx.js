import React, { useContext } from "react";
import Auth from "../context/Auth";

const HandleCtx = () => {
  const ctx = useContext(Auth);

  console.log(ctx);

  return (
    <div>
      <input
        type="text"
        placeholder="Type ..."
        onChange={(e) => ctx.setName(e.target.value)}
      />
      <button onClick={() => ctx.setIsLoggedIn((prevState) => !prevState)}>
        Context
      </button>
    </div>
  );
};

export default HandleCtx;
