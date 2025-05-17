import styles from '../styles/likedSongs.module.css';

export default function LikedSongRow({ index, song }) {
  return (
    <div className={styles.songRow}>
      <span>{index}</span>
      
      <div className={styles.songInfo}>
        <span className={styles.songTitle}>{song.title}</span>
        <span className={styles.songArtist}>{song.artist}</span>
      </div>

      <span>{song.album}</span>
      <span className={styles.duration}>{song.duration}</span>
    </div>
  );
}
