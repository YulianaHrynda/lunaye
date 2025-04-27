'use client';

import './signup.css';
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
      router.push('/preferences'); // or wherever you want to go
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
    <div className="login-container">
      <h1 className="login-title">Lunaye</h1>
      <div className="login-card">
        <h2 className="login-heading">Create Account</h2>
        <p className="subtitle">Start your musical journey</p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
              placeholder="Joe Doe" 
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

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

          <div className="form-group">
            <label>Confirm password</label>
            <input 
              type="password" 
              placeholder="Confirm Password" 
              className="input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
          </div>

          <button 
            type="submit" 
            className="submit-button" 
            disabled={!isFormValid()}
            style={{ opacity: isFormValid() ? 1 : 0.5, cursor: isFormValid() ? 'pointer' : 'not-allowed' }}
          >
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
