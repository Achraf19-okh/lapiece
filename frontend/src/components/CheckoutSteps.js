import React from 'react';
function CheckoutSteps(props) {
  return <div className="checkout-steps">
    <div className={props.step1 ? 'active' : ''} >S'inscrire</div>
    <div className={props.step2 ? 'active' : ''} >Shipping</div>
    <div className={props.step3 ? 'active' : ''} >Paiment</div>
    <div className={props.step4 ? 'active' : ''} >Placer l'ordre</div>
  </div>
}

export default CheckoutSteps;