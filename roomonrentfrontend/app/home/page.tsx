import Hero from "../components/Hero";
// import RoomCard from "../components/RoomCard";
import Sidebar from "../components/Sidebar";
import RoomList from "../components/RoomCard";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <RoomList />
      <main className="container mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Popular Rooms Nearby
          </h2>
          <button className="text-indigo-600 font-semibold hover:underline">
            See all
          </button>
        </div>

        <RoomList />
      </main>
    </div>
  );
}
