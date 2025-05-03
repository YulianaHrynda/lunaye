'use client';

import styles from './styles/signup.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const router = useRouter();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.includes('@')) newErrors.email = 'Valid email is required';
    if (!password.trim()) newErrors.password = 'Password is required';
    if (!confirmPassword.trim()) newErrors.confirmPassword = 'Please confirm your password';
    if (password && confirmPassword && password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
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
    return (
      name.trim() &&
      email.includes('@') &&
      password.trim() &&
      confirmPassword.trim() &&
      password === confirmPassword
    );
  };

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.loginTitle}>Lunaye</h1>
      <div className={styles.loginCard}>
        <h2 className={styles.loginHeading}>Create Account</h2>
        <p className={styles.subtitle}>Start your musical journey</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input 
              type="text" 
              placeholder="Joe Doe" 
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
          </div>

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

          <div className={styles.formGroup}>
            <label>Confirm password</label>
            <input 
              type="password" 
              placeholder="Confirm Password" 
              className={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword}</p>}
          </div>

          <button 
            type="submit" 
            className={styles.submitButton} 
            disabled={!isFormValid()}
            style={{ opacity: isFormValid() ? 1 : 0.5, cursor: isFormValid() ? 'pointer' : 'not-allowed' }}
          >
            Create Account
          </button>
        </form>

        <p className={styles.bottomText}>
          Already have an account?{' '}
          <span className={styles.link} onClick={() => router.push('/signin')}>
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
