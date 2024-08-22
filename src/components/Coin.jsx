// import React from "react";

const Coin = () => {
  return (
    <>
      <div className="w-full flex-col bg-center bg-cover bg-[url('/images/cat.jpeg')]">
        <div className=" flex  justify-center items-center min-h-screen">
          <div className="bg-white/75 min-h-48 m-2 py-4 px-6  rounded-lg w-1/4 text-center"></div>
        </div>
        <div className=" flex justify-center items-center">
          <button className=" flex py-2 px-4 m-4 justify-center items-center gap-1 align-bottom bg-gradient-to-r from-purple-500 to-pink-500 rounded-md text-white shadow-blue-500/50">
            <p>👉</p> Next Joke
          </button>
        </div>
      </div>
    </>
  );
};

export default Coin;
