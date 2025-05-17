'use client';

import Image from 'next/image';
import styles from '../styles/playlist.module.css';

export default function PlaylistHeader({ title, cover, duration, songCount }) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.coverBox}>
          <Image
            src={cover}
            alt={title}
            fill
            className={styles.coverImage}
            priority
          />
        </div>

        <div className={styles.headerText}>
          <span className={styles.playlistLabel}>Playlist</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.meta}>{duration}, {songCount} songs</p>
        </div>
      </div>

      <div className={styles.controlsRow}>
        <button className={styles.playButton}>
            <Image
            src="/liked-songs/play.png"
            alt="Play"
            fill
            className={styles.playIcon}
            />
        </button>
        <button className={styles.iconButton}>
            <Image src="/icons/shuffle.png" alt="Shuffle" width={24} height={24} />
        </button>
        <button className={styles.iconButton}>
            <Image src="/icons/repeat.png" alt="Repeat" width={24} height={24} />
        </button>
      </div>

    </div>
  );
}
