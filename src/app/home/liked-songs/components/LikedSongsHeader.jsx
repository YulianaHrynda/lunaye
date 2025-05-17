import Image from 'next/image';
import styles from '../styles/likedSongs.module.css';

export default function LikedSongsHeader({ songCount = 0, duration = '0 minutes' }) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.coverBox}>
        <Image
            src="/liked-songs/heart.png"
            alt="Liked Songs Cover"
            width={160}
            height={160}
            className={styles.heartImage}
        />
        </div>
        <div className={styles.headerText}>
          <span className={styles.playlistLabel}>Playlist</span>
          <h1 className={styles.title}>Liked Songs</h1>
          <p className={styles.meta}>{duration}, {songCount} songs</p>
        </div>
      </div>

      <div className={styles.controlsRow}>
        <div className={styles.playButton}>
            <Image src="/liked-songs/play.png" alt="Play" fill className={styles.playIcon} />
        </div>

        <button className={styles.iconButton}>
          <Image src="/icons/shuffle.png" alt="Shuffle" width={20} height={20} />
        </button>
        <button className={styles.iconButton}>
          <Image src="/icons/repeat.png" alt="Repeat" width={20} height={20} />
        </button>
      </div>
    </div>
  );
}
