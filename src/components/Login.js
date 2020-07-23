import React from "react";
import GoogleButton from "react-google-button";

export default function Login() {
  return (
    <div className="d-flex justify-content-center mt-3">
      <a href="https://ancient-mountain-80140.herokuapp.com/api/auth/google">
        <GoogleButton
          type="light" // can be light or dark
          onClick={() => {
            console.log("Google button clicked");
          }}
        ></GoogleButton>
      </a>
    </div>
  );
}
