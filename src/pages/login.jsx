import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import login from "../assets/aboutusbanner.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  // UI tab state (Sign In / Register)
  const [activeTab, setActiveTab] = useState("signin");

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
    <div className="min-h-screen flex flex-col bg-black/90">
      {/* Centered Modal-style panel */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div
          className="w-full max-w-[720px] relative rounded-md shadow-2xl overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${login})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Content wrapper */}
          <div className="px-8 md:px-12 py-10 text-white/90 min-h-[520px]">
            {/* Tabs */}
            <div className="flex items-center gap-10 text-center text-2xl font-semibold justify-center">
              <button
                className={`pb-2 transition-colors ${
                  activeTab === "signin" ? "text-white" : "text-white/70 hover:text-white"
                }`}
                onClick={() => setActiveTab("signin")}
                type="button"
              >
                Sign In
              </button>
              <button
                className={`pb-2 transition-colors ${
                  activeTab === "register" ? "text-white" : "text-white/70 hover:text-white"
                }`}
                onClick={() => setActiveTab("register")}
                type="button"
              >
                Register
              </button>
            </div>
            {/* Gold underline indicator */}
            <div className="mt-2 h-[2px] w-full bg-white/30">
              <div
                className={`h-[2px] bg-[#d1a06b] transition-all duration-300 ${
                  activeTab === "signin" ? "w-1/3 ml-[16.6%]" : "w-1/3 ml-[50%]"
                }`}
              />
            </div>

            {/* Forms */}
            {activeTab === "signin" ? (
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-white/90">
                    Email address <span className="text-[#d1a06b]">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <FaUser className="h-4 w-4 text-white/50" />
                    </span>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-9 pr-3 py-2 text-sm bg-white text-black rounded-sm h-11 outline-none border border-white/20 focus:border-[#d1a06b]"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm mb-2 text-white/90">
                    Password <span className="text-[#d1a06b]">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <FaLock className="h-4 w-4 text-white/50" />
                    </span>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="block w-full pl-9 pr-3 py-2 text-sm bg-white text-black rounded-sm h-11 outline-none border border-white/20 focus:border-[#d1a06b]"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                {/* Remember + Forgot */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      id="remember-me"
                      name="rememberMe"
                      type="checkbox"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-white/30 bg-transparent text-[#d1a06b] focus:ring-[#d1a06b]"
                    />
                    <span className="text-white/90">Remember me</span>
                  </label>
                  <a href="#" className="text-sm font-semibold text-white hover:text-[#d1a06b]">
                    Forgot Your Password?
                  </a>
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#d1a06b] text-black font-semibold px-6 py-2 rounded-sm shadow hover:bg-[#c89159] transition-colors"
                  >
                    Sign In <span className="text-black">→</span>
                  </button>
                </div>

                {/* Bottom Divider */}
                <div className="mt-6 border-t border-white/30" />
              </form>
            ) : (
              <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="reg-email" className="block text-sm mb-2 text-white/90">
                    Your email address <span className="text-[#d1a06b]">*</span>
                  </label>
                  <input
                    id="reg-email"
                    name="regEmail"
                    type="email"
                    required
                    className="block w-full px-3 py-2 text-sm bg-white text-black rounded-sm h-11 outline-none border border-white/20 focus:border-[#d1a06b]"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="reg-password" className="block text-sm mb-2 text-white/90">
                    Password <span className="text-[#d1a06b]">*</span>
                  </label>
                  <input
                    id="reg-password"
                    name="regPassword"
                    type="password"
                    required
                    className="block w-full px-3 py-2 text-sm bg-white text-black rounded-sm h-11 outline-none border border-white/20 focus:border-[#d1a06b]"
                    placeholder="Create a password"
                  />
                </div>

                <label className="flex items-start gap-3 text-sm">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-white/30 bg-transparent text-[#d1a06b] focus:ring-[#d1a06b]" />
                  <span className="text-white/90">Subscribe to stay updated with new products and offers!</span>
                </label>

                <div className="text-center pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#d1a06b] text-black font-semibold px-6 py-2 rounded-sm shadow hover:bg-[#c89159] transition-colors"
                  >
                    Register <span className="text-black">→</span>
                  </button>
                </div>

                <div className="mt-8 border-t border-white/30" />

                <p className="mt-6 text-sm text-white/70">
                  To register as a wholesale customer, <a href="#" className="text-[#d1a06b] underline">click here</a>
                </p>
              </form>
            )}
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
