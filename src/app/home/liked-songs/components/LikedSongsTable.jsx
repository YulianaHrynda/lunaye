import styles from '../styles/likedSongs.module.css';
import LikedSongRow from './LikedSongRow';

export default function LikedSongsTable({ songs }) {
  return (
    <div className={styles.songList}>
      <div className={styles.songHeader}>
        <span>#</span>
        <span>Title</span>
        <span>Album</span>
        <span className={styles.durationHeader}>
          <img src="/icons/clock.png" alt="Duration" width={16} height={16} />
        </span>
      </div>
      {songs.map((song, index) => (
        <LikedSongRow key={song.id} index={index + 1} song={song} />
      ))}
    </div>
  );
}
