export default function UserProfile({ users }) {
    if (!users || users.length === 0) return <p className="text-red-500">No users found.</p>;
  
    return (
      <div className="grid gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 bg-white shadow rounded-lg">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <h2 className="text-xl font-bold">{user.login}</h2>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              View Profile
            </a>
          </div>
        ))}
      </div>
    );
  }
  