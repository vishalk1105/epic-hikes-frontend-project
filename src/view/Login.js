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

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    axios
      .post("http://127.0.0.1:5000/user/login", values)
      .then((result) => {
        if (result.status === 200) {
          const token = result.data.response.token;
          localStorage.setItem("token", token);
          resetForm();
          navigate("/");
        }
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 401) {
            if (error.response.data.error === "Invalid Password") {
              setError("Invalid Password");
            } else if (error.response.data.error === "Invalid Email") {
              setError("Invalid Email");
            }
          } else {
            setError("Invalid Password Or Email");
          }
        }
      });
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
        }}
      >
        <h2 className="text-center">Login</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="container">
              <FormGroup controlId="email">
                <FormLabel>Email</FormLabel>
                <Field name="email" type="email" as={FormControl} />
                <FormText className="text-danger">
                  {errors.email && touched.email ? errors.email : null}
                </FormText>
              </FormGroup>

              <FormGroup controlId="password" className="mb-3">
                <FormLabel>Password</FormLabel>
                <Field name="password" type="password" as={FormControl} />
                <FormText className="text-danger">
                  {errors.password && touched.password ? errors.password : null}
                </FormText>
              </FormGroup>

              {error && (
                <p className="text-danger" style={{ marginBottom: "10px" }}>
                  {error}
                </p>
              )}

              <Button variant="primary" type="submit">
                Login
              </Button>

              <p className="text-center">
                Don't have an account? <a href="/signup">Sign Up</a>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
