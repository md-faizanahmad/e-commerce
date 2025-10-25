import { Link } from "react-router-dom";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About E-Shop</h3>
            <p className="text-sm">
              Your one-stop shop for electronics, clothing, and more.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-primary">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-primary">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-primary">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                support@eshop.com
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2" />
                +1-800-123-4567
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} E-Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
