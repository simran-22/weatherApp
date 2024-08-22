import { useState } from "react";
import { PersonStanding } from "lucide-react";
import axios from "axios";
import { useEffect, useRef } from "react";
import { gsap, Bounce } from "gsap";

const URL = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";

function Weather() {
  const elementRef = useRef(null);
  const standman = useRef(null);
  const [input, setInput] = useState("Chandigarh");
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    gsap.fromTo(
      standman.current,
      { y: -10 },
      {
        y: 10, // End position (original position)
        duration: 1, // Duration of the animation
        ease: Bounce.easeOut, // Bounce easing
        repeat: 1, // Number of times to repeat the animation
        yoyo: true,
        delay: 1.2,
        scale: 2,
        // rotationZ: "+=360",
      }
    );
    gsap.from(elementRef.current, {
      duration: 1,
      delay: 1,
      scale: 1,
      rotationY: "+=360",
      backgroundColor: "darkBlue",
    });
  }, []);

  function inputHandler(e) {
    setInput(e.target.value);
  }

  const keyDownHandler = async (e) => {
    if (e.key === "Enter") {
      axios
        .get(URL + input, {
          headers: {
            "X-RapidAPI-Key":
              "9d9efeb4eemsh7658e85480dc582p140de5jsnee01ce2cea4e",
            "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
          },
        })
        .then((r) => setWeatherData(r.data));
    }
  };

  return (
    <>
      {/* <div ref={elementRef}>Hello, GSAP!</div> */}
      <div className=" flex justify-center items-center h-full P-4">
        <div className="w-80 h-98 rounded-md bg-blue-300 mt-10">
          <div className=" w-full shadow-sm  ">
            <h1
              ref={elementRef}
              className=" flex justify-center text-[40px] font-jost text-white items-center "
            >
              Weather App
            </h1>
          </div>
          {/* search bar start */}
          <div className="flex align-middle pt-6 justify-center">
            <input
              onChange={inputHandler}
              onKeyDown={keyDownHandler}
              value={input}
              type="search"
              placeholder="Text"
              className="rounded-full border-2 outline-none	 border-slate-400	 p-1 pl-4"
            />
          </div>
          {/* loaction start */}
          <div className="w-full h-full flex justify-center align-middle p-11">
            <PersonStanding className="size-16" ref={standman} />
            <h1 className="text-[36px]">
              {input} {weatherData.feels_like}
            </h1>
          </div>
          {/* temprature start */}
          <div className="w-full p-11">
            <h2 className="text-[36px]">{weatherData.min_temp}&deg;Cel</h2>
            {weatherData?.min_temp && (
              <span className="text-[12px]">
                Min: {weatherData.min_temp}&deg;Cel | Max:{" "}
                {weatherData.max_temp} {weatherData.wind_speed}
                &deg;Cel
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
