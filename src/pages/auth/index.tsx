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
      <div className="flex items-center h-screen w-full">
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <span className="block w-full text-xl uppercase font-bold mb-4">Login</span>
          <form className="login-form mb-4" onSubmit={event => handleSubmit(event)}>
            <div className="mb-4 md:w-full">
              <label className="block text-xs mb-1">Email</label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="email"
                name="email"
                id="email"
                placeholder="Email..."
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6 md:w-full">
              <label className="block text-xs mb-1">Password</label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={user.password}
                onChange={event => handleChange(event)}
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
            >
              Login
            </button>
          </form>
          {errorMessage !== "" && <p>{errorMessage}</p>}
        </div>
      </div>
    </body>
  );
};

export default Login;
