import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function CartScreen(props) {

  const cart = useSelector(state => state.cart);

  const { cartItems } = cart;

  const productId = props.match.params.id;
  const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  }
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  }

  return <div className="cart">
    <div className="cart-list">
    <br /><br /><br /><br /><ul className="cart-list-container">
        <li>
          <h1>
            Panier
          </h1>
          <div>
            <h4>Prix</h4>
          </div>
        </li>
        <br/><br/> <br/><br/>
        {
          cartItems.length === 0 ?
            <div>
              <center><h2>Panier est vide</h2></center>
          </div>
            :
            cartItems.map(item =>
              <li>
                <div className="cart-image">
                  <img src={item.image} alt="product" />
                </div>
                <div className="cart-name">
                  <div>
                    <Link to={"/product/" + item.product}>
                      <h3><strong>{item.name}</strong></h3>
                    </Link>

                  </div>
                  <div className="test">
                    <h3>Qty:</h3>
                  <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                      {[...Array(item.countInStock).keys()].map(x =>
                        <option key={x + 1} className ="custom-select" value={x + 1}>{x + 1}</option>
                      )}
                    </select>{""}
                    <button type="button" className="button primary-supp" onClick={() => removeFromCartHandler(item.product)} >
                      Supprimer
                    </button>
                  </div>
                </div>
                <div className="cart-price">
                  {item.price} MAD
                </div>
              </li>
            )
        }
      </ul> 

    </div>
    <div className="cart-action">
    <br /> <br /> <br /> <br /> <br /><br /> <br /><br /> <br /> <br /> <br /> <br /> <br /><h2> 
    <strong>Total</strong> ( {cartItems.reduce((a, c) => a + c.qty, 0)} Articles) : <br /> <br /> <br /> 
        
          <div className="price"><center>{cartItems.reduce((a, c) => a + c.price * c.qty, 0)} MAD</center></div>
      </h2><br/><br/><br/><br/>
      <button onClick={checkoutHandler} className="button primary full-width" disabled={cartItems.length === 0}>
        Passer en caisse
      </button>

    </div>

  </div>
}

export default CartScreen;