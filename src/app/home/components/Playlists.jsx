'use client';

import { useRef } from "react";
import styles from "../styles/playlists.module.css";

const playlists = [
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

export default function Playlists(props) {
  const scrollRef = useRef(null);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>{props.header}</h3>
      <div className={styles.scrollContainer} ref={scrollRef}>
        {playlists.map((playlist, i) => (
          <div
            key={i}
            className={styles.card}
            style={{ backgroundImage: `url(${playlist.image})` }}
          >
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
