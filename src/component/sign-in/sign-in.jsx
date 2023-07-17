import React from "react";
import "./sign-in.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import {
  signInWithGoogle,
  signInWithEmailAndPasswod,
} from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span className="subtitle">Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="button">
            <CustomButton type="submit" onClick={signInWithEmailAndPasswod}>
              {" "}
              Sign in{" "}
            </CustomButton>
            <CustomButton>Forget Password</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign via Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;

// import React, { useRef } from "react";
// import { Form, Button, Card, Container, Alert } from "react-bootstrap";
// import { useAuth } from "../context/AuthContext";
// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// export default function SingIn() {
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const { signin } = useAuth();
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   async function handleSubmit(e) {
//     e.preventDefault();

//     try {
//       setError("");
//       setLoading(true);
//       await signin(emailRef.current.value, passwordRef.current.value);
//     } catch {
//       setError("Failed to Sing in");
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
//               <h2 className="text-center mb-4">Sign In</h2>
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

//                 <Button disabled={loading} className="w-100 mt-3" type="submit">
//                   Sign Up
//                 </Button>
//               </Form>
//             </Card.Body>
//           </Card>
//           <div className="w-100 mt-2 m-5">
//             Need an Account? <NavLink to="/signup">Sign Up</NavLink>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// }
