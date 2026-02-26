"use client";
import { getToken, logout } from "../services/authService";

export default function Dashboard() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Dashboard</h2>

      <textarea rows={6} cols={60} value={getToken() || ""} readOnly />

      <br />
      <br />

      <button onClick={logout}>Logout</button>
    </div>
  );
}
