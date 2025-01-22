import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-semibold">
          GENAI UNIPLANE
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <Link to="/about" className="text-gray-600 hover:text-gray-900">
          About
        </Link>
        <Link to="/offerings" className="text-gray-600 hover:text-gray-900">
          Offerings
        </Link>
        <Link to="/faqs" className="text-gray-600 hover:text-gray-900">
          FAQs
        </Link>
        <Link to="/guide" className="text-gray-600 hover:text-gray-900">
          Guide
        </Link>
      </div>
    </nav>
  );
}
