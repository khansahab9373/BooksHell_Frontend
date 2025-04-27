import React, { useState } from "react";
import axios from "axios";

const AddBook = () => {
  const [Data, setData] = useState({
    url: "",
    title: "",
    author: "",
    price: "",
    desc: "",
    language: "",
  });

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  // Handle input change
  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  // Submit function
  const submit = async () => {
    try {
      if (
        Data.url === "" ||
        Data.title === "" ||
        Data.author === "" ||
        Data.price === "" ||
        Data.desc === "" ||
        Data.language === ""
      ) {
        alert("All fields are required");
      } else {
        const response = await axios.post(
          "http://localhost:3000/api/v1/add-book",
          Data,
          { headers }
        );
        setData({
          url: "",
          title: "",
          author: "",
          price: "",
          desc: "",
          language: "",
        });
        alert(response.data.message);
      }
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white px-4 py-8">
      <h1 className="text-3xl md:text-5xl font-semibold text-gray-800 dark:text-yellow-100 mb-8">
        Add Book
      </h1>

      <div className="p-4 bg-gray-100 dark:bg-zinc-800 rounded-lg text-gray-800 dark:text-zinc-100">
        {/* Image URL */}
        <div className="mb-4">
          <label
            htmlFor="url"
            className="text-gray-600 dark:text-zinc-400 block mb-2"
          >
            Image URL
          </label>
          <input
            type="text"
            className="w-full bg-gray-200 dark:bg-zinc-900 text-black dark:text-zinc-100 p-2 outline-none rounded"
            placeholder="Enter Image URL"
            name="url"
            value={Data.url}
            onChange={change}
          />
        </div>

        {/* Title */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="text-gray-600 dark:text-zinc-400 block mb-2"
          >
            Title
          </label>
          <input
            type="text"
            className="w-full bg-gray-200 dark:bg-zinc-900 text-black dark:text-zinc-100 p-2 outline-none rounded"
            placeholder="Enter Book Title"
            name="title"
            value={Data.title}
            onChange={change}
          />
        </div>

        {/* Author */}
        <div className="mb-4">
          <label
            htmlFor="author"
            className="text-gray-600 dark:text-zinc-400 block mb-2"
          >
            Author
          </label>
          <input
            type="text"
            className="w-full bg-gray-200 dark:bg-zinc-900 text-black dark:text-zinc-100 p-2 outline-none rounded"
            placeholder="Enter Author Name"
            name="author"
            value={Data.author}
            onChange={change}
          />
        </div>

        {/* Flex Row: Language & Price */}
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="w-full md:w-1/2">
            <label
              htmlFor="language"
              className="text-gray-600 dark:text-zinc-400 block mb-2"
            >
              Language
            </label>
            <input
              type="text"
              className="w-full bg-gray-200 dark:bg-zinc-900 text-black dark:text-zinc-100 p-2 outline-none rounded"
              placeholder="Enter Language"
              name="language"
              value={Data.language}
              onChange={change}
            />
          </div>

          <div className="w-full md:w-1/2">
            <label
              htmlFor="price"
              className="text-gray-600 dark:text-zinc-400 block mb-2"
            >
              Price
            </label>
            <input
              type="number"
              className="w-full bg-gray-200 dark:bg-zinc-900 text-black dark:text-zinc-100 p-2 outline-none rounded"
              placeholder="Enter Price"
              name="price"
              value={Data.price}
              onChange={change}
            />
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            htmlFor="desc"
            className="text-gray-600 dark:text-zinc-400 block mb-2"
          >
            Description
          </label>
          <textarea
            className="w-full bg-gray-200 dark:bg-zinc-900 text-black dark:text-zinc-100 p-2 outline-none rounded"
            rows="5"
            placeholder="Enter Description"
            name="desc"
            value={Data.desc}
            onChange={change}
          />
        </div>

        {/* Submit Button */}
        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          onClick={submit}
        >
          Add Book
        </button>
      </div>
    </div>
  );
};

export default AddBook;
