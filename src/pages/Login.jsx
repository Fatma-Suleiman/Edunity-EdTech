import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SectionNavigation from "../components/Navbar/SectionNavigation";
import Footer from "../components/Footer";

axios.defaults.baseURL = "https://dummyjson.com";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ''
   
  });

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      await axios.post("/users/add", {
        email: formData.email,
        password: formData.password,
      });

      setMessage("Login successful! Redirecting...");
      setTimeout(() => navigate("/Dashboard"), 1500);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error logining user");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="login-page">
      <SectionNavigation />
      <div className="login-form-area">
        {message && (
          <div
            className={`alert ${
              message.includes("successful") ? "alert-success" : "alert-danger"
            }`}
          >
            {message}
          </div>
        )}

        <div className="login-form-left">
          <form onSubmit={handleSubmit} className="login-form">
            <h2>SIGN IN</h2>


            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />


            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={isLoading}>
              {isLoading ? "logining..." : "login"}
            </button>
          </form>

          <p className="login-text">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Login here</span>
          </p>
        </div>

        <div className="login-form-right"></div>
      </div>

      <Footer />
    </section>
  );
};

export default Login;
