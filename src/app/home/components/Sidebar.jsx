'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from '../styles/sidebar.module.css';

export default function Sidebar() {
  const pathname = usePathname();

  const activePage = pathname.includes('your-library')
    ? 'library'
    : pathname.includes('search')
    ? 'search'
    : pathname.includes('create-playlist')
    ? 'create-playlist'
    : pathname.includes('liked-songs')
    ? 'liked-songs'
    : 'home';

  return (
    <aside className={styles.sidebar}>
      <h1 className={styles.logo}>Lunaye</h1>

      <div className={styles.navSection}>
        <Link href="/home" className={`${styles.navItem} ${activePage === 'home' ? styles.active : ''}`}>
          <img src="/icons/home.png" alt="Home" className={styles.icon} />
          <span>Home</span>
        </Link>

        <Link href="/home/search" className={`${styles.navItem} ${activePage === 'search' ? styles.active : ''}`}>
          <img src="/icons/search.png" alt="Search" className={styles.icon} />
          <span>Search</span>
        </Link>

        <Link href="/home/your-library" className={`${styles.navItem} ${activePage === 'library' ? styles.active : ''}`}>
          <img src="/icons/library.png" alt="Library" className={styles.icon} />
          <span>Your Library</span>
        </Link>
      </div>

      <div className={styles.navSection}>
        <Link href="/home/create-playlist" className={`${styles.navItem} ${activePage === 'create-playlist' ? styles.active : ''}`}>
          <img src="/icons/plus.png" alt="Create" className={styles.icon} />
          <span>Create Playlist</span>
        </Link>

        <Link href="/home/liked-songs" className={`${styles.navItem} ${activePage === 'liked-songs' ? styles.active : ''}`}>
          <img src="/icons/heart.png" alt="Liked" className={styles.icon} />
          <span>Liked Songs</span>
        </Link>
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
