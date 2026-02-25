import SearchFilter from '@/components/SearchFilter';
import PropertyCard from '@/components/PropertyCard';

export default function SearchPage() {
  return (
    <div>
      <h1>Search Properties</h1>
      <SearchFilter />
      <div className="property-grid">
        <PropertyCard />
        <PropertyCard />
      </div>
    </div>
  );
}