import React, { useState } from 'react';

const searchListCountry = [
  'India',
  'Vietnam',
  'Japan',
  'Scotland',
  'Ireland',
  'London',
  'Turkey',
  'Pakistan',
  'Iceland',
  'Switzerland',
];

const SearchComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredSearch, setFilteredSearch] = useState([]);


  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchText(query);
    if (query.trim() === '') {
      setFilteredSearch([]);
    } else {
      const result = searchListCountry.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSearch(result);
    }
  };

  return (
    <div
      style={{ position: 'relative', width: '200px' }}
    >
      <input
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Search fruits..."
        style={{
          width: '100%',
          padding: '10px'
        }}
      />
      { filteredSearch.length > 0 && (
        <div
          style={{
            position: 'absolute',
            width: '200px',
            border: '1px solid black',
          }}
        >
          {filteredSearch.map((item, idx) => (
            <div
              key={idx}
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


