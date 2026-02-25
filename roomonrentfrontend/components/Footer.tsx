import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-8 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Real Estate App. All rights reserved.
            </p>
          </div>
          {/* <nav className="flex space-x-6">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/search" className="text-sm text-gray-600 hover:text-gray-900">
              Search
            </Link>
            <Link href="/post-property" className="text-sm text-gray-600 hover:text-gray-900">
              Post Property
            </Link>
            <Link href="/login" className="text-sm text-gray-600 hover:text-gray-900">
              Login
            </Link>
          </nav> */}
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          {/* Social media icons (placeholders) */}
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <span className="sr-only">Facebook</span>
            {/* You can add an icon here, e.g., from react-icons */}
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
}