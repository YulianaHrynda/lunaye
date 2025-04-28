'use client';
import styles from '../styles/player.module.css';
import { useState } from 'react';

export default function PlayerBar() {
  const [currentTime, setCurrentTime] = useState(60);
  const duration = 225;

  const [volume, setVolume] = useState(70);

  return (
    <div className={styles.player}>
      <div className={styles.left}>
        <img src="/covers/shake.jpg" alt="Shake it Off" className={styles.cover} />
        <div className={styles.info}>
          <p className={styles.title}>Shake it Off</p>
          <p className={styles.artist}>Taylor Swift</p>
        </div>
        <button className={styles.like}>
          <img src="/icons/heart_player.png" alt="like" />
        </button>
      </div>

      <div className={styles.center}>
        <div className={styles.controls}>
          <button><img src="/icons/shuffle.png" alt="shuffle" /></button>
          <button><img src="/icons/prev.png" alt="previous" /></button>
          <button className={styles.play}><img src="/icons/play.png" alt="play" /></button>
          <button><img src="/icons/next.png" alt="next" /></button>
          <button><img src="/icons/repeat.png" alt="repeat" /></button>
        </div>

        <div className={styles.timeline}>
          <span>3:00</span>
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={(e) => setCurrentTime(Number(e.target.value))}
            className={styles.progressSlider}
            style={{
              background: `linear-gradient(to right, #d5687a ${((currentTime / duration) * 100)}%, #444 ${((currentTime / duration) * 100)}%)`,
            }}
          />
          <span>3:45</span>
        </div>
      </div>

      <div className={styles.right}>
        <img src="/icons/speaker.png" alt="volume" />
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className={styles.volumeSlider}
          style={{
            background: `linear-gradient(to right, #d5687a ${volume}%, #444 ${volume}%)`,
          }}
        />
      </div>
    </div>
  );
}
