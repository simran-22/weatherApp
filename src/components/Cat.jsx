import axios from "axios";
import { useState } from "react";

const URL = "https://catfact.ninja/fact";

const Cat = () => {
  const [text, setText] = useState("About Cat");

  const clickHnadler = async () => {
    const req = await axios.get(URL);
    setText(req.data.fact);
  };

  return (
    <>
      <div className="w-full h-screen bg-center bg-cover bg-[url('/images/cat.jpeg')]">
        <div className="flex flex-col justify-center items-center h-screen">
          <h4 className="bg-white/75 py-2 px-4 rounded max-w-screen-md text-center">
            {text}
          </h4>
          <button
            onClick={clickHnadler}
            className="py-2 px-4 m-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md text-white shadow-blue-500/50"
          >
            Click Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Cat;
