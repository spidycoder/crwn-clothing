import React, { useState } from "react";
import FormInput from "../form-input/form-input";
import { useAuth } from "../context/AuthContext";
import CustomButton from "../custom-button/custom-button";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  createUserProfileDocument,
} from "firebase/auth";
import { getApp, getApps } from "firebase/app";

import { useEffect } from "react";
import { auth } from "../../firebase/firebase-initialise";

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await createUserWithEmailAndPassword(user, { displayName });

      setUserCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit" onClick={handleSubmit}>
          SIGN UP
        </CustomButton>
      </form>
    </div>
  );
};

export default SignUp;

// import React, { useRef } from "react";
// import { Form, Button, Card, Container, Alert } from "react-bootstrap";
// import { useAuth } from "../context/AuthContext";
// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// export default function SignUp() {
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const passwordConfirmRef = useRef();
//   const { signup } = useAuth();
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   async function handleSubmit(e) {
//     e.preventDefault();

//     if (passwordRef.current.value !== passwordConfirmRef.current.value) {
//       return setError("Passwords do not match");
//     }

//     try {
//       setError("");
//       setLoading(true);
//       await signup(emailRef.current.value, passwordRef.current.value);
//     } catch {
//       setError("Failed to create an account");
//     }

//     setLoading(false);
//   }

//   return (
//     <>
//       <Container
//         className="d-flex align-items-center justify-content-center"
//         style={{ minHeight: "70vh" }}
//       >
//         <div style={{ minWidth: "400px" }}>
//           <Card>
//             <Card.Body>
//               <h2 className="text-center mb-4">Sign Up</h2>
//               {error && <Alert variant="danger">{error}</Alert>}
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group id="email">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control type="email" ref={emailRef} required />
//                 </Form.Group>
//                 <Form.Group id="password">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control type="password" ref={passwordRef} required />
//                 </Form.Group>
//                 <Form.Group id="password-confirm">
//                   <Form.Label>Password Confirmation</Form.Label>
//                   <Form.Control
//                     type="password"
//                     ref={passwordConfirmRef}
//                     required
//                   />
//                 </Form.Group>
//                 <Button disabled={loading} className="w-100 mt-3" type="submit">
//                   Sign Up
//                 </Button>
//               </Form>
//             </Card.Body>
//           </Card>

//           <div className="w-100 mt-2 m-5">
//             Already have an Account? <NavLink to="/signin">Sing In</NavLink>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// }
