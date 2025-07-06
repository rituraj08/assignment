import React, { useState, useCallback } from 'react';

const searchListCountry = [
  'India', 'Vietnam', 'Japan', 'Scotland', 'Ireland',
  'London', 'Turkey', 'Pakistan', 'Iceland', 'Switzerland',
];

const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

const SearchComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredSearch, setFilteredSearch] = useState([]);

  const handleDebouncedSearch = useCallback(
    debounce((query) => {
      if (query.trim() === '') {
        setFilteredSearch([]);
      } else {
        const result = searchListCountry.filter((item) =>
          item.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredSearch(result);
      }
    }, 500), []
  );

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchText(query);
    handleDebouncedSearch(query);
  };

  return (
    <div style={{ position: 'relative', width: '200px' }}>
      <input
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Search countries..."
        style={{ width: '100%', padding: '10px' }}
      />
      {filteredSearch.length > 0 && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            border: '1px solid black',
            background: 'white',
            zIndex: 1,
          }}
        >
          {filteredSearch.map((item, idx) => (
            <div
              style={{
                padding: '5px',
                cursor: 'pointer',
                borderBottom: '1px solid black',
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
