import React from 'react';
import { useQuery } from 'react-query';

// Fetch posts function
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  // Using React Query's `useQuery` hook with caching options
  const { data, error, isLoading, isError, refetch } = useQuery(
    'posts',              // Query key
    fetchPosts,           // Fetch function
    {
      // Caching configuration options
      cacheTime: 1000 * 60 * 5,  // Keep data in cache for 5 minutes
      staleTime: 1000 * 60 * 2,  // Data considered fresh for 2 minutes
      refetchOnWindowFocus: false, // Disable refetch when window is focused
      keepPreviousData: true,     // Keep previous data while new data is loading
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
