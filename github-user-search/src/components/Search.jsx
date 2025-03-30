import { useState } from "react";

export default function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>
    </div>
  );
}
