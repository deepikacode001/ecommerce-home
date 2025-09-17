import React, { useState } from "react";
import { FaUser, FaLock, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import login from "../assets/login.jpg";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Main Section */}
      <div className="flex-1 flex items-center justify-center p-4">
        {/* Container for both image and form */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row rounded-xl overflow-hidden shadow-2xl min-h-[600px] bg-white">
          {/* Image Section - Full height on desktop */}
          <div className="hidden md:flex md:w-[45%] h-auto">
            <img
              src={login}
              alt="Login Illustration"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Form Section - Centered content */}
          <div className="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <Link
                to="/register"
                className="font-medium text-[#739ec9] hover:text-[#5a8bc5]"
              >
                create a new account
              </Link>
            </p>

            <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-4 w-4 text-gray-400" />
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="focus:ring-[#739ec9] focus:border-[#739ec9] block w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-md h-10"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="h-4 w-4 text-gray-400" />
                  </span>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="focus:ring-[#739ec9] focus:border-[#739ec9] block w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-md h-10"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              {/* Remember Me + Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center text-sm text-gray-900">
                  <input
                    id="remember-me"
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 text-[#739ec9] border-gray-300 rounded focus:ring-[#739ec9]"
                  />
                  <span className="ml-2">Remember me</span>
                </label>

                <a
                  href="#"
                  className="text-sm font-medium text-[#739ec9] hover:text-[#5a8bc5]"
                >
                  Forgot your password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex justify-center items-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#739ec9] transition duration-200 h-10"
              >
                Sign in
              </button>
            </form>

            {/* Divider */}
            <div className="mt-8">
              <div className="relative flex items-center justify-center my-4">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="px-3 text-sm text-gray-500 bg-white">
                  Or continue with
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              {/* Social Login */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <a
                  href="#"
                  className="flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50"
                >
                  <FaFacebookF className="h-5 w-5 text-blue-600" />
                </a>
                <a
                  href="#"
                  className="flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50"
                >
                  <FaGoogle className="h-5 w-5 text-red-500" />
                </a>
                <a
                  href="#"
                  className="flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50"
                >
                  <FaTwitter className="h-5 w-5 text-sky-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
