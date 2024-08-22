import { useFormik } from "formik";

const initialValues = {
  email: "",
  password: "",
  cfmPassword: "",
  name: "",
};

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required!";
  }

  if (values.name < 5) {
    errors.name = "length should be more then 5";
  }

  return errors;
};
const FormComponentFormik = () => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik);

  return (
    <div className="max-w-lg	 mx-auto  ">
      <form className="flex flex-col gap-4 p-5" onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          className="border p-1 rounded"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.name ?? formik.errors.name}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="border p-1 rounded"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="border p-1 rounded"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <input
          type="password"
          name="cfmPassword"
          placeholder="Confirm Password"
          className="border p-1 rounded"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <button type="submit" className="bg-red-500 text-white p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponentFormik;
