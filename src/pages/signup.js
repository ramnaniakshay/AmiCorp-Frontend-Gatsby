import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { navigate } from 'gatsby';
import "../Assets/CSS/LoginForm.css"; // Assuming you'll reuse the same CSS for styling

const SignupForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:1337/api/auth/local/register', {
        username: data.username,
        email: data.email,
        password: data.password,
      });
      console.log('Signup successful:', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Signup failed:', error.response?.data?.message || error.message);
      alert('Signup failed: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            {...register('username', { required: 'Username is required' })}
          />
          {errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
