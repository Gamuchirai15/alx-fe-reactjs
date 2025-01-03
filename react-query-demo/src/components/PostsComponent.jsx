import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

function PostsComponent() {
  
  const { data, error, isLoading, isError, refetch } = useQuery(
    'posts', 
    fetchPosts, 
    {
      staleTime: 1000 * 60 * 5, 
      refetchOnWindowFocus: true,
      cacheTime: 1000 * 60 * 10, 
      keepPreviousData: true,  
    }
  );

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()}>Refetch Data</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
