import { useState } from "react";
import axios from "axios";

export default function Search() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

   const fetchUserData = async (username) => {
    if (!username.trim()) return;

    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserData(query); 
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

           {loading && <p className="text-gray-500 mt-4">Loading...</p>}

      
      {error && <p className="text-red-500 mt-4">Looks like we cant find the user</p>}
    
      {user && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg flex items-center gap-4">
          <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
          <div>
            <h2 className="text-xl font-bold">{user.login}</h2>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              View Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
