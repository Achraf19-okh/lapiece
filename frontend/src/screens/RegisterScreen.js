import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';
import infos from '../infos.png';
import { Icon, InlineIcon } from '@iconify/react';
import arrowBarRight from '@iconify/icons-bi/arrow-bar-right';
import usergroupAddOutlined from '@iconify/icons-ant-design/usergroup-add-outlined';
function RegisterScreen(props) {

  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [famname, setFamname] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [tel, setTel] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
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
    dispatch(register(type,name,famname,email,city,tel,password));
  }
  
  return (

    <>
    <div id="image" >
          
          </div>
          
          
    
{""}{""}{""}{""}{""}{""}
<br/>
<div className="form2">
<div className="formregister">
<div className="infos"><img src={infos} alt="Logo" className="infos1"/><br/><br/><br/><br/></div>
<h1><Icon icon={arrowBarRight} color="red"/>       Plusieurs pièces détachées (Voitures/Engines/Manutention/Camions) </h1><br/><br/>
<h1 ><Icon icon={arrowBarRight} color="red"/>  Livraison dans 3 jours au maximum   </h1><br/><br/>
<h1 ><Icon icon={arrowBarRight} color="red"/>  Customs et shoipping inclus  </h1><br/><br/>
<h1 ><Icon icon={arrowBarRight} color="red"/>   le source le plus fiable pour les pièces rares </h1><br/><br/>
<h1><Icon icon={arrowBarRight} color="red"/>   Payer en espèce ou par carte bancaire   </h1><br/><br/>
</div>
    <form onSubmit={submitHandler} >
    <br /><br /><ul className="form-container1">
        <center><li>
          <h1><strong><Icon icon={usergroupAddOutlined} width="80" height="75"  /></strong>Créer un compte</h1>
        </li></center>
        <li>
          {loading &&  <div><center><button className="btn btn-primary" type="button" disabled>
       <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
       Loading...
     </button></center></div>}
          {error && <div>{error}</div>}
        </li>
        <li>
          <label htmlFor="type" className="style">
            <h5>Type</h5>
          </label>
          <select type="type" name="sortOrder" id="type"  className="button primary-register" onChange={(e) => setType(e.target.value)}>
          <option value="particulier">Particulier</option>
               <option value="societé">Société</option>
          </select>

        </li>
        <li>
          <label htmlFor="name">
          <h5>Nom</h5>
          </label>
          <input type="name" name="name" id="name" className="button primary-input" onChange={(e) => setName(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="famname">
          <h5>Prénom</h5>
          </label>
          <input type="famname" name="famname" id="famname"  className="button primary-input" onChange={(e) => setFamname(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="email">
          <h5>Email</h5>
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
          </input>
        </li>
        <h4>Un e-mail sera envoyé à votre nouvelle adresse e-mail, vérifiez-la en cliquant sur le lien de vérification inclus</h4>
        <li>
        <li>
          <label htmlFor="city">
          <h5>Ville</h5>
          </label>
          <input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="tel">
          <h5>Téléphone</h5>
          </label>
          <input type="text" name="tel" id="tel" onChange={(e) => setTel(e.target.value)}>
          </input>
        </li>
          <label htmlFor="password"><h5>Mot de passe</h5></label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="rePassword"><h5>Rentrer le mot de passe</h5></label>
          <input type="password" id="rePassword" name="rePassword" onChange={(e) => setRePassword(e.target.value)}>
          </input>
        </li>
        <li>
          <center><button type="submit" className="button primary">S'inscrire</button></center>
        </li>
        <li>
          <h5>Déja Un membre?</h5><br />
          <center><Link to={redirect === "/" ? "signin" : "signin?redirect=" + redirect} className="button primary-sn" >Connectez-vous</Link></center>

        </li><br/>
      <h4>En cliquant sur le bouton s'inscrire, vous acceptez nos <a href="#">Conditions d'utilisation</a> Et que vous avez lu notre <a href="#">Politique de confidentialité.</a></h4>
      </ul>
    </form>
  </div>
  
  </>
  );
}

export default RegisterScreen;