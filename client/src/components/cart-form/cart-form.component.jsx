import React from 'react';

import './cart-form.styles.scss';

const CartForm = ({ cart }) => (
  <div styleName={`cart-form ${cart ? 'show' : ''}`}>
    <div styleName='box'>
      <div styleName='box-item' />
    </div>
    <span><u>Sign in</u> to see what you may have added before.</span>
  </div>
)

export default CartForm;