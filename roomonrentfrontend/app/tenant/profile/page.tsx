"use client";

import React, { useState } from "react";

const SimpleProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Rahul Sharma",
    email: "rahul@example.com",
    phone: "9876543210",
    bio: "Looking for a flat near the city center.",
  });

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl border border-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">My Profile</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-sm font-bold text-indigo-600 hover:underline"
        >
          {isEditing ? "✅ Save" : "✏️ Edit"}
        </button>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-xs font-bold text-gray-400 mb-1">
            NAME
          </label>
          <input
            type="text"
            disabled={!isEditing}
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            className="w-full p-2 bg-gray-50 border rounded-lg disabled:bg-transparent outline-none focus:border-indigo-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-bold text-gray-400 mb-1">
            EMAIL
          </label>
          <input
            type="email"
            disabled={!isEditing}
            value={profile.email}
            className="w-full p-2 bg-gray-50 border rounded-lg disabled:bg-transparent outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-bold text-gray-400 mb-1">
            PHONE
          </label>
          <input
            type="text"
            disabled={!isEditing}
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            className="w-full p-2 bg-gray-50 border rounded-lg disabled:bg-transparent outline-none"
          />
        </div>

        {/* Bio */}
        <div>
          <label className="block text-xs font-bold text-gray-400 mb-1">
            BIO
          </label>
          <textarea
            disabled={!isEditing}
            value={profile.bio}
            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
            className="w-full p-2 bg-gray-50 border rounded-lg disabled:bg-transparent outline-none h-24"
          />
        </div>
      </div>
    </div>
  );
};

export default SimpleProfile;
