'use client';

import { useRouter } from 'next/navigation';
import './intro.css';

export default function IntroPage() {
  const router = useRouter();

  return (
    <div className="landing-container">
      <h1>Lunaye</h1>
      <div>
        <button onClick={() => router.push('/login')} className="button">
          Log In
        </button>
        <button onClick={() => router.push('/signup')} className="button">
          Sign Up
        </button>
      </div>
    </div>
  );
}
