import styles from '../styles/search_results.module.css';

export default function SearchArtistsGrid({ artists }) {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Artists</h3>
      <div className={styles.grid}>
        {artists.map((artist, index) => (
          <div
            key={index}
            className={styles.artistCard}
            style={{ backgroundImage: `url(${artist.image})` }}
          >
            <div className={styles.cardOverlay}>
              <p className={styles.cardTitle}>{artist.name}</p>
              <p className={styles.cardSubtitle}>{artist.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
