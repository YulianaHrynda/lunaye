'use client';
import { useRef } from 'react';
import styles from '../styles/featured.module.css';

const featuredPlaylists = [
  {
    title: "70th Rock Legends",
    subtitle: "QUEEN, The Beatles",
    image: "/covers/rock.jpg",
  },
  {
    title: "Eurovision 2025",
    subtitle: "Katarsis, Ziferblat, Kyle",
    image: "/covers/eurovision.jpg",
  },
  {
    title: "Daily Remix",
    subtitle: "Okean Elzy, KRUT",
    image: "/covers/remix.jpg",
  },
  {
    title: "Eurovision 2025",
    subtitle: "Katarsis, Ziferblat, Kyle",
    image: "/covers/eurovision.jpg",
  },
  {
    title: "70th Rock Legends",
    subtitle: "QUEEN, The Beatles",
    image: "/covers/rock.jpg",
  },
];

export default function FeaturedPlaylists() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.headingRow}>
        <h3 className={styles.heading}>Featured Playlists</h3>
        {/* <div className={styles.arrows}>
          <button onClick={() => scroll('left')}>&lt;</button>
          <button onClick={() => scroll('right')}>&gt;</button>
        </div> */}
      </div>

      <div className={styles.scrollContainer} ref={scrollRef}>
        {featuredPlaylists.map((playlist, i) => (
          <div key={i} className={styles.card} style={{ backgroundImage: `url(${playlist.image})` }}>
            <div className={styles.overlay}>
              <p className={styles.title}>{playlist.title}</p>
              <p className={styles.subtitle}>{playlist.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
