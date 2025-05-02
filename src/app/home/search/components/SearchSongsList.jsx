import styles from '../styles/search_results.module.css';

export default function SearchSongsList({ songs }) {
  return (
    <div className={styles.songSection}>
      <h3 className={styles.sectionTitle}>Songs</h3>

      <div className={styles.table}>
        <div className={styles.headerRow}>
          <span>#</span>
          <span>Title</span>
          <span>Album</span>
          <span>Time</span>
        </div>

        {songs.map((song, i) => (
          <div className={styles.songRow} key={i}>
            <span>{i + 1}</span>
            <div className={styles.songInfo}>
              <p>{song.title}</p>
              <small>{song.artist}</small>
            </div>
            <span>{song.album}</span>
            <span>{song.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
