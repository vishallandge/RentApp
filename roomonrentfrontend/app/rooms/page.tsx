"use client";
import React, { useState, useEffect } from 'react';

// Define the shape of a room object (useful for TypeScript)
interface Room {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  imageUrl: string;
}

const RoomList: React.FC = () => {
  // State for rooms, loading, and error – ready for future API integration
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Mock data – replace this with an API call later
  useEffect(() => {
    // Simulate fetching data from an API
    const fetchRooms = async () => {
      try {
        // 👇 In the future, replace this with:
        // const response = await fetch('/api/rooms');
        // const data = await response.json();
        // setRooms(data);

        // Static hardcoded data for now
        const mockRooms: Room[] = [
          {
            id: '1',
            title: 'Cozy Downtown Studio',
            description: 'Modern studio in the heart of the city, close to public transport.',
            price: 850,
            location: 'Downtown',
            bedrooms: 1,
            imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          },
          {
            id: '2',
            title: 'Sunny 2-Bedroom Apartment',
            description: 'Bright apartment with a large balcony, perfect for roommates.',
            price: 1450,
            location: 'Westside',
            bedrooms: 2,
            imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          },
          {
            id: '3',
            title: 'Private Room in Shared House',
            description: 'Furnished room in a friendly house with a garden.',
            price: 600,
            location: 'North Park',
            bedrooms: 1,
            imageUrl: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          },
          {
            id: '4',
            title: 'Luxury Penthouse with View',
            description: 'Top-floor apartment with panoramic city views and rooftop access.',
            price: 2200,
            location: 'City Center',
            bedrooms: 3,
            imageUrl: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          },
        ];

        // Simulate network delay (optional, for demo)
        setTimeout(() => {
          setRooms(mockRooms);
          setLoading(false);
        }, 500);
      } catch (err) {
        setError('Failed to load rooms. Please try again later.');
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  // Optional search/filter state – you can expand later
  const [searchTerm, setSearchTerm] = useState('');

  // Filter rooms based on search input (case‑insensitive title/location)
  const filteredRooms = rooms.filter(
    (room) =>
      room.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Loading and error UI
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-lg">Loading rooms...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Rooms for Rent
      </h1>

      {/* Search bar – works statically, will filter existing mock data */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by title or location..."
          className="w-full md:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Room grid – responsive: 1 column on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Room image */}
            <img
              src={room.imageUrl}
              alt={room.title}
              className="w-full h-48 object-cover"
            />

            {/* Room details */}
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {room.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {room.description}
              </p>

              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-bold text-blue-600">
                  ${room.price}/mo
                </span>
                <span className="text-sm text-gray-500">
                  {room.bedrooms} {room.bedrooms === 1 ? 'bed' : 'beds'}
                </span>
              </div>

              <div className="flex items-center text-gray-500 text-sm mb-4">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {room.location}
              </div>

              {/* Action button */}
              <button
                onClick={() => alert(`View details for ${room.title}`)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Message if no rooms match the search */}
      {filteredRooms.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No rooms match your search.</p>
      )}
    </div>
  );
};

export default RoomList;