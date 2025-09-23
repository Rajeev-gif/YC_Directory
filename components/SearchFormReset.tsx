"use client";
import { XCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const SearchFormReset = () => {
  const handleReset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) {
      form.reset();
    }
  };

  return (
    <div>
      <button type="reset" onClick={handleReset} className="">
        <Link
          href="/"
          className="search-btn text-center text-white hover:bg-gray-800 transition"
        >
          <XCircle className="size-6" />
        </Link>
      </button>
    </div>
  );
};

export default SearchFormReset;
