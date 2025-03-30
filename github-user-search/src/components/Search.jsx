import { useState } from "react";
import { fetchUserData } from "../services/githubService"; 

export default function Search() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      const results = await fetchUserData(query, location, minRepos);
      setUsers(results);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="GitHub Username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location (e.g., USA)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border rounded"
        />
        <button type="submit" className="col-span-1 md:col-span-3 px-4 py-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>

   
      {loading && <p className="text-gray-500 mt-4">Loading...</p>}

      {error && <p className="text-red-500 mt-4">Looks like we cant find the user</p>}

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 bg-gray-100 rounded-lg">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mx-auto" />
            <h2 className="text-center font-bold">{user.login}</h2>
            <p className="text-center text-sm">{user.location || "Location Unknown"}</p>
            <p className="text-center text-sm">Repos: {user.public_repos || "N/A"}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 block text-center">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
