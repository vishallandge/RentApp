interface RoomCardProps {
  price: number;
  title: string;
  location: string;
  image: string;
}

const RoomCard: React.FC<RoomCardProps> = ({
  price,
  title,
  location,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm">{location}</p>
        <p className="text-indigo-600 font-bold text-lg mt-2">₹{price}</p>
      </div>
    </div>
  );
};

const RoomList = () => {
  // 1. Data Array: Yahan aap saari rooms ki details add kar sakte hain
  const roomsData = [
    {
      id: 1,
      price: 12000,
      title: "Luxury 1BHK with Garden View",
      location: "Indiranagar, Bangalore",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    },
    {
      id: 2,
      price: 8500,
      title: "Cozy Studio for Students",
      location: "Koramangala, Bangalore",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    },
    {
      id: 3,
      price: 15000,
      title: "Modern Apartment near Metro",
      location: "Whitefield, Bangalore",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    },
    {
      id: 4,
      price: 10000,
      title: "Spacious Room with Balcony",
      location: "HSR Layout, Bangalore",
      image: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    },
  ];

  return (
    <section className="p-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-indigo-900 mb-8">
        Recommended Rooms
      </h2>

      {/* 2. Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* 3. Using .map() to render cards */}
        {roomsData.map((room) => (
          <RoomCard
            key={room.id} // Hamesha unique key ka use karein
            price={room.price}
            title={room.title}
            location={room.location}
            image={room.image}
          />
        ))}
      </div>
    </section>
  );
};

export default RoomList;
