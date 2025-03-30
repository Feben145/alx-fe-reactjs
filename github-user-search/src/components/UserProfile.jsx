export default function UserProfile({ users, loading }) {
    if (loading) return <p>Loading...</p>;
    if (!users || users.length === 0) return <p className="text-red-500">Looks like we can't find the user.</p>;
  
    return (
      <div className="grid gap-4 mt-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 bg-white shadow rounded-lg flex items-center gap-4">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <div>
              <h2 className="text-xl font-bold">{user.login}</h2>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
  