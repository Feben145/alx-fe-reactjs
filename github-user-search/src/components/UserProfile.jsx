export default function UserProfile({ user }) {
    if (!user) return <p className="text-red-500">Looks like we can't find the user.</p>;
  
    return (
      <div className="p-4 bg-white shadow rounded-lg">
        <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
        <h2 className="text-xl font-bold">{user.name || user.login}</h2>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          View Profile
        </a>
      </div>
    );
  }
  