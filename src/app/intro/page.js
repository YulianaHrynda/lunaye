'use client';

import { useRouter } from 'next/navigation';
import './intro.css';

export default function IntroPage() {
  const router = useRouter();

  return (
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
  );
}
