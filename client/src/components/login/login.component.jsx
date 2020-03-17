import React from 'react';

import './login.styles.scss';

const Login = () => (
  <div className='login'>
    <div className='login-item'>
      <span>
        Sign In
      </span>
    </div>

    <div className='login-item'>
      <svg className='arrow-down' height="7" width="12">
        <path d="M6.002 6L1 1m5.002 5L11 1.002"></path>
      </svg>
    </div>
  </div>
)

export default Login;