import React from "react";
import "./sign-in-sign-up.scss";
import SignIn from "../../component/sign-in/sign-in";
import SignUp from "../../component/sign-up/sign-up.component";

const SingINadnSingUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SingINadnSingUp;
