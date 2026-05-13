import { useFormik } from "formik";
import { formValidation } from "./validation";

const Form = () => {
  const formInitialValues = {
    fullname: "",
    email: "",
    password: "",
  };

  const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: formInitialValues,
      onSubmit: (value, action) => {
        const trimmedValues = {
          fullname: values.fullname.trim(),
          email: values.email.trim(),
          password: values.password.trim(),
        };

        console.log("values", trimmedValues);
        action.resetForm();
      },
      validationSchema: formValidation,
    });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Full Name :</label>
          <input
            type="text"
            placeholder="Enter Your Fullname"
            name="fullname"
            value={values.fullname}
            onChange={handleChange}
            onBlur={handleBlur}
          />{" "}
          <br />
          {errors.fullname && touched.fullname ? (
            <span style={{ color: "red" }}>{errors.fullname}</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="">Email :</label>
          <input
            type="email"
            placeholder="Enter Email Id"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <br />
          {errors.email && touched.email ? (
            <span style={{ color: "red" }}>{errors.email}</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="">Password :</label>
          <input
            type="password"
            placeholder="***********"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <br />
          {errors.password && touched.password ? (
            <span style={{ color: "red" }}>{errors.password}</span>
          ) : null}
        </div>
        <button type="submit">Submit </button>
      </form>
    </>
  );
};

export default Form;
