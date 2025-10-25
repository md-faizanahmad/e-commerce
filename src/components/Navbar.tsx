import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { id: 1, name: "electronics", path: "/category/electronics" },
    { id: 2, name: "jewelery", path: "/category/jewelery" },
    { id: 3, name: "men's clothing", path: "/category/mens" },
    { id: 4, name: "women's clothing", path: "/category/womens" },
    { id: 5, name: "home & kitchen", path: "/category/home-kitchen" },
    { id: 6, name: "beauty", path: "/category/beauty" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Desktop Categories */}
        <ul className="nav-links desktop-menu">
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link to={cat.path} className="nav-link">
                <span className="nav-link-text">{cat.name}</span>
                <motion.span
                  className="nav-link-underline"
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Categories */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="nav-links mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {categories.map((cat) => (
              <motion.li
                key={cat.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={cat.path}
                  onClick={() => setIsOpen(false)}
                  className="nav-link"
                >
                  {cat.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
