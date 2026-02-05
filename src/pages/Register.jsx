import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SectionNavigation from "../components/Navbar/SectionNavigation";
import Footer from "../components/Footer";

axios.defaults.baseURL = "https://dummyjson.com";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone_number: "",
    password: "",
    confirmPassword: "",
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
        username: formData.username,
        email: formData.email,
        phone: formData.phone_number,
        password: formData.password,
      });

      setMessage("Registration successful! Redirecting...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error registering user");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="register-page">
      <SectionNavigation />
      <div className="register-form-area">
        {message && (
          <div
            className={`alert ${
              message.includes("successful") ? "alert-success" : "alert-danger"
            }`}
          >
            {message}
          </div>
        )}

        <div className="register-form-left">
          <form onSubmit={handleSubmit} className="register-form">
            <h2>Create Account</h2>

            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Phone Number</label>
            <input
              type="text"
              name="phone_number"
              placeholder="Enter phone number"
              value={formData.phone_number}
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
              {isLoading ? "Registering..." : "Register"}
            </button>
          </form>

          <p className="login-text">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Login here</span>
          </p>
        </div>

        <div className="register-form-right"></div>
      </div>

      <Footer />
    </section>
  );
};

export default Register;
