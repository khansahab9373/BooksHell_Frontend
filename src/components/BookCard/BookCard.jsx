import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BookCard = ({ data, favourite }) => {
  const [loading, setLoading] = useState(false);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const handleRemoveBook = async () => {
    setLoading(true);
    try {
      const response = await axios.put(
        `https://bookshell-backend.vercel.app/api/v1/remove-book-from-favourite`,
        {},
        { headers }
      );
      console.log("Book removed from favourites:", response.data.message);
      alert(response.data.message);
    } catch (error) {
      console.error("Error removing book from favourites:", error);
      alert("An error occurred while removing the book.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-zinc-800 rounded p-4 flex flex-col">
      <Link to={`/view-book-details/${data._id}`}>
        <div className="h-[45vh]">
          <div className="bg-gray-200 dark:bg-zinc-900 rounded flex items-center justify-center">
            <img
              src={data.url}
              alt="Book cover"
              className="h-[25vh] object-contain"
            />
          </div>
          <h2 className="mt-4 text-xl text-gray-800 dark:text-white font-semibold">
            {data.title}
          </h2>
          <p className="mt-2 text-gray-600 dark:text-zinc-400 font-semibold">
            by {data.author}
          </p>
          <p className="mt-2 text-gray-600 dark:text-zinc-400 font-semibold text-xl">
            ₹ {data.price}
          </p>
        </div>
      </Link>

      {favourite && (
        <button
          className={`bg-yellow-100 dark:bg-yellow-900 px-4 py-2 rounded border border-yellow-500 text-yellow-500 dark:text-yellow-300 mt-4 ${
            loading ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={handleRemoveBook}
          disabled={loading}
        >
          {loading ? "Removing..." : "Remove From Favourite"}
        </button>
      )}
    </div>
  );
};

export default BookCard;
