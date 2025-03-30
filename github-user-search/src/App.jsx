import { useState } from "react";
import Search from "./components/Search";
import UserProfile from "./components/UserProfile";
import { fetchUserData } from "./services/githubService";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (filters) => {
    setLoading(true);
    const userData = await fetchUserData(filters);
    setUsers(userData);
    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center">GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      <UserProfile users={users} loading={loading} />
    </div>
  );
}
