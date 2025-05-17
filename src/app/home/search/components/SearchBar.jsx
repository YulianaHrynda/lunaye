'use client';

import { useState } from 'react';
import styles from '../styles/searchbar.module.css';

const filters = ['All', 'Songs', 'Artists', 'Playlists'];

export default function SearchBar({ onSearch, onFilterChange }) {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) onSearch(value); // only call if provided
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    if (onFilterChange) onFilterChange(filter);
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Search for songs, artists, albums or playlists..."
        value={query}
        onChange={handleSearch}
        className={styles.searchInput}
      />

      <div className={styles.filterTabs}>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            className={`${styles.tab} ${activeFilter === filter ? styles.activeTab : ''}`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
