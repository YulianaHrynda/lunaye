'use client';

import styles from './styles/createplaylist.module.css';
import PlayerBar from '../components/PlayerBar';

export default function CreatePlaylist() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create Playlist</h1>
      <p className={styles.subtitle}>
        Create a new playlist manually or let us generate one for you
      </p>

      <div className={styles.buttonGroup}>
        <button className={styles.activeButton}>Manual creation</button>
        <button className={styles.inactiveButton}>Smart generation</button>
      </div>

      <div className={styles.form}>
        <label className={styles.label}>Playlist Name</label>
        <input type="text" placeholder="Name" className={styles.input} />

        <label className={styles.label}>Search for Tracks</label>
        <input type="text" placeholder="Search for songs..." className={styles.input} />
      </div>

      <h2 className={styles.resultsTitle}>Results of Search</h2>

      <div className={styles.resultsTable}>
        <div className={styles.resultsHeader}>
          <span>#</span>
          <span>Title</span>
          <span>Album</span>
          <span>Time</span>
        </div>

        <div className={styles.resultsRow}>
          <span>1</span>
          <div className={styles.songInfo}>
            <p>Starman</p>
            <small>David Bowie</small>
          </div>
          <span>The Rise and Fall</span>
          <span>3:33</span>
        </div>

        <div className={styles.resultsRow}>
          <span>2</span>
          <div className={styles.songInfo}>
            <p>Sweet</p>
            <small>LATEXFAUNA</small>
          </div>
          <span>Single</span>
          <span>2:50</span>
        </div>

        <div className={styles.resultsRow}>
          <span>3</span>
          <div className={styles.songInfo}>
            <p>Place I Call Home</p>
            <small>Ziferblat</small>
          </div>
          <span>Eurovision 2024</span>
          <span>3:02</span>
        </div>

        <div className={styles.resultsRow}>
          <span>4</span>
          <div className={styles.songInfo}>
            <p>Killer Queen</p>
            <small>Queen</small>
          </div>
          <span>Sheer Heart Attack</span>
          <span>3:33</span>
        </div>

        <div className={styles.resultsRow}>
          <span>5</span>
          <div className={styles.songInfo}>
            <p>Starman</p>
            <small>David Bowie</small>
          </div>
          <span>The Rise and Fall</span>
          <span>3:33</span>
        </div>
      </div>

      <button className={styles.createButton}>Create Playlist</button>
      <PlayerBar />
    </div>
  );
}
