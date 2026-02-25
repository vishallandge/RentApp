"use client";
import React, { useState, useEffect } from 'react';
// If using React Router, uncomment the next line and use useParams to get the id
// import { useParams } from 'react-router-dom';

// ---------- Type Definitions ----------
interface Host {
  id: string;
  name: string;
  avatar: string;
  isSuperhost: boolean;
}

interface Amenity {
  id: string;
  name: string;
  icon: React.ReactNode; // Accept JSX for icon
}

interface Review {
  id: string;
  user: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

interface Apartment {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  coordinates?: { lat: number; lng: number }; // for map
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  area: number; // in sq ft / sq m
  images: string[];
  host: Host;
  amenities: Amenity[];
  rating: number;
  reviewsCount: number;
  reviews?: Review[]; // optional list of reviews
}

// ---------- Mock Data (will be replaced by API call) ----------
const mockApartment: Apartment = {
  id: 'apt-123',
  title: 'Luxurious Downtown Loft with Skyline View',
  description:
    'Experience the best of city living in this modern loft. Floor-to-ceiling windows offer breathtaking skyline views. Located in the heart of downtown, steps away from restaurants, shops, and nightlife. The space features high ceilings, exposed brick, and designer furnishings. Perfect for couples or business travelers.',
  price: 220,
  location: 'Downtown, New York',
  coordinates: { lat: 40.7128, lng: -74.0060 },
  bedrooms: 1,
  bathrooms: 1,
  maxGuests: 2,
  area: 750,
  images: [
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  ],
  host: {
    id: 'host-1',
    name: 'Jane Doe',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    isSuperhost: true,
  },
  amenities: [
    { id: 'wifi', name: 'WiFi', icon: '📶' },
    { id: 'kitchen', name: 'Kitchen', icon: '🍳' },
    { id: 'ac', name: 'Air conditioning', icon: '❄️' },
    { id: 'washer', name: 'Washer', icon: '🧺' },
    { id: 'tv', name: 'TV', icon: '📺' },
    { id: 'parking', name: 'Free parking', icon: '🅿️' },
  ],
  rating: 4.92,
  reviewsCount: 128,
  reviews: [
    {
      id: 'rev-1',
      user: 'Michael',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
      date: 'March 2025',
      comment: 'Amazing place! The view is even better than the pictures. Jane was super responsive.',
    },
    {
      id: 'rev-2',
      user: 'Sarah',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      rating: 5,
      date: 'February 2025',
      comment: 'Perfect location, clean, and exactly as described. Would definitely stay again.',
    },
  ],
};

// ---------- Helper Icons (simple placeholder – you can replace with Heroicons or any library) ----------
const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

// ---------- Main Component ----------
interface ApartmentDetailsProps {
  apartmentId?: string; // optional if you want to pass id directly
}

const ApartmentDetails: React.FC<ApartmentDetailsProps> = ({ apartmentId }) => {
  // If using React Router, get id from params:
  // const { id } = useParams<{ id: string }>();
  // const effectiveId = id || apartmentId;

  const [apartment, setApartment] = useState<Apartment | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // For image gallery
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Booking state
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  // Simulate API fetch
  useEffect(() => {
    const fetchApartment = async () => {
      try {
        setLoading(true);
        // Replace with your actual API call:
        // const response = await fetch(`/api/apartments/${effectiveId}`);
        // if (!response.ok) throw new Error('Failed to fetch');
        // const data = await response.json();
        // setApartment(data);

        // Mock response
        setTimeout(() => {
          setApartment(mockApartment);
          setLoading(false);
        }, 800);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
        setLoading(false);
      }
    };

    fetchApartment();
  }, [apartmentId]); // Add effectiveId as dependency when using router

  // Loading state
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 animate-pulse">
        <div className="h-96 bg-gray-200 rounded-lg mb-6"></div>
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="h-40 bg-gray-200 rounded mb-4"></div>
            <div className="h-40 bg-gray-200 rounded"></div>
          </div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error || !apartment) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-red-500 text-lg">{error || 'Apartment not found'}</p>
        <button
          onClick={() => window.history.back()}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  // Calculate total price (example: simple nights * price)
  const nights = checkIn && checkOut ? Math.max(1, Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24))) : 0;
  const totalPrice = nights * apartment.price;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Image Gallery */}
      <div className="mb-8">
        <div className="relative h-96 rounded-xl overflow-hidden">
          <img
            src={apartment.images[selectedImageIndex]}
            alt={apartment.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex mt-4 space-x-2 overflow-x-auto pb-2">
          {apartment.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImageIndex(idx)}
              className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
                idx === selectedImageIndex ? 'border-blue-600' : 'border-transparent'
              }`}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Details */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{apartment.title}</h1>
          
          {/* Location and rating row */}
          <div className="flex flex-wrap items-center justify-between mb-4">
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{apartment.location}</span>
            </div>
            <div className="flex items-center">
              <StarIcon />
              <span className="ml-1 font-semibold">{apartment.rating}</span>
              <span className="ml-1 text-gray-500">({apartment.reviewsCount} reviews)</span>
            </div>
          </div>

          {/* Key details as pills */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
              {apartment.bedrooms} {apartment.bedrooms === 1 ? 'bedroom' : 'bedrooms'}
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
              {apartment.bathrooms} {apartment.bathrooms === 1 ? 'bathroom' : 'bathrooms'}
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
              Sleeps {apartment.maxGuests}
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
              {apartment.area} sq ft
            </span>
          </div>

          {/* Host info */}
          <div className="flex items-center mb-6 p-4 bg-gray-50 rounded-lg">
            <img
              src={apartment.host.avatar}
              alt={apartment.host.name}
              className="w-12 h-12 rounded-full mr-4 object-cover"
            />
            <div>
              <p className="font-medium">Hosted by {apartment.host.name}</p>
              {apartment.host.isSuperhost && (
                <p className="text-sm text-green-600 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Superhost
                </p>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">About this space</h2>
            <p className="text-gray-700 whitespace-pre-line">{apartment.description}</p>
          </div>

          {/* Amenities */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Amenities</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {apartment.amenities.map((amenity) => (
                <div key={amenity.id} className="flex items-center space-x-2 text-gray-700">
                  <span className="text-xl">{amenity.icon}</span>
                  <span>{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          {apartment.reviews && apartment.reviews.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Reviews</h2>
              <div className="space-y-4">
                {apartment.reviews.slice(0, 3).map((review) => (
                  <div key={review.id} className="border-b pb-4">
                    <div className="flex items-center mb-2">
                      <img src={review.avatar} alt={review.user} className="w-8 h-8 rounded-full mr-2" />
                      <div>
                        <p className="font-medium">{review.user}</p>
                        <p className="text-xs text-gray-500">{review.date}</p>
                      </div>
                      <div className="ml-auto flex items-center">
                        <StarIcon />
                        <span className="ml-1 text-sm">{review.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
              {apartment.reviews.length > 3 && (
                <button className="mt-4 text-blue-600 font-medium hover:underline">
                  Show all {apartment.reviewsCount} reviews
                </button>
              )}
            </div>
          )}

          {/* Location map placeholder */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Location</h2>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500">
              Map placeholder – {apartment.location}
              {/* In a real app, embed Google Maps or Leaflet here using coordinates */}
            </div>
          </div>
        </div>

        {/* Right Column: Booking Card (sticky on desktop) */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 sticky top-24">
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold">${apartment.price}</span>
              <span className="text-gray-600">per night</span>
            </div>

            {/* Date inputs */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                {[...Array(apartment.maxGuests)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} {i === 0 ? 'guest' : 'guests'}
                  </option>
                ))}
              </select>
            </div>

            {nights > 0 && (
              <div className="mb-4 pt-4 border-t">
                <div className="flex justify-between mb-2">
                  <span>
                    ${apartment.price} x {nights} nights
                  </span>
                  <span>${apartment.price * nights}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${totalPrice}</span>
                </div>
              </div>
            )}

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
              Reserve
            </button>
            <p className="text-xs text-gray-500 text-center mt-2">You won't be charged yet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetails;