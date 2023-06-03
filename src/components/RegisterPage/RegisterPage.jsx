import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { registerUser } from 'redux/auth/slice';
import { selectLoading, selectError } from 'redux/auth/selectors';

function RegisterPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser({ email, password }));
  };

  const handleGoToLogin = () => {
    history.push('/login');
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit" disabled={isLoading}>Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default RegisterPage;
