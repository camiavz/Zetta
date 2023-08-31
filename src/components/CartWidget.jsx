import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import cartIcon from '../IMAGENES/surf-portada.png'; 

function CartWidget() {
  const cartIconStyle = {
    width: '130px', 
    height: '80px', 
    marginRight: '30px', 
  };

  const cartNumberStyle = {
    fontSize: '18px', 
    fontWeight: 'bold', 
    color: '#8B786D', 
    marginRight:'30px'
  };

  return (
    <div>
      <img src={cartIcon} alt="Carrito" style={cartIconStyle} />
      <FontAwesomeIcon icon={faShoppingCart}/>
      <span style={cartNumberStyle}>3</span> 
    </div>
  );
}

export default CartWidget;
