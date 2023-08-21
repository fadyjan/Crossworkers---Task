// Task1.jsx
import React, { FunctionComponent, useState } from "react";
import "./index.scss";

const Task1: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = () => {
    if (!email.includes("@") || !email.includes(".com")) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    validateEmail();
    validatePassword();

    if (!emailError && !passwordError) {
      alert(`Email: ${email} \nPassword: ${password}`);
    }
  };

  const isSubmitDisabled = !!emailError || !!passwordError;

  return (
    <div id="task-1">
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input
          name="email"
          onChange={(event) => setEmail(event.currentTarget.value)}
          onBlur={validateEmail}
          value={email}
        />
        {emailError && <p className="error-message">{emailError}</p>}
        <label>Password</label>
        <input
          name="password"
          type="password"
          onChange={(event) => setPassword(event.currentTarget.value)}
          onBlur={validatePassword}
          value={password}
        />
        {passwordError && <p className="error-message">{passwordError}</p>}
        <button type="submit" disabled={isSubmitDisabled}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Task1;
