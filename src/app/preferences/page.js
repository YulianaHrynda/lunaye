'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './preferences.css';

export default function PreferencesPage() {
  const [step, setStep] = useState('genres');
  const router = useRouter();

  const genres = ['Rock', 'Pop', 'R&B', 'Rap', 'Indie', 'Folk', 'Electronic', 'Country', 'Hip Hop', 'Jazz', 'Classical', 'Latin'];
  const artists = ['Olivia Rodrigo', 'Billie Eilish', 'Harry Styles', 'Lady Gaga', 'Eminem', 'Tyler, the Creator', 'Bjork', 'ABBA', 'Conan Gray', 'Louis Tomlinson', 'QUEEN', 'Taylor Swift'];

  const handleBack = () => {
    if (step === 'genres') {
      router.push('/signup');
    } else {
      setStep('genres');
    }
  };

  const handleNext = () => {
    if (step === 'genres') {
      setStep('artists');
    } else {
      router.push('/home'); // or wherever your home page is
    }
  };

  return (
    <div className="preferences-container">
      <h1 className="title">Lunaye</h1>
      <h2 className="heading">Set Your Preferences</h2>
      <p className="subtitle">Tell us what you like, we’ll create a personalized experience for you</p>

      <div className="tabs">
        <button
          className={`tab ${step === 'genres' ? 'active' : ''}`}
          onClick={() => setStep('genres')}
        >
          Genres
        </button>
        <button
          className={`tab ${step === 'artists' ? 'active' : ''}`}
          onClick={() => setStep('artists')}
        >
          Artists
        </button>
      </div>

      <div className="cards-container">
        {(step === 'genres' ? genres : artists).map((item, index) => (
          <div className="card" key={index}>
            <img src="/intro/music.png" alt={item} className="card-image" />
            <span className="card-title">{item}</span>
          </div>
        ))}
      </div>

      <div className="navigation-buttons">
        <button className="back-button" onClick={handleBack}>
          Back
        </button>
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
