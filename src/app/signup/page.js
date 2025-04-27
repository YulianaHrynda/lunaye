'use client';

import './signup.css';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const router = useRouter();

  return (
    <div className="login-container">
      <h1 className="login-title">Lunaye</h1>
      <div className="login-card">
        <h2 className="login-heading">Create Account</h2>
        <p className="subtitle">Start your musical journey</p>

        <form className="form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Joe Doe" className="input" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="name@example.com" className="input" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Password" className="input" />
          </div>

          <div className="form-group">
            <label>Confirm password</label>
            <input type="password" placeholder="Confirm Password" className="input" />
          </div>

          <button type="submit" className="submit-button">
            Create Account
          </button>
        </form>

        <p className="bottom-text">
          Already have an account?{' '}
          <span className="link" onClick={() => router.push('/signin')}>
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
