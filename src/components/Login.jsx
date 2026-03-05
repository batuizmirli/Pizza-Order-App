import React, { useState, useEffect } from 'react';

const initialForm = {
  email: '',
  password: '',
  terms: false,
};

const errorMessages = {
  email: 'Please enter a valid email address',
  password: 'Password must contain at least 8 chars, one uppercase, one lowercase, one number and one special character',
};

export default function Login({ onSuccess }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({ email: false, password: false });
  const [isValid, setIsValid] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  useEffect(() => {
    const isEmailValid = emailRegex.test(form.email);
    const isPasswordValid = passwordRegex.test(form.password);
    const isTermsAccepted = form.terms;

    setErrors({
      email: form.email !== '' && !isEmailValid,
      password: form.password !== '' && !isPasswordValid,
    });

    setIsValid(isEmailValid && isPasswordValid && isTermsAccepted);
  }, [form]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) return;
    onSuccess();
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email</label><br />
          <input id="email" name="email" type="email" placeholder="Enter your email" value={form.email} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
          {errors.email && <p data-cy="error" style={{ color: 'red', fontSize: '14px' }}>{errorMessages.email}</p>}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password">Password</label><br />
          <input id="password" name="password" type="password" placeholder="Enter your password" value={form.password} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
          {errors.password && <p data-cy="error" style={{ color: 'red', fontSize: '14px' }}>{errorMessages.password}</p>}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input id="terms" name="terms" type="checkbox" checked={form.terms} onChange={handleChange} />
          <label htmlFor="terms"> I agree to terms of service and privacy policy</label>
        </div>
        <button type="submit" disabled={!isValid} data-cy="submit-btn" style={{ padding: '10px 20px', cursor: isValid ? 'pointer' : 'not-allowed' }}>Sign In</button>
      </form>
    </div>
  );
}
