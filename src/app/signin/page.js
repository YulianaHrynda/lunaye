'use client';

import './signin.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const newErrors = {};
    if (!email.includes('@')) newErrors.email = 'Valid email is required';
    if (!password.trim()) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length === 0) {
      router.push('/preferences'); // or wherever you want to go
    } else {
      setErrors(validationErrors);
    }
  };

  const isFormValid = () => {
    return email.includes('@') && password.trim();
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Lunaye</h1>
      <div className="login-card">
        <h2 className="login-heading">Welcome Back</h2>
        <p className="subtitle">Sign in to continue your musical journey</p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="name@example.com" 
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Password" 
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <button 
            type="submit" 
            className="submit-button" 
            disabled={!isFormValid()}
            style={{ opacity: isFormValid() ? 1 : 0.5, cursor: isFormValid() ? 'pointer' : 'not-allowed' }}
          >
            Sign In
          </button>
        </form>

        <p className="bottom-text">
          Don't have an account?{' '}
          <span className="link" onClick={() => router.push('/signup')}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
