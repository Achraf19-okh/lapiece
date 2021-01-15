import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';
import infos from '../infos.png';
import { Icon, InlineIcon } from '@iconify/react';
import arrowBarRight from '@iconify/icons-bi/arrow-bar-right';
import lockedIcon from '@iconify/icons-carbon/locked';

function SigninScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();
  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));

  }
  return (
    <>

        <div id="image" >
          
          </div>
          
          
       
{""}{""}{""}{""}{""}{""}
<br/><br/><br/><br/><br/><br/><br/>

<div className="form">
<div className="forminfo">
<center><img src={infos} alt="Logo" className="infos"/><br/><br/><br/></center>
<h1><Icon icon={arrowBarRight} color="red"/>       Plusieurs pièces détachées (Voitures/Engines/Manutention/Camions) </h1><br/>
<h1 ><Icon icon={arrowBarRight} color="red"/>  Livraison dans 3 jours au maximum   </h1><br/>
<h1 ><Icon icon={arrowBarRight} color="red"/>  Customs et shoipping inclus  </h1><br/>
<h1 ><Icon icon={arrowBarRight} color="red"/>   le source le plus fiable pour les pièces rares </h1><br/>
<h1><Icon icon={arrowBarRight} color="red"/>   Payer en espèce ou par carte bancaire   </h1><br/>

</div>
    <form onSubmit={submitHandler} >
      <ul className="form-container">
        <center><li>
          <h1><Icon icon={lockedIcon}  width="80" height="75"  />Connectez-vous</h1>
        </li></center>
        <li>
          {loading && <div><center><button className="btn btn-primary" type="button" disabled>
  <h1><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></h1>
  Loading...
</button></center></div>}
          {error && <div>{error}</div>}
        </li>
        <li>
          <label htmlFor="email" className="style">
            <h5>Email</h5>
          </label>
          <input type="email" name="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="password"><h5>Password</h5></label>
          <input type="password" id="password" name="password" placeholder="Mot de Passe"onChange={(e) => setPassword(e.target.value)}>
          </input>
        </li>
        <li>
          <button type="submit" className="button primary">Se Connecter</button>
        </li>
        <li>
        <Link to={redirect === "/" ? "signmobile" : "signmobile?redirect=" + redirect} className=" button primary-mobile" ><center>Se Connecter par mobile</center></Link>
         
        </li>
        <li>
       <center><h4>Première Visite ?</h4></center>
        </li>
        <li>
          <Link to={redirect === "/" ? "register" : "register?redirect=" + redirect} className="button primary1" ><center>Créer Votre compte gratuitement</center></Link>
        </li>
      </ul>
    </form>
  </div>
 

  
  </>
  );
}
export default SigninScreen;
