import React, { useState } from "react";

const initialValue = {
  email: "",
  password: "",
  cfmPassword: "",
  name: "",
};

const validate = (name, value) => {
  if (name === "name") {
    if (value?.length < 5) {
      return false;
    }

    return true;
  }
};

const FormComponent = () => {
  const [formData, setFormData] = useState(initialValue);

  const inputHandler = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setFormData((abc) => {
      return { ...abc, [fieldName]: value };
    });
  };

  const submitHandler = (e) => {
    const isValidate = validate("name", formData.name);

    if (!isValidate) {
      e.preventDefault();
      console.log("error: note submitted");

      return;
    } else {
      e.preventDefault();
      console.log("submitted");
    }
  };

  return (
    <div className="">
      <form className="flex flex-col gap-4 p-5" onSubmit={submitHandler}>
        <input
          onChange={inputHandler}
          type="text"
          name="name"
          placeholder="Enter Name"
          className="border p-1 rounded"
        />
        <input
          onChange={inputHandler}
          type="email"
          name="email"
          placeholder="Enter Email"
          className="border p-1 rounded"
        />
        <input
          onChange={inputHandler}
          type="password"
          name="password"
          placeholder="Enter Password"
          className="border p-1 rounded"
        />
        <input
          onChange={inputHandler}
          type="password"
          name="cfmPassword"
          placeholder="Confirm Password"
          className="border p-1 rounded"
        />
        <button type="submit" className="bg-red-500 text-white p-2">
          Submit
        </button>
      </form>
      <div>
        Name: {formData.name} <br />
        Email: {formData.email} <br />
      </div>
    </div>
  );
};

export default FormComponent;
