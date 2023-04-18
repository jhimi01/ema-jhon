import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const [user, setUser] = useState(null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  const from = location.state?.from?.pathname || '/';
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        setSuccess('Logged in successfully');
        setErrors({});
        form.reset();
        navigate(from, {replace : true});
      })
      .catch((error) => {
        console.log(error);
        setErrors({ message: error.message });
        setSuccess('');
      });
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={titleStyle}>Login</h2>
      <div style={inputWrapperStyle}>
        <label htmlFor="email" style={labelStyle}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          style={inputStyle(errors.email)}
          required
        />
        {errors.email && <Error message={errors.email} />}
      </div>
      <div style={inputWrapperStyle}>
        <label htmlFor="password" style={labelStyle}>
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          style={inputStyle(errors.password)}
          required
        />
        {errors.message && <Error message={errors.message} />}
        {success && <Success message={success} />}
      </div>
      <button type="submit" style={buttonStyle}>
        Login
      </button>
      {user && (
        <div style={{ marginTop: '16px' }}>
          Logged in as <strong>{user.email}</strong>
        </div>
      )}
      <p>
        New to here? <Link to="/signup">Create account</Link>
      </p>
    </form>
  );
};

const Error = ({ message }) => (
  <span style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>
    {message}
  </span>
);

const Success = ({ message }) => (
  <span style={{ color: 'green', fontSize: '14px', marginTop: '4px' }}>
    {message}
  </span>
);

export default Login;

const formStyle = {
  maxWidth: '400px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const titleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '32px',
  textAlign: 'center',
};

const inputWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '16px',
  width: '100%',
};

const labelStyle = {
  marginBottom: '8px',
  fontWeight: 'bold',
  fontSize: '16px',
};

const inputStyle = (hasError) => ({
  padding: '8px',
  borderRadius: '4px',
  backgroundColor: '#333',
  fontSize: '16px',
  width: '100%',
});
  const buttonStyle = {
    backgroundColor: '#ffbe76',
    color: 'black',
    padding: '8px 16px',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    marginTop: '16px',
    width: '100%',
  };
  
  buttonStyle[':hover'] = {
    backgroundColor: 'darkblue',
  };