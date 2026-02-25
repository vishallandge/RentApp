"use client";
import { loginWithGoogle } from "../services/authService";

export default function LoginPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login Page</h2>

      <button
        onClick={loginWithGoogle}
        style={{ padding: "12px 20px", fontSize: "18px" }}
      >
        Login with Google
      </button>
    </div>
  );
}