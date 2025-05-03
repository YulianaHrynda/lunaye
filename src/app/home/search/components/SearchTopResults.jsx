import styles from '../styles/search_results.module.css';

export default function SearchTopResult({ result }) {
  return (
    <div className={styles.topResult}>
      <h3 className={styles.sectionTitle}>Top results</h3>

      <div
        className={styles.resultCard}
        style={{ backgroundImage: `url(${result.image})` }}
      >
        <div className={styles.overlay}>
          <p className={styles.cardTitle}>{result.title}</p>
          <p className={styles.cardSubtitle}>{result.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
