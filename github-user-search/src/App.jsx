import { useState } from "react";
import Search from "./components/Search";
import UserProfile from "./components/UserProfile";
import { fetchUserData } from "./services/githubService";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (username) => {
    setLoading(true);
    const userData = await fetchUserData(username);
    setUser(userData);
    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center">GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      {loading ? <p>Loading...</p> : <UserProfile user={user} />}
    </div>
  );
}
