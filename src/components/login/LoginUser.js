import React, { useState } from "react";
import { login, logOut } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";

const LoginUser = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.user);

  console.log(selector);

  return (
    <div className="w-full h-screen bg-slate-400 flex items-center justify-center">
      <div className="space-y-3 py-6 px-8 bg-white shadow-xl rounded-md flex flex-col items-center justify-center">
        <p className="font-bold text-xl mb-2">
          Login : {selector.userName} - {selector.userPassword}
        </p>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="bg-slate-200 p-2 border-none outline-none font-xl border rounded"
          type="text"
          placeholder="userName"
        />
        <input
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          className="bg-slate-200 p-2 border-none outline-none font-xl border rounded"
          type="password"
          placeholder="password"
        />
        <div className="flex items-center space-x-2">
          <button
            onClick={() => {
              dispatch(
                login({ userName: userName, userPassword: userPassword })
              );
              setUserName("");
              setUserPassword("");
            }}
            className="hover:bg-blue-800 text-white font-bold px-5 py-2  rounded bg-blue-600"
          >
            LogIn
          </button>
          <button
            onClick={() => dispatch(logOut())}
            className="hover:bg-red-800 text-white font-bold px-5 py-2  rounded bg-red-600"
          >
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
