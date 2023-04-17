import React, { useContext, useState } from 'react';
import './Singup.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const SingUp = () => {
  const [errors, setErrors] = useState('');
  const { createuser} = useContext(AuthContext)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmedPassword = form.confirmedPassword.value
    console.log(email, password, confirmedPassword);
    
    setErrors('')
    if(password !== confirmedPassword){
       setErrors('Your password did not match')
       return;
    }else if(password.length < 6){
        setErrors('Your password must be at least 6 characters')
    }
    
    else{
      setErrors('')
      form.reset()
    }

    createuser( email, password)
    .then(result =>{
      const logged  = result.user;
      console.log(logged)
    })
    .catch(error =>{
      console.log(error)
      setErrors(error.message)
    })
    // Form validation
   
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={titleStyle}>Sign up</h2>
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
       
          name='password'
          placeholder='password'
          style={inputStyle(errors.password)}
          required
        />
        <label htmlFor="password" style={labelStyle}>confirmed password</label>
        <input
          type="password"
         
          name='confirmedPassword'
          placeholder='confirmed password'
          style={inputStyle(errors.password)}
          required
        />
     {/* <p style={{ color: errors ? 'red' : 'green' }}>{errors}</p> */}
     {/* {errors ? <p style={{ color: 'green' }}>{errors}</p> : <p style={{ color: 'red' }}>{errors}</p>} */}
     {errors && <p style={{color: 'red'}}>{errors}</p>}


      </div>
      <button type="submit" style={buttonStyle}>Sign up</button>
     {/* {errors ? <p style={{ color: 'green' }}>{errors}</p> : <p style={{ color: 'red' }}>No errors!</p>} */}
     {/* {errors ? <p style={{ color: 'green' }}>{errors}</p> : <p style={{ color: 'red' }}>{errors}</p>} */}
    <p>Already have an account?<Link to='/login'>Login</Link></p>
    </form>
    );
};

export default SingUp;



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

const errorStyle = {
  color: 'red',
  fontSize: '14px',
  marginTop: '4px',
};

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
  backgroundColor: '#ff3',
};