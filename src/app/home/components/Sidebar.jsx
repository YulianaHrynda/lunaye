'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from '../styles/sidebar.module.css';

export default function Sidebar() {
  const pathname = usePathname();

  const activePage =
    pathname.includes('your-library') ? 'library' :
    pathname.includes('search') ? 'search' :
    pathname.includes('create-playlist') ? 'create-playlist' :
    pathname.includes('liked-songs') ? 'liked-songs' :
    pathname.includes('/home/playlists/') ? 'playlist' :
    'home';

  const playlists = [
    { name: 'Daily 1', slug: 'daily-1' },
    { name: 'Vibes', slug: 'vibes' },
    { name: 'Sporty', slug: 'sporty' },
  ];

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
          <img src="/icons/plus.png" alt="Create Playlist" className={styles.icon} />
          <span>Create Playlist</span>
        </Link>

        <Link href="/home/liked-songs" className={`${styles.navItem} ${activePage === 'liked-songs' ? styles.active : ''}`}>
          <img src="/icons/heart.png" alt="Liked Songs" className={styles.icon} />
          <span>Liked Songs</span>
        </Link>
      </div>

      <hr className={styles.divider} />

      <div className={styles.playlistHeader}>YOUR PLAYLISTS</div>
      <div className={styles.playlists}>
        {playlists.map(({ name, slug }) => (
          <Link
            key={slug}
            href={`/home/playlists/${slug}`}
            className={`${styles.playlistItem} ${pathname.includes(slug) ? styles.active : ''}`}
          >
            <img src="/icons/musicstack.png" alt={name} className={styles.icon} />
            <span>{name}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
