import styles from '../styles/sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h1 className={styles.logo}>Lunaye</h1>

      <div className={styles.navSection}>
        <div className={`${styles.navItem} ${styles.active}`}>
          <img src="/icons/home.png" alt="Home" className={styles.icon} />
          <span>Home</span>
        </div>
        <div className={styles.navItem}>
          <img src="/icons/search.png" alt="Search" className={styles.icon} />
          <span>Search</span>
        </div>
        <div className={styles.navItem}>
          <img src="/icons/library.png" alt="Library" className={styles.icon} />
          <span>Your Library</span>
        </div>
      </div>

      <div className={styles.navSection}>
        <div className={styles.navItem}>
          <img src="/icons/plus.png" alt="Create" className={styles.icon} />
          <span>Create Playlist</span>
        </div>
        <div className={styles.navItem}>
          <img src="/icons/heart.png" alt="Liked" className={styles.icon} />
          <span>Liked Songs</span>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.playlistHeader}>YOUR PLAYLISTS</div>
      <div className={styles.playlists}>
        <div className={styles.playlistItem}>
          <img src="/icons/musicstack.png" alt="Playlist" className={styles.icon} />
          <span>Daily 1</span>
        </div>
        <div className={styles.playlistItem}>
          <img src="/icons/musicstack.png" alt="Playlist" className={styles.icon} />
          <span>Vibes</span>
        </div>
        <div className={styles.playlistItem}>
          <img src="/icons/musicstack.png" alt="Playlist" className={styles.icon} />
          <span>Sporty</span>
        </div>
      </div>
    </aside>
  );
}
