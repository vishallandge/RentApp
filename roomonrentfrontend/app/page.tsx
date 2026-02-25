// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

"use client";
import Link from 'next/link';
import Image from 'next/image';
import PropertyCard from '@/components/PropertyCard'; // reusing your existing card
import SearchFilter from '@/components/SearchFilter'; // optional, but we'll use a simplified hero search

export default function Home() {
  // Mock data – replace with actual data fetching later
  const featuredProperties = [
    { id: '1', title: 'Cozy Studio in Downtown', price: '$1,200/mo', location: 'New York, NY', image: '/images/studio.jpg' },
    { id: '2', title: 'Spacious 2-Bedroom Apartment', price: '$2,500/mo', location: 'Los Angeles, CA', image: '/images/apartment.jpg' },
    { id: '3', title: 'Modern House with Garden', price: '$3,800/mo', location: 'Austin, TX', image: '/images/house.jpg' },
    { id: '4', title: 'Shared Room for Students', price: '$600/mo', location: 'Boston, MA', image: '/images/room.jpg' },
  ];

  const categories = [
    { name: 'Rooms', icon: '🛏️', href: '/rooms' },
    { name: 'Apartments', icon: '🏢', href: 'apartmentdetails' },
    { name: 'Houses', icon: '🏠', href: '/search?type=house' },
    { name: 'Condos', icon: '🏙️', href: '/search?type=condo' },
    { name: 'PG/Hostels', icon: '🏨', href: '/search?type=pg' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Search */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/hero-bg.jpg" // replace with your image
            alt="Hero background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find Your Perfect Rental
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rooms, apartments, houses – discover thousands of rental listings in one place.
          </p>
          {/* Simplified search bar – you can also embed your SearchFilter component */}
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-2 flex flex-col md:flex-row">
            <input
              type="text"
              placeholder="Enter location, property type, or keyword"
              className="flex-grow p-3 rounded-l-lg text-gray-800 focus:outline-none"
            />
            <button className="bg-blue-700 text-white px-6 py-3 rounded-r-lg font-semibold hover:bg-blue-800 transition">
              Search
            </button>
          </div>
          <p className="mt-4 text-sm opacity-90">
            Popular: New York · Los Angeles · Chicago · Miami
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition"
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="font-semibold text-lg">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Featured Rentals</h2>
          <p className="text-gray-600 text-center mb-12">Handpicked properties just for you</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* {featuredProperties.map((property) => (
              <PropertyCard key={property.id}  />
            ))} */}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/search"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              View All Listings
            </Link>
          </div>
        </div>
      </section>

      {/* Stats / Trust Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="font-semibold text-xl mb-2">Wide Selection</h3>
              <p className="text-gray-600">Thousands of rooms and apartments across the country.</p>
            </div>
            <div>
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="font-semibold text-xl mb-2">Easy Booking</h3>
              <p className="text-gray-600">Book directly or contact landlords in one click.</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="font-semibold text-xl mb-2">Verified Listings</h3>
              <p className="text-gray-600">All properties are verified for your peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action for Renters / Owners */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">List Your Property</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Are you a landlord or tenant? Post your property today and reach thousands of potential tenants.
          </p>
          <Link
            href="/post-property"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
          >
            Start Listing
          </Link>
        </div>
      </section>
    </div>
  );
}