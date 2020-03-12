import React from 'react';

import './login-form.styles.scss';

const LoginForm = props => (
  <div className='account-info'>
    <div className='box'>
      <div className='box-arrow'/>
    </div>
    <button className='login-btn'>Sign In</button>
    <ul className='links'>
      <li><span>Your Account</span></li>
      <li><span>Wish List</span></li>
      <li><span>Set Your Store</span></li>
    </ul>
  </div>
)

export default LoginForm;