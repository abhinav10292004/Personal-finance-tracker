import React, { useContext } from "react";

import { authContext } from "@/lib/store/auth-context";

import { FcGoogle } from "react-icons/fc";

function SignIn() {
  const { googleLoginHandler } = useContext(authContext);

  return (
    <main className="container max-w-2xl px-6 mx-auto">
      <h1 className="mb-6 text-6xl font-bold text-center text-gray-600">Welcome</h1>

      <div className="flex flex-col overflow-hidden shadow-md shadow-slate-500 bg-white rounded-2xl">
        <div className="h-52">
          <img
            className="object-cover w-full h-full"
            src="https://t4.ftcdn.net/jpg/07/33/95/97/240_F_733959774_MG27ueLLXRaRxfDHtaCqa408RnQ80FMQ.jpg"
          />
        </div>

        <div className="px-4 py-4">
          <h3 className="text-2xl text-center">Sign in to Continue...</h3>

          <button
            onClick={googleLoginHandler}
            className="flex self-start gap-2 p-4 mx-auto mt-6 font-medium text-white align-middle bg-gray-600 rounded-lg"
          >
            <FcGoogle className="text-2xl" /> Google
          </button>
        </div>
      </div>
      <div className="px-4 py-4">  
      </div>
      <div className="px-4 py-4">
        <h2 className="text-1xl font-bold text-center text-gray-600">ABOUT</h2>
        <p className="text-.5xl text-left text-gray-600">     We believe that managing finance should be as effortless as shopping online. It should be done anytime, anywhere and in few clicks.</p>
      </div>
     
    </main>
  );
}

export default SignIn;
