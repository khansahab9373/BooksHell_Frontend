import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MobileNav = () => {
  const role = useSelector((state) => state.auth.role);

  return (
    <>
      {role === "user" && (
        <div className="w-full flex lg:hidden items-center justify-between my-4 mt-4 bg-gray-100 dark:bg-zinc-800 p-4 rounded">
          <Link
            to="/profile"
            className="text-gray-800 dark:text-zinc-100 font-semibold w-full text-center hover:bg-gray-200 dark:hover:bg-zinc-900 rounded transition-all duration-300"
          >
            Favourite
          </Link>
          <Link
            to="/profile/orderHistory"
            className="text-gray-800 dark:text-zinc-100 font-semibold w-full text-center hover:bg-gray-200 dark:hover:bg-zinc-900 rounded transition-all duration-300"
          >
            Order History
          </Link>
          <Link
            to="/profile/settings"
            className="text-gray-800 dark:text-zinc-100 font-semibold w-full text-center hover:bg-gray-200 dark:hover:bg-zinc-900 rounded transition-all duration-300"
          >
            Settings
          </Link>
        </div>
      )}

      {role === "admin" && (
        <div className="w-full flex lg:hidden items-center justify-between my-4 mt-4 bg-gray-100 dark:bg-zinc-800 p-4 rounded">
          <Link
            to="/profile"
            className="text-gray-800 dark:text-zinc-100 font-semibold w-full text-center hover:bg-gray-200 dark:hover:bg-zinc-900 rounded transition-all duration-300"
          >
            All Orders
          </Link>
          <Link
            to="/profile/add-book"
            className="text-gray-800 dark:text-zinc-100 font-semibold w-full text-center hover:bg-gray-200 dark:hover:bg-zinc-900 rounded transition-all duration-300"
          >
            Add Book
          </Link>
        </div>
      )}
    </>
  );
};

export default MobileNav;
