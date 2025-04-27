import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";
import { useSelector } from "react-redux";
import ThemeToggle from "../ThemeToggle"; // Import the ThemeToggle component

const Navbar = () => {
  const baseLinks = [
    { title: "Home", link: "/" },
    { title: "All Books", link: "/all-books" },
    { title: "Cart", link: "/cart" },
    { title: "Profile", link: "/profile" },
    { title: "Admin Profile", link: "/profile" },
  ];

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  // Filter links based on role and login status
  const links = baseLinks.filter((item) => {
    if (!isLoggedIn) {
      return (
        item.title !== "Cart" &&
        item.title !== "Profile" &&
        item.title !== "Admin Profile"
      );
    }
    if (isLoggedIn && role === "user") {
      return item.title !== "Admin Profile";
    }
    if (isLoggedIn && role === "admin") {
      return item.title !== "Profile" && item.title !== "Cart";
    }
    return true; // Default case
  });

  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavVisible(!mobileNavVisible);
  };

  return (
    <>
      <nav className="z-50 relative flex bg-gray-100 dark:bg-zinc-800 text-black dark:text-white px-8 py-4 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            className="h-10 me-4"
            src="https://cdn-icons-png.flaticon.com/128/10433/10433049.png"
            alt="logo"
          />
          <h1 className="text-2xl font-semibold">BooksHell</h1>
        </Link>
        <div className="nav-links-bookheaven block md:flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            {links.map((item, i) => (
              <Link
                to={item.link}
                className={`${
                  item.title === "Profile" || item.title === "Admin Profile"
                    ? "px-4 py-1 border border-blue-500 rounded hover:bg-gray-200 dark:hover:bg-zinc-900 hover:text-black dark:hover:text-white"
                    : "hover:text-blue-500"
                } transition duration-300`}
                key={i}
              >
                {item.title}
              </Link>
            ))}
          </div>
          {!isLoggedIn && (
            <div className="hidden md:flex gap-4">
              <Link
                to="/LogIn"
                className="px-4 py-1 border border-blue-500 rounded hover:bg-gray-200 dark:hover:bg-zinc-900 hover:text-black dark:hover:text-white transition duration-300"
              >
                LogIn
              </Link>
              <Link
                to="/SignUp"
                className="px-4 py-1 bg-blue-500 rounded hover:bg-gray-200 dark:hover:bg-zinc-900 hover:text-black dark:hover:text-white transition duration-300"
              >
                SignUp
              </Link>
            </div>
          )}

          {/* Add ThemeToggle Component */}
          <ThemeToggle />

          <button
            onClick={toggleMobileNav}
            className="block md:hidden text-black dark:text-white text-2xl hover:text-zinc-400"
          >
            <FaGripLines />
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div
        className={`${
          mobileNavVisible ? "block" : "hidden"
        } bg-gray-100 dark:bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}
      >
        {links.map((item, i) => (
          <Link
            to={item.link}
            className="text-black dark:text-white text-4xl mb-8 font-semibold hover:text-blue-500 transition-all duration-300"
            key={i}
            onClick={toggleMobileNav} // Close mobile nav on link click
          >
            {item.title}
          </Link>
        ))}

        {!isLoggedIn && (
          <>
            <Link
              to="/LogIn"
              className="px-8 mb-8 text-3xl font-semibold py-2 border border-blue-500 rounded text-black dark:text-white hover:bg-gray-200 dark:hover:bg-zinc-900 hover:text-black dark:hover:text-white transition-all duration-300"
              onClick={toggleMobileNav} // Close mobile nav on link click
            >
              LogIn
            </Link>
            <Link
              to="/SignUp"
              className="px-8 mb-8 text-3xl font-semibold py-2 bg-blue-500 rounded hover:bg-gray-200 dark:hover:bg-zinc-900 hover:text-black dark:hover:text-white transition-all duration-300"
              onClick={toggleMobileNav} // Close mobile nav on link click
            >
              SignUp
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
