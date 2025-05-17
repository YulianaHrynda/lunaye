import PlaylistRow from './PlaylistRow';
import styles from '../styles/playlist.module.css';

export default function PlaylistTable({ songs }) {
  return (
    <div className={styles.songList}>
      <div className={styles.songHeader}>
        <span>#</span>
        <span>Title</span>
        <span>Album</span>
        <span className={styles.durationHeader}>Duration</span>
      </div>
      {songs.map((song, index) => (
        <PlaylistRow key={song.id} index={index + 1} song={song} />
      ))}
    </div>
  );
}
