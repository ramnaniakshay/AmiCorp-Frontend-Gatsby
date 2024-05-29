import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import "../Assets/CSS/LoginForm.css";
import { navigate } from 'gatsby';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:1337/api/auth/local', {
        identifier: data.username,
        password: data.password,
      });
      console.log('Login successful:', response.data);
      localStorage.setItem('jwt', response.data.jwt);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error.response?.data?.message || error.message);
      alert('Login failed: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
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
          <label>Password:</label>
          <input
            type="password"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
