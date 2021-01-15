import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder, detailsOrder, payOrder } from '../actions/orderActions';
import PaypalButton from '../components/PaypalButton';

function OrderScreen(props) {

  const orderPay = useSelector(state => state.orderPay);
  const { loading: loadingPay, success: successPay, error: errorPay } = orderPay;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successPay) {
      props.history.push("/profile");
    } else {
      dispatch(detailsOrder(props.match.params.id));
    }
    return () => {
    };
  }, [successPay]);

  const handleSuccessPayment = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  }

  const orderDetails = useSelector(state => state.orderDetails);
  const { loading, order, error } = orderDetails;

  return loading ?  <div><center><button className="btn btn-primary" type="button" disabled>
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button></center></div> : error ? <div>{error}</div> :

    <div>
      <br /><br /><br /><br /><br /><div className="placeorder">
      <div className="placeorder-info">
          <div>
            <h3>
              Shipping
          </h3>
            <div>
              {order.shipping.address}, {order.shipping.city},
          {order.shipping.postalCode}, {order.shipping.country},
          </div>
            <div>
              {order.isDelivered ? "Livré à " + order.deliveredAt : "Non livrées."}
            </div>
          </div>
          <div>
            <h3>Paiement</h3>
            <div>
              Méthode de Paiement: {order.payment.paymentMethod}
            </div>
            <div>
              {order.isPaid ? "Payé à " + order.paidAt : "Non payé."}
            </div>
          </div>
          <div>
            <ul className="cart-list-container">
              <li>
                <h3>
                  Panier
          </h3>
                <div>
                  Prix
          </div>
              </li>
              {
                order.orderItems.length === 0 ?
                  <div>
                    Panier est vide
          </div>
                  :
                  order.orderItems.map(item =>
                    <li key={item._id}>
                      <div className="cart-image">
                        <img src={item.image} alt="product" />
                      </div>
                      <div className="cart-name">
                        <div>
                          <Link to={"/product/" + item.product}>
                            {item.name}
                          </Link>

                        </div>
                        <div>
                          Quantité: {item.qty}
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


        </div>
        <div className="placeorder-action">
          <ul>
            <li className="placeorder-actions-payment">
              {loadingPay && <div> <div><center><button className="btn btn-primary" type="button" disabled>
         <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
         Paiement en cours...
       </button></center></div></div>}
              {!order.isPaid &&
                <PaypalButton
                  amount={order.totalPrice}
                  onSuccess={handleSuccessPayment} />
              }
            </li>
            <li>
              <h3>Résumé de la commande</h3>
            </li>
            <li>
              <div>Articles</div>
              <div>{order.itemsPrice} MAD</div>
            </li>
            <li>
              <div>Shipping</div>
              <div>{order.shippingPrice} MAD</div>
            </li>
            <li>
              <div>Impôt</div>
              <div>{order.taxPrice} MAD </div>
            </li>
            <li>
              <div>Total de la commande</div>
              <div>{order.totalPrice} MAD</div>
            </li>
          </ul>



        </div>

      </div>
    </div>

}

export default OrderScreen;