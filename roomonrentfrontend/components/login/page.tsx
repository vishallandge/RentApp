"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import InputField from "../../components/InputField";

export default function LoginPage() {
  const router = useRouter(); // ✅ important

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "Owner",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Login Data:", formData);

    // 🔥 Condition wise redirect
    if (formData.role === "Owner") {
      router.push("/owner/dashboard");
    } else {
      router.push("/tenant/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center">
      <div className="grid lg:grid-cols-2 w-4xl  max-w-6xl bg-white shadow-2xl overflow-hidden">
        {/* LEFT PANEL */}
        <div className=" w-sm hidden lg:flex flex-col justify-center text-center bg-gray-200 text-white gap-10">
          <p className="text-5xl text-center">🏠</p>
          <div>
            <h1 className="text-3xl font-bold text-black tracking-wide">
              Login/singup
            </h1>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="p-10 flex  items-center justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-semibold text-gray-800">Sign In 🔑</h2>
            <p className="text-gray-500 text-sm mt-1">Access your dashboard</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <InputField
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />

              <InputField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />

              {/* Role Selection */}
              <div>
                <label className="block text-sm text-gray-500 mb-2">
                  Login As
                </label>
                <div className="flex gap-6">
                  {["Owner", "Tenant"].map((role) => (
                    <label
                      key={role}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="role"
                        value={role}
                        checked={formData.role === role}
                        onChange={handleChange}
                        className="accent-red-600"
                      />
                      <span className="text-gray-700 text-sm">{role}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-end text-sm">
                <Link
                  href="/forgot-password"
                  className="text-blue-600 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-rose-500 hover:bg-rose-900 text-white py-3 rounded-sm shadow-md hover:shadow-lg transition-all duration-200"
              >
                Sign In
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              Don’t have an account?{" "}
              <Link
                href="/signup"
                className="text-rose-600 font-medium hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
