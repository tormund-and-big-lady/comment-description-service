import React from 'react';

import './login-form.styles.scss';

const LoginForm = ({ login }) => (
  <div styleName={`account-info ${login ? 'show' : ''}`}>
    <div styleName='box'>
      <div styleName='box-arrow'/>
    </div>
    <button styleName='login-btn'>Sign In</button>
    <ul styleName='links'>
      <li><span>Your Account</span></li>
      <li><span>Wish List</span></li>
      <li><span>Set Your Store</span></li>
    </ul>
  </div>
)

export default LoginForm;