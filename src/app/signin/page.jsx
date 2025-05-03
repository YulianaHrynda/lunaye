'use client';

import styles from './styles/signin.module.css';
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
      router.push('/preferences');
    } else {
      setErrors(validationErrors);
    }
  };

  const isFormValid = () => {
    return email.includes('@') && password.trim();
  };

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.loginTitle}>Lunaye</h1>
      <div className={styles.loginCard}>
        <h2 className={styles.loginHeading}>Welcome Back</h2>
        <p className={styles.subtitle}>Sign in to continue your musical journey</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input 
              type="email" 
              placeholder="name@example.com" 
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>

          <div className={styles.formGroup}>
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Password" 
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className={styles.error}>{errors.password}</p>}
          </div>

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={!isFormValid()}
            style={{ opacity: isFormValid() ? 1 : 0.5, cursor: isFormValid() ? 'pointer' : 'not-allowed' }}
          >
            Sign In
          </button>
        </form>

        <p className={styles.bottomText}>
          Don't have an account?{' '}
          <span className={styles.link} onClick={() => router.push('/signup')}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
