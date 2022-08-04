import React from "react";

const Login = ({ setIsLogin }) => {
  const [errorMessage, setErrorMessage] = React.useState("");
  const [user, setUser] = React.useState({
    email: "test@test.com",
    password: "123456",
  });

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const userData = await response.json();

      console.log(userData);

      if (typeof userData !== "string") {
        setIsLogin(true);
      } else {
        throw new Error(userData);
      }
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
    setErrorMessage("");
  };

  return (
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
  );
};

export default Login;
