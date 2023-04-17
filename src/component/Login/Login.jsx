import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const [errors, setErrors] = useState('');
    const [success, setSuccess] = useState({});
    const { login } = useContext(AuthContext)
  
    
    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      login(email, password)
      .then(result => {
        const loggedIn = result.user;
        console.log(loggedIn)
        setSuccess('')
        form.reset();
        setErrors('')
      })
      .catch(error =>{
        console.log(error)
        setErrors(error.message)
      })
    };

   
    return (
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={titleStyle}>Login</h2>
        <div style={inputWrapperStyle}>
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input
            type="email"
            id="email"
            name='email'
            placeholder='email'
            style={inputStyle(errors.email)}
            required
          />
          {errors.email && <span style={errorStyle}>{errors.email}</span>}
        </div>
        <div style={inputWrapperStyle}>
          <label htmlFor="password" style={labelStyle}>Password</label>
          <input
            type="password"
            id="password"
            name='password'
            placeholder='password'
            style={inputStyle(errors.password)}
            required
          />
          {errors && <span>{errors}</span>}
          {/* {success && <span style={{color: 'green'}}>{success}</span>} */}
        </div>
        <button type="submit" style={buttonStyle}>Login</button>
        
        <p>New to here?<Link to='/singup'>Create account</Link></p>
      </form>
    );
};

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