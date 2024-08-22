import axios from "axios";
// import { Rotate3D } from "lucide-react";
import { useState } from "react";

const URL = "https://official-joke-api.appspot.com/random_joke";
const Jokes = () => {
  const jockHandler = async () => {
    const request = await axios.get(URL);
    setCard(request.data);
    console.log(request);
  };

  const [card, setCard] = useState("");

  return (
    <>
      <div className="w-full flex-col bg-center bg-cover bg-[url('/images/smile.avif')]">
        <div className="flex flex-col  justify-center items-center min-h-screen">
          <div className="bg-white/75 min-h-48 m-2 py-4 px-6  rounded-lg w-1/3 text-center">
            <h1 className="text-2xl">{card.setup}</h1>
            <strong className=" text-1xl m-4">
              <span id="smileicon">😃</span>
              <br />
              {card.punchline}
            </strong>
          </div>
          <div className=" flex justify-center items-center">
            <button
              onClick={jockHandler}
              className=" flex py-2 px-4 m-4 justify-center items-center gap-1 align-bottom bg-gradient-to-r from-purple-500 to-pink-500 rounded-md text-white shadow-blue-500/50"
            >
              <p>👉</p> Next Joke
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jokes;
