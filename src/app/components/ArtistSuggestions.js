import styles from '../styles/artists.module.css';

const artists = [
  { name: "Olivia Rodrigo", genre: "Pop", image: "/artists/olivia.jpg" },
  { name: "Tyler, the Creator", genre: "Rap", image: "/artists/tyler.jpg" },
  { name: "QUEEN", genre: "Rock", image: "/artists/queen.jpg" },
  { name: "LATEFAUNA", genre: "Chill Wave", image: "/artists/latefauna.jpg" },
];

export default function ArtistSuggestions() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>Artists You Might Like</h3>
      <div className={styles.grid}>
        {artists.map((artist, i) => (
          <div key={i} className={styles.card}>
            <img src={artist.image} alt={artist.name} className={styles.image} />
            <div className={styles.overlay}>
              <p className={styles.name}>{artist.name}</p>
              <p className={styles.genre}>{artist.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
