import React, { useState } from 'react';

const SearchByLocation = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = () => {
    onSearch(location);
  };

  return (
    <div className="SearchContainer">
      <h1>Restaurant Search</h1>
      <div className="SearchBar">
        <input
          type="text"
          className="SearchBar-input"
          placeholder="Restaurant location"
          value={location}
          onChange={handleLocationChange}
        />
        <button className="SearchBar-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Remove or comment out the reference to the 'restaurant' prop */}
      {/* <RestaurantCard restaurant={/* pass restaurant data /> */}
    </div>
  );
};

export default SearchByLocation;
