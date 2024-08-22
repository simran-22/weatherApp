import { useState } from "react";

const currentItem = {
  Fname: "",
  LName: "",
  email: "",
};

const FinalForm = () => {
  const [input, setInput] = useState(currentItem);

  const inputField = (e) => {
    const abName = e.target.name;
    const abValue = e.target.value;
    setInput((item) => {
      return {
        ...item,
        [abName]: abValue,
      };
    });
  };

  const submithandler = (e) => {
    console.log(submithandler);
  };

  return (
    <>
      <div className="flex justify-center items-center  ">
        <div className="wraper w-2/6 bg-blue-200 h-96 object-cover p-8	">
          <h1 className="bg-blue-500 p-4 text-center font-thin text-4xl uppercase text-white">
            Register Form
          </h1>

          <form
            className="object-cover flex flex-col gap-2 text-center"
            onSubmit={submithandler}
          >
            <input
              className=" border mt-3 p-1 outline-none rounded "
              type="text"
              placeholder="First Name"
              onChange={inputField}
              name={input}
            />
            <input
              className="border mt-3 p-1 outline-none rounded "
              type="text"
              placeholder="Last Name"
              onChange={inputField}
            />

            <button className="bg-blue-300 p-2 rounded-md mt-4 ">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FinalForm;
