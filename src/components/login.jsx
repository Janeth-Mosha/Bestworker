import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email || !password) {
      setError("Email and password are required");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    const formDetails = new URLSearchParams();
    formDetails.append("username", email);
    formDetails.append("password", password);

    try {
      const response = await fetch(
        "https://udsmbestworker.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formDetails,
        }
      );

      setLoading(false);

      if (response.ok) {
        const data = await response.json();
        console.log("Response Data:", data); // Debugging statement

        if (data && data.access_token) {
          localStorage.setItem("token", data.access_token);
          console.log(
            "Token saved to localStorage:",
            localStorage.getItem("token")
          ); // Debugging statement
          navigate("/Dashboard");
        } else {
          setError("Invalid response from server.");
        }
      } else {
        const errorData = await response.json();
        setError(
          errorData.detail ||
            "Authentication failed! Incorrect email or password."
        );
      }
    } catch (error) {
      setLoading(false);
      setError("An error occurred. Please try again later.");
      console.error("Error during login:", error); // Debugging statement
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-gray-200 flex rounded-lg shadow-lg overflow-hidden w-full md:w-3/4 max-w-4xl">
        <div className="w-full md:w-1/2">
          <img
            src="/login.png"
            alt="Login"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2">Hello, Welcome back</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            {error && <p className="text-red-500 text-xs mt-4">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
