import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with local JSON
    const searchUsers = async () => {
      setLoading(true);
      try {
        // In real app, load from your JSON file
        const users = []; // Add your user data here
        const filtered = users.filter(user => 
          user.name.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
      } catch (error) {
        console.error('Error searching users:', error);
      }
      setLoading(false);
    };

    searchUsers();
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <SearchBox />
      
      {loading ? (
        <div className="text-center py-12">Loading...</div>
      ) : results.length === 0 ? (
        <div className="text-center py-12">
          <img src="/no-results.svg" alt="No results" className="mx-auto mb-4" />
          <p className="text-gray-500">No results found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {results.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
