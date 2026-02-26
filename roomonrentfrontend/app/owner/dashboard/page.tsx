"use client";

import { useRouter } from "next/navigation";

export default function OwnerDashboard() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-emerald-700">
            Owner Dashboard 🏢
          </h1>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        <p className="mt-4 text-gray-600">
          Welcome Owner! Manage your flats and tenants here.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-emerald-100 p-6 rounded-xl shadow">
            <h2 className="font-semibold text-emerald-900 text-lg">
              Total Flats
            </h2>
            <p className="text-2xl text-emerald-500 mt-2 font-bold">12</p>
          </div>

          <div className="bg-blue-100 p-6 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 text-lg">
              Active Tenants
            </h2>
            <p className="text-2xl text-blue-500 mt-2 font-bold">9</p>
          </div>

          <div className="bg-yellow-100 p-6 rounded-xl shadow">
            <h2 className="font-semibold text-yellow-900 text-lg">
              Pending Payments
            </h2>
            <p className="text-2xl text-yellow-600 mt-2 font-bold">3</p>
          </div>
        </div>
      </div>
    </div>
  );
}
