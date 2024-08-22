import React, { useState } from "react";

const initialValue = {
  fname: "",
  lname: "",
  email: "",
};

const NewForm = () => {
  const [inputValue, setInputValue] = useState(initialValue);

  const changehandler = (e) => {
    const names = e.target.name;
    const values = e.target.value;
    setInputValue((currentValue) => {
      return {
        ...currentValue,
        [names]: values,
      };
    });
  };

  return (
    <div className=" gap-4 flex-col max-w-lg mx-auto mt-6">
      <form className=" ">
        <input
          className="border p-1 rounded w-full outline-none"
          type="text"
          placeholder="first Name"
          name="first Name"
          onChange={changehandler}
        />
        <input
          className="border p-1 rounded w-full outline-none mt-2"
          type="text"
          placeholder="Last Name"
          name="last Name"
          onChange={changehandler}
        />

        <input
          className="border p-1 rounded w-full outline-none mt-2"
          type="text"
          placeholder="Email"
          name="email"
          onChange={changehandler}
        />
        <button className="border bg-gray-300 px-4 py-2 mt-4   rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewForm;
