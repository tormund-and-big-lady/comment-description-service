import React from 'react';

import './login.styles.scss';

const Login = () => (
  <div styleName='login'>
    <div styleName='login-item'>
      <span>
        Sign In
      </span>
    </div>

    <div styleName='login-item'>
      <svg styleName='arrow-down' height="7" width="12">
        <path d="M6.002 6L1 1m5.002 5L11 1.002"></path>
      </svg>
    </div>
  </div>
)

export default Login;