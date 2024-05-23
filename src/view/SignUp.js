import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Button,
  FormGroup,
  FormLabel,
  FormControl,
  FormText,
} from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const initialValues = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    userName: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const data = await axios.post(
        "http://127.0.0.1:5000/user/register",
        values
      );
      if (data.status === 200) {
        resetForm();
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
      if (err?.response?.status === 409) {
        console.log(err.response.status, "error");
        setError(err?.response?.data?.msg);
      }
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://www.treebo.com/blog/wp-content/uploads/2018/02/Forts-in-Maharashtra-.jpg")',
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "450px",
          height: "450px",
          background: "rgb(2, 2, 26)",
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          borderRadius: "20px",
          padding: "20px",
          //boxShadow: '3px 0px 0px #E1F5FE'
        }}
      >
        <h2 className="text-center">Sign Up</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form>
              <FormGroup controlId="userName">
                <FormLabel className="text-start">Name</FormLabel>
                <Field name="userName" as={FormControl} />
                <FormText className="text-danger">
                  {errors.userName && touched.userName ? errors.userName : null}
                </FormText>
              </FormGroup>

              <FormGroup controlId="email">
                <FormLabel>Email</FormLabel>
                <Field
                  name="email"
                  type="email"
                  as={FormControl}
                  onChange={(e) => {
                    setFieldValue("email", e.target.value);
                    setError("");
                  }}
                />
                <FormText className="text-danger">
                  {errors.email && touched.email ? errors.email : null}
                  {error.length !== 0 ? <div>{error}</div> : ""}
                </FormText>
              </FormGroup>

              <FormGroup controlId="password">
                <FormLabel>Password</FormLabel>
                <Field name="password" type="password" as={FormControl} />
                <FormText className="text-danger">
                  {errors.password && touched.password ? errors.password : null}
                </FormText>
              </FormGroup>

              <FormGroup controlId="confirmPassword">
                <FormLabel>Confirm Password</FormLabel>
                <Field
                  name="confirmPassword"
                  type="password"
                  as={FormControl}
                />
                <FormText className="text-danger">
                  {errors.confirmPassword && touched.confirmPassword
                    ? errors.confirmPassword
                    : null}
                </FormText>
              </FormGroup>

              <Button variant="primary" type="submit" className="mt-2">
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
