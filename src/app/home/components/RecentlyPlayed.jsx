import styles from '../styles/recently.module.css';

const songs = [
  { title: "Starman", artist: "David Bowie", album: "The Rise and Fall", time: "3:33" },
  { title: "Sweet", artist: "LATEFAUNA", album: "Single", time: "2:50" },
  { title: "Place I call home", artist: "Zürbeat", album: "Eurovision 2024", time: "3:02" },
  { title: "Killer Queen", artist: "QUEEN", album: "Sheer Heart Attack", time: "3:33" },
  { title: "Starman", artist: "David Bowie", album: "The Rise and Fall", time: "3:33" },
];

export default function RecentlyPlayed() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>Recently Played</h3>
      <div className={styles.tableBox}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableHead}>#</th>
              <th className={styles.tableHead}>Title</th>
              <th className={styles.tableHead}>Album</th>
              <th className={`${styles.tableHead} ${styles.right}`}>Time</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <tr key={index}>
                <td className={styles.tableRow}>{index + 1}</td>
                <td className={styles.tableRow}>
                  <div className={styles.trackInfo}>
                    <span className={styles.trackTitle}>{song.title}</span>
                    <span className={styles.trackArtist}>{song.artist}</span>
                  </div>
                </td>
                <td className={styles.tableRow}>{song.album}</td>
                <td className={`${styles.tableRow} ${styles.right}`}>{song.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
