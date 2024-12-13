import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUserData(null);
    
    try {
      // Fetch user data from GitHub API using the service
      const data = await fetchUserData(query, 1, location, minRepos);
      
      if (data.items.length === 0) {
        setError('Looks like we cant find the user');
      } else {
        setUserData(data);
      }
    } catch (err) {
      setError('Error fetching user data');
    }
    setLoading(false);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Search GitHub User"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded-md mr-2"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded-md mr-2"
        />
        <input
          type="number"
          placeholder="Min Repos (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded-md mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      
      {error && <p className="text-red-500">{error}</p>}
      
      {userData && (
        <div className="space-y-4">
          {userData.items.map((user) => (
            <div key={user.id} className="flex items-center space-x-4">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
              <div>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-xl font-bold">
                  {user.login}
                </a>
                <p>{user.location || 'No location provided'}</p>
                <p>{user.public_repos} Repositories</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
