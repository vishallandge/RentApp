"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { saveToken } from "../services/authService";

export default function LoginSuccess() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      saveToken(token);
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  }, []);

  return <h3>Logging in...</h3>;
}