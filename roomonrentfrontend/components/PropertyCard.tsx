import Link from 'next/link';

// You can later pass actual property data as props
export default function PropertyCard() {
  // Dummy data – replace with props in real implementation
  const property = {
    id: '1',
    title: 'Beautiful Family House',
    price: '$350,000',
    location: 'Springfield, IL',
    image: '/images/house.jpg', // placeholder image path
  };

  return (
    <div className="property-card border rounded overflow-hidden shadow hover:shadow-lg transition">
      {/* Image placeholder – you can use next/image */}
      <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">
        [Image]
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{property.title}</h3>
        <p className="text-gray-700 mb-2">{property.price}</p>
        <p className="text-gray-600 mb-4">{property.location}</p>
        <Link
          href={`/property/${property.id}`}
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}