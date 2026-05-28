import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import RedErrorMsg from "./RedErrorMsg";

const FormikForm = () => {
  const [formData, setFormData] = useState({});
  const formValidation = yup.object({
    name: yup.string().required(),
    gender: yup.string().required("One Gender is must"),
    hobbies: yup.array().min(1),
    country: yup.string().required(),
    comment: yup.string().required(),
  });
  return (
    <>
      <Formik
        validationSchema={formValidation}
        initialValues={{
          name: "",
          gender: "",
          hobbies: [],
          country: "",
          comment: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          setFormData(values);
        }}
      >
        <Form>
          <label htmlFor="">Name:</label>
          <Field type="text" placeholder="Enter Your Name" name="name" />
          <RedErrorMsg name="name" />
          <br />
          <label htmlFor="">Gender</label> &nbsp;
          <label htmlFor="">Male</label> &nbsp;
          <Field type="radio" value="male" name="gender" />
          <label htmlFor="">FeMale</label> &nbsp;
          <Field type="radio" value="female" name="gender" />
          <label htmlFor="">Other</label> &nbsp;
          <Field type="radio" value="other" name="gender" />
          <RedErrorMsg name="gender" />
          <br />
          <label htmlFor="">Hobbies:</label>
          <label htmlFor="">Crikcet</label>
          <Field type="checkbox" name="hobbies" value="cricket" />
          <label htmlFor="">Football</label>
          <Field type="checkbox" name="hobbies" value="football" />
          <label htmlFor="">Wollyball</label>
          <Field type="checkbox" name="hobbies" value="wollyball" />
          <RedErrorMsg name="hobbies" />
          <br />
          <label htmlFor="">Country:</label>
          <Field as="select" name="country">
            <option>Select Country</option>
            <option value="india">Ind</option>
            <option value="Uk">Uk</option>
            <option value="Usa">Usa</option>
          </Field>
          <RedErrorMsg name="country" />
          <br />
          <Field as="textarea" name="comment" />
          <RedErrorMsg name="comment" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      {JSON.stringify(formData)}
    </>
  );
};

export default FormikForm;
