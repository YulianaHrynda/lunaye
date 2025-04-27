'use client';

import { useRouter } from 'next/navigation';
import './intro.css';

export default function IntroPage() {
  const router = useRouter();

  return (
    <div className="intro-page-wrapper">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/intro/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="landing-container">
        <h1>Lunaye</h1>
        <div>
          <button onClick={() => router.push('/signup')} className="button">
            Sign Up
          </button>
          <button onClick={() => router.push('/signin')} className="button">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
