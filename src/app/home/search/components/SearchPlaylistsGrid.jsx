import styles from '../styles/search_results.module.css';

export default function SearchPlaylistsGrid({ playlists }) {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Playlists</h3>
      <div className={styles.grid}>
        {playlists.map((item, index) => (
          <div
            key={index}
            className={styles.playlistCard}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className={styles.cardOverlay}>
              <p className={styles.cardTitle}>{item.title}</p>
              <p className={styles.cardSubtitle}>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
