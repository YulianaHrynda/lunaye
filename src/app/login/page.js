'use client';

import './login.css';
import { useRouter } from 'next/navigation';

export default function Page() { // <-- 🔥 FIX: name it Page!
  const router = useRouter();

  return (
    <div className="login-container">
      <h1 className="login-title">Lunaye</h1>
      <div className="login-card">
        <h2 className="login-heading">Welcome Back</h2>
        <p className="subtitle">Sign in to continue your musical journey</p>

        <form className="form">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="name@example.com" className="input" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Password" className="input" />
          </div>

          <div className="options">
            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>
          </div>

          <div className="form-group">
            <button type="submit" className="submit-button">
              Log In
            </button>
          </div>
        </form>

        <p className="bottom-text">
          Don't have an account?{' '}
          <span className="link" onClick={() => router.push('/signup')}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
