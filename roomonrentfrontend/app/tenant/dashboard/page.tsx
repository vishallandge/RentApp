"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "../../../components/Header";

export default function TenantDashboard() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-blue-50 p-10">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-blue-700">
              Tenant Dashboard 🏠
            </h1>

            {/* Sidebar ka nichla hissa */}
            <div className="mt-auto border-t border-gray-100 pt-4">
              <Link
                href="/tenant/profile"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50 transition group"
              >
                {/* Profile Icon (Emoji version) */}
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-lg group-hover:bg-indigo-200">
                  👤
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-800">
                    Rahul Sharma
                  </span>
                  <span className="text-xs text-gray-500">View Profile</span>
                </div>
              </Link>
            </div>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </div>

          <p className="mt-4 text-gray-600">
            Welcome Tenant! Check rent and payment status here.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-blue-100 p-6 rounded-xl shadow">
              <h2 className="font-semibold text-blue-900 text-lg">
                Monthly Rent
              </h2>
              <p className="text-2xl mt-2 text-blue-500 font-bold">₹10,000</p>
            </div>

            <div className="bg-green-100 p-6 rounded-xl shadow">
              <h2 className="font-semibold text-green-900 text-lg">
                Payment Status
              </h2>
              <p className="text-2xl mt-2 text-green-500 font-bold text-green-600">
                Paid ✅
              </p>
            </div>

            <div className="bg-red-100 p-6 border-t-4 border-red-500  rounded-xl shadow">
              <h2 className="font-semibold text-red-900 text-lg">Complaints</h2>
              <p className="text-2xl mt-2 text-red-500  font-bold">1 Open</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
