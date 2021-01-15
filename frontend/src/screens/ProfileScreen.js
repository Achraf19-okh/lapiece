import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logout, update } from '../actions/userActions';
import { listMyOrders } from '../actions/orderActions';
import { useDispatch, useSelector } from 'react-redux';
import { Icon, InlineIcon } from '@iconify/react';
import logoutCircleLine from '@iconify/icons-ri/logout-circle-line';
import bxUser from '@iconify/icons-bx/bx-user';



function ProfileScreen(props) {
  const [name, setName] = useState('');
  const [famname, setFamname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const handleLogout = () => {
    dispatch(logout());
    props.history.push("/signin");
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(update({ userId: userInfo._id, email, name, famname,password }))
  }
  const userUpdate = useSelector(state => state.userUpdate);
  const { loading, success, error } = userUpdate;

  const myOrderList = useSelector(state => state.myOrderList);
  const { loading: loadingOrders, orders, error: errorOrders } = myOrderList;
  useEffect(() => {
    if (userInfo) {
      console.log(userInfo.name)
      setEmail(userInfo.email);
      setName(userInfo.name);
      setFamname(userInfo.famname);
      setPassword(userInfo.password);
    }
    dispatch(listMyOrders());
    return () => {

    };
  }, [userInfo])

  return <div className="profile">
    <div className="profile-info">
    <div className="form-profile">
    <form onSubmit={submitHandler} >
    <br /><br /><br /><br /><br /><br /><br /><br /><ul className="form-container">
            <li>
              <center><h1><Icon icon={bxUser}  height="60px" width="70px" />Profile de {userInfo.name}</h1></center>
            </li>
            <li>
              {loading &&  <div class="text-center">
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>}
              {error && <div>{error}</div>}
              {success && <div>Profile est bien enregistrée.</div>}
            </li>
            <li>
              <label htmlFor="name">
                Nom
          </label>
              <input value={name} type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
              </input>
            </li>
            <li>
          <label htmlFor="famname">
            Prénom
          </label>
          <input value={famname} type="famname" name="famname" id="famname" onChange={(e) => setFamname(e.target.value)}>
          </input>
        </li>
            <li>
              <label htmlFor="email">
               <h4>Email</h4>
          </label>
              <input value={email} type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input value={password} type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
              </input>
            </li>

            <li>
              <button type="submit" className="button primary">Modifier</button>
            </li>
            <li>
              <button type="button" onClick={handleLogout} className="button primary-prf"><Icon icon={logoutCircleLine} height="30px" width="35px" />  Se déconnecter</button>
            </li>

          </ul>
        </form>
      </div>
    </div><br/><br/>
    <div className="profile-orders content-margined">
      {
        loadingOrders ?  <div><center><button className="btn btn-primary" type="button" disabled>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading...
      </button></center></div>:
          errorOrders ? <div>{errorOrders} </div> :
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th>PAYE</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt}</td>
                  <td>{order.totalPrice}</td>
                  <td>{order.isPaid}</td>
                  <td>
                    <Link to={"/order/" + order._id}>DETAILS</Link>
                  </td>
                </tr>)}
              </tbody>
            </table>
      }
    </div>
  </div>
}

export default ProfileScreen;