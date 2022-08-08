import React from "react";
import { changeAuth } from "../../redux/authSlice";
import { useAppDispatch } from "../../redux/hooks";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();

  const [errorMessage, setErrorMessage] = React.useState("");
  const [user, setUser] = React.useState({
    email: "test@test.com",
    password: "123456",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const userData = await response.json();

      if (typeof userData !== "string") {
        dispatch(changeAuth(true));
      } else {
        throw new Error(userData);
      }
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);
      setErrorMessage(message);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    setErrorMessage("");
  };

  return (
    <body className="antialiased bg-gray-200 text-gray-900 font-sans">
      <div>
        <h1>Login Form</h1>
        <form className="login-form" onSubmit={event => handleSubmit(event)}>
          <input type="email" placeholder="Email" value={user.email} name="email" onChange={handleChange} />
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            name="password"
            onChange={event => handleChange(event)}
          />
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
        {errorMessage !== "" && <p>{errorMessage}</p>}
      </div>
    </body>
  );
};

export default Login;
