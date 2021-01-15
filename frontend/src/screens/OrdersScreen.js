import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listOrders, deleteOrder } from '../actions/orderActions';
import order from '../order.png';
import { Icon, InlineIcon } from '@iconify/react';
import detailsMore from '@iconify/icons-gg/details-more';
import deleteF from '@iconify/icons-jam/delete-f';

function OrdersScreen(props) {
  const orderList = useSelector(state => state.orderList);
  const { loading, orders, error } = orderList;

  const orderDelete = useSelector(state => state.orderDelete);
  const { loading: loadingDelete, success: successDelete, error: errorDelete } = orderDelete;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listOrders());
    return () => {
      //
    };
  }, [successDelete]);

  const deleteHandler = (order) => {
    dispatch(deleteOrder(order._id));
  }
  return loading ?  <div><center><button className="btn btn-primary" type="button" disabled>
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button></center></div> :
    <div className="content content-margined">

<br /><br /><br /><br />
<div className="order-header">
        <center><h3><img src={order} alt="Logo" className="scrollto"/>    Commandes des clients</h3></center>
      </div>
      <br/><div className="order-list">

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>UTILISATEUR</th>
              <th>PAYE</th>
              <th>PAYE A</th>
              <th>DELIVEREE</th>
              <th>DELIVEREE A</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (<tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.createdAt}</td>
              <td>{order.totalPrice}</td>
              <td>{order.user.name}</td>
              <td>{order.isPaid.toString()}</td>
              <td>{order.paidAt}</td>
              <td>{order.isDelivered.toString()}</td>
              <td>{order.deliveredAt}</td>
              <td>
                <Link to={"/order/" + order._id} className="button primary-edit" ><Icon icon={detailsMore} width="50" height="58" />Details</Link>
                {' '}
                <button type="button" onClick={() => deleteHandler(order)} className="button primary-supp"><Icon icon={deleteF} width="30" height="28"  />Supprimer</button>
              </td>
            </tr>))}
          </tbody>
        </table>

      </div>
    </div>
}
export default OrdersScreen;