// src/components/Header.tsx
import { Link } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";
import type { HeaderProps } from "../types/header";

const Header: React.FC<HeaderProps> = ({ brand, search, cart, userMenu }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        {/* Brand */}
        <Link to={brand.link} className="text-2xl font-bold text-gray-900">
          {brand.name}
        </Link>

        {/* Search bar (hidden on small devices) */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            search.onSubmit();
          }}
          className="hidden md:flex flex-1 justify-center mx-6"
        >
          <input
            type="text"
            value={search.value}
            onChange={(e) => search.onChange(e.target.value)}
            placeholder={search.placeholder}
            className="w-2/3 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </form>

        {/* Right icons */}
        <div className="flex items-center gap-5">
          <Link to={cart.link} className="relative">
            <ShoppingCart size={26} />
            {cart.itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                {cart.itemCount}
              </span>
            )}
          </Link>

          <div className="relative group">
            <User size={26} />
            <ul className="absolute right-0 bg-white text-gray-800 rounded-lg shadow-md hidden group-hover:block w-28 mt-2">
              {userMenu.links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
