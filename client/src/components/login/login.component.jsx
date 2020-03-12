import React from 'react';

import './login.styles.scss';

const Login = () => (
  // <span className={style.login} onMouseOver={() => props.handleMouseOver('accountHover')} onMouseLeave={() => props.handleMouseOut('accountHover')}>
  //   Sign In

  //   <svg height="7" width="12" transform="translate(5,0)">
  //     <path className={style.arrowDown} d="M6.002 6L1 1m5.002 5L11 1.002"></path>
  //   </svg>
  // </span>
  <div className='login'>
    <span>
      Sign In
    </span>

    <svg className='arrow-down' height="7" width="12" transform="translate(5,0)">
      <path d="M6.002 6L1 1m5.002 5L11 1.002"></path>
    </svg>
  </div>
)

export default Login;