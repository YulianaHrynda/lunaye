'use client';

import { useState } from 'react';

import SearchBar from './components/SearchBar';
import SearchTopResult from './components/SearchTopResults';
import SearchSongsList from './components/SearchSongsList';
import SearchArtistsGrid from './components/SearchArtistsGrid';
import SearchPlaylistsGrid from './components/SearchPlaylistsGrid';
import PlayerBar from '../components/PlayerBar';

const allSongs = [
  { title: 'Starman', artist: 'David Bowie', album: 'The Rise and Fall', time: '3:33' },
  { title: 'Sweet', artist: 'LATEXFAUNA', album: 'Single', time: '2:50' },
  { title: 'Place I call home', artist: 'Ziferblat', album: 'Eurovision 2024', time: '3:02' },
  { title: 'Killer Queen', artist: 'QUEEN', album: 'Sheer Heart Attack', time: '3:33' },
  { title: 'Starman', artist: 'David Bowie', album: 'The Rise and Fall', time: '3:33' },
];

const allArtists = [
  { name: 'Olivia Rodrigo', genre: 'Pop', image: '/artists/olivia.jpg' },
  { name: 'Tyler, the Creator', genre: 'Rap', image: '/artists/tyler.jpg' },
  { name: 'QUEEN', genre: 'Rock', image: '/artists/queen.jpg' },
  { name: 'LATEXFAUNA', genre: 'Chill Wave', image: '/artists/latexfauna.jpg' },
];

const allPlaylists = [
  { title: '70th Rock Legends', subtitle: 'QUEEN, The Beatles', image: '/covers/rock.jpg' },
  { title: 'Eurovision 2025', subtitle: 'Katarsis, Ziferblat, Kyle', image: '/covers/eurovision.jpg' },
  { title: 'Daily Remix', subtitle: 'Okean Elzy, KRUT', image: '/covers/remix.jpg' },
  { title: 'Eurovision 2025', subtitle: 'Katarsis, Ziferblat, Kyle', image: '/covers/eurovision.jpg' },
  { title: '70th Rock Legends', subtitle: 'QUEEN, The Beatles', image: '/covers/rock.jpg' },
];

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const handleSearch = (query) => {
    setSearchTerm(query.toLowerCase());
  };

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  const filteredSongs = allSongs.filter(
    (song) =>
      song.title.toLowerCase().includes(searchTerm) ||
      song.artist.toLowerCase().includes(searchTerm) ||
      song.album.toLowerCase().includes(searchTerm)
  );

  const filteredArtists = allArtists.filter(
    (artist) =>
      artist.name.toLowerCase().includes(searchTerm) ||
      artist.genre.toLowerCase().includes(searchTerm)
  );

  const filteredPlaylists = allPlaylists.filter(
    (playlist) =>
      playlist.title.toLowerCase().includes(searchTerm) ||
      playlist.subtitle.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <SearchBar onSearch={handleSearch} onFilterChange={handleFilterChange} />

      {filter === 'All' || filter === 'Playlists' ? (
        <SearchTopResult
          result={{
            image: '/covers/rock.jpg',
            title: '70th Rock Legends',
            subtitle: 'QUEEN, The Beatles',
          }}
        />
      ) : null}

        {(filter === 'All' || filter === 'Songs') && (
        filteredSongs.length > 0 ? (
            <SearchSongsList songs={filteredSongs} />
        ) : (
            <p style={{ padding: '0 24px', color: '#888' }}>No songs found</p>
        )
        )}

        {(filter === 'All' || filter === 'Artists') && (
        filteredArtists.length > 0 ? (
            <SearchArtistsGrid artists={filteredArtists} />
        ) : (
            <p style={{ padding: '0 24px', color: '#888' }}>No artists found</p>
        )
        )}

        {(filter === 'All' || filter === 'Playlists') && (
        filteredPlaylists.length > 0 ? (
            <SearchPlaylistsGrid playlists={filteredPlaylists} />
        ) : (
            <p style={{ padding: '0 24px', color: '#888' }}>No playlists found</p>
        )
        )}



      <PlayerBar />
    </div>
  );
}
