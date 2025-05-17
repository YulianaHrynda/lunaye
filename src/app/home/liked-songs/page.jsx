'use client';

import LikedSongsHeader from './components/LikedSongsHeader';
import LikedSongsTable from './components/LikedSongsTable';
import PlayerBar from '../components/PlayerBar';
import styles from './styles/likedSongs.module.css';

const songs = [
  { id: 1, title: 'Starman', artist: 'David Bowie', album: 'Ziggy Stardust', duration: '3:33' },
  { id: 2, title: 'Sweet', artist: 'LATEXFAUNA', album: 'Unknown', duration: '2:50' },
  { id: 3, title: 'Place I call home', artist: 'Ziferblat', album: 'Unknown', duration: '3:02' },
  { id: 4, title: 'Killer Queen', artist: 'QUEEN', album: 'Sheer Heart Attack', duration: '3:33' },
  { id: 5, title: 'Starman', artist: 'David Bowie', album: 'Ziggy Stardust', duration: '3:33' },
];

export default function LikedSongsPage() {
  return (
    <div className={styles.pageContainer}>
      <LikedSongsHeader songCount={songs.length} duration="45 minutes" />
      <LikedSongsTable songs={songs} />
      <PlayerBar />
    </div>
  );
}
