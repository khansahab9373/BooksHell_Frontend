import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../BookCard/BookCard";

const Favourites = () => {
  const [FavouriteBooks, setFavouriteBooks] = useState([]);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/get-favourite-books`,
          { headers }
        );
        setFavouriteBooks(response.data.data || []);
      } catch (error) {
        console.error("Error fetching favourite books:", error);
      }
    };
    fetch();
  }, []); // Removed dependency on FavouriteBooks to avoid infinite re-renders

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white px-4 py-8">
      {FavouriteBooks && FavouriteBooks.length === 0 && (
        <div className="text-5xl font-semibold text-zinc-500 dark:text-zinc-300 flex flex-col items-center justify-center w-full h-full">
          No Favourite Books
          <img src="/Star.png" alt="No Favourites" className="h-[20vh] my-8" />
        </div>
      )}

      {FavouriteBooks && FavouriteBooks.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {FavouriteBooks.map((item, i) => (
            <div key={i}>
              <BookCard data={item} favourite={true} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
