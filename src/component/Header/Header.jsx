import React, { useContext } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
const Header = () => {

    const { user, logout } = useContext(AuthContext)
    // console.log(user.email)

    const logoutformpage =()=>{
        logout()
        .then(() => {
          // Sign-out successful.
          setSuccess('Sign-out successful')
        }).catch((error) => {
          setSuccess(error.message)
        });
      }
    return (
        <nav className='header'>
            <h2>Ema-Jhon</h2>
            <div>
                <Link to="/">shop</Link>
                <Link to="/orders">order review</Link>
                <Link to="/checkout">checkout</Link>
                <Link to="/inventory">inventory</Link>
                <Link to="/login">login</Link>
                <Link to="/singup">singup</Link>
                {user && <span style={{color: 'whitesmoke'}}>welcome {user.email}<button onClick={logoutformpage}>logOut</button></span>}
            </div>
        </nav>
    );
};

export default Header;