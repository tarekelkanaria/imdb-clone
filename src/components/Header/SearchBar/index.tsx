"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const [searchWords, setSearchWords] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchWords.trim().length === 0) return;
    router.push(`/search/${searchWords}`);
    setSearchWords("");
  };

  return (
    <form onSubmit={handleSearch} className="container flex">
      <input
        type="search"
        placeholder="Search Keywords..."
        onChange={(e) => setSearchWords(e.target.value)}
        value={searchWords}
        className="w-full bg-transparent outline-none rounded-sm placeholder:text-gray-500 py-4 flex-1 text-xl"
      />
      <button
        type="submit"
        disabled={searchWords.trim().length === 0}
        className="text-amber-600 disabled:text-gray-500 disabled:cursor-not-allowed ml-1"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
