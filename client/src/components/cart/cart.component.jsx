import React from 'react';

import './cart.styles.scss';

const Cart = () => (
  <div styleName='cart'>
    <svg styleName='bag' height="24" width="24">
      <path d="M23.5 9.5a1 1 0 0 0-1-1h-21a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h21a1 1 0 0 0 1-1v-13z"></path>
      <path styleName='bag-hook' d="M6 8a6 6 0 1 1 12 0"></path>
    </svg>

    <span styleName='bag-number'>
      0
    </span>
  </div>
)

export default Cart;