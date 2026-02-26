"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import InputField from "../../components/InputField";
import MyLogo from "../../public/flaticon.png";

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "Owner",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🔐 Password match check
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    // 🔥 Store in localStorage (Demo purpose)
    localStorage.setItem("user", JSON.stringify(formData));

    console.log("Stored Data:", formData);

    // 🔥 Redirect condition wise
    // if (formData.role === "Owner") {
    //   router.push("/owner/dashboard");
    // } else {
    //   router.push("/tenant/dashboard");
    // }
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex lg:grid-cols-2 w-full max-w-6xl bg-white border border-emerald-900  shadow-2xl overflow-hidden">
        {/* LEFT SIDE */}
        <div className="hidden lg:flex w-2xl flex-col justify-center  text-center bg-gray-200  text-black p-2 ">
          <div className="flex justify-center">
            <Image
              src={MyLogo}
              alt="logo"
              width={300}
              height={300}
              className=""
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-wide">Login/signup</h1>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-10 flex  items-center  w-full bg-white justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-semibold text-gray-800">
              Create Account
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <InputField
                label="Full Name"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
              />

              <InputField
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />

              <InputField
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />
              <InputField
                label="Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />

              {/* Role Selection */}
              <div>
                <label className="block text-sm text-gray-500 mb-2">
                  Register As
                </label>
                <div className="flex gap-6">
                  {["Owner", "Tenant"].map((role) => (
                    <label
                      key={role}
                      className="flex items-center gap-2  cursor-pointer"
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

              <InputField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />

              <InputField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="w-full bg-rose-500 hover:bg-rose-800 text-white py-3 rounded-sm shadow-md hover:shadow-lg transition-all duration-200"
              >
                Create Account
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-rose-600 font-bold hover:underline"
              >
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
