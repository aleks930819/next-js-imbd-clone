'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!searchTerm) return;

    if (searchTerm) {
      router.push(`/search/${searchTerm}`);
    }
  };

  return (
    <form className="flex max-w-6xl mx-auto  mb-5 mt-10" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search for a movie"
        className="
        w-full h-14 placeholder:gray-500 outline-none bg-transparent border border-black  dark:border-gray-200 px-2 rounded-l-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        disabled={!searchTerm}
        type="submit"
        className="text-amber-800 bg-amber-200 rounded-r-md hover:bg-amber-300 px-5 py-2 border border-black  dark:border-none"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
