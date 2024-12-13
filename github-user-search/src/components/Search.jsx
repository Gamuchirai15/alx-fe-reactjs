import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username && !location && !minRepos) return; // Don't submit if no criteria is filled

    setLoading(true);
    setError('');
    setUserData([]);
    
    const query = buildQuery();

    try {
      const data = await fetchUserData(query, page);
      setUserData(data.items);
    } catch (err) {
      setError("Looks like we can't find any users with the provided criteria.");
    } finally {
      setLoading(false);
    }
  };

  // Build query string for API request
  const buildQuery = () => {
    let query = `type:user`;
    if (username) query += `+${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;
    return query;
  };

  const loadMore = () => {
    setPage(page + 1);
    handleSubmit();
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Location (e.g., San Francisco)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-center text-red-500">{error}</p>}

      {userData.length > 0 && (
        <div className="mt-8 space-y-4">
          {userData.map((user) => (
            <div key={user.id} className="flex items-center space-x-4 p-4 border rounded-md">
              <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="font-semibold">{user.login}</h3>
                <p>{user.location ? `Location: ${user.location}` : 'No location available'}</p>
                <p>{`Public Repos: ${user.public_repos}`}</p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  View Profile
                </a>
              </div>
            </div>
          ))}
          <button
            onClick={loadMore}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
