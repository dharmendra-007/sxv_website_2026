"use client";

import { useState } from "react";
import Link from "next/link";
import AuthInput from "@/components/AuthInput";
import Button from "@/components/Button";
import GoogleSignInButton from "@/components/GoogleSignInButton";
import { login, googleSignIn } from "@/services/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);
    try {
      const res = await login({ email, password });
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = async (credential: string) => {
    setError("");
    setLoading(true);
    try {
      const res = await googleSignIn({ credential });
      localStorage.setItem("token", res.data.token);
      alert("Google Sign-In successful");
    } catch (err: any) {
      setError(err.response?.data?.message || "Google Sign-In failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleError = (error: string) => {
    setError(error);
  };

  return (
  <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-10">
    <div className="w-full max-w-md">
      <h2 className="text-3xl font-bold mb-2 text-center text-gray-900">
        Login
      </h2>
      <p className="text-sm text-center text-gray-500 mb-8">
        Welcome back, please sign in
      </p>

      <div className="space-y-5">
        {/* Google Sign-In */}
        <GoogleSignInButton
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleError}
          disabled={loading}
          text="Sign in with Google"
        />

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-50 text-gray-500">Or continue with email</span>
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <AuthInput
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <AuthInput
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        {error && (
          <p className="text-xs text-red-500 mt-1">
            {error}
          </p>
        )}

        <div className="flex justify-between items-center mt-1">
          <Link
            href="/signup"
            className="text-sm text-emerald-600 hover:text-emerald-700 hover:underline font-medium"
          >
            Sign up
          </Link>

          <Link
            href="/forgot"
            className="text-sm text-emerald-600 hover:text-emerald-700 hover:underline font-medium"
          >
            Forgot password?
          </Link>
        </div>

        <Button
          onClick={handleLogin}
          disabled={loading}
          className="w-full mt-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg disabled:bg-emerald-300 transition-colors shadow-sm"
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </div>
    </div>
  </div>
);

}
