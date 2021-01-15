import React from 'react';
import  { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {signmobile} from '../actions/userActions';
import thunk from 'redux-thunk';
import infos from '../infos.png';
import { Icon, InlineIcon } from '@iconify/react';
import arrowBarRight from '@iconify/icons-bi/arrow-bar-right';
import mobilePhoneSolid from '@iconify/icons-clarity/mobile-phone-solid';


function SignMobileScreen(props) {

    const [city,setCity] = useState('');
    const [tel,setTel] = useState('');
    const [password,setPassword] = useState('');
    const userSignmobile = useSelector(state =>state.userSignmobile);
    const {loading, userInfo,error} = userSignmobile;
    const dispatch = useDispatch();

    useEffect(() =>{
       if(userInfo) {
           props.history.push("/");
       }
        return () =>  {
 
        };
    }, [userInfo]);

 const submitMobile = (e) => {
     e.preventDefault();
     dispatch(signmobile(city,tel,password));
 }


    return (
        <>

<div id="image" >
          
          </div>
          {""}{""}{""}{""}{""}{""}
<br/><br/><br/><br/><br/><br/><br/>
    ) <div className="form">
    <div className="forminfo">
<center><img src={infos} alt="Logo" className="infos"/><br/><br/><br/></center>
<h1><Icon icon={arrowBarRight} color="red"/>       Plusieurs pièces détachées (Voitures/Engines/Manutention/Camions) </h1><br/>
<h1 ><Icon icon={arrowBarRight} color="red"/>  Livraison dans 3 jours au maximum   </h1><br/>
<h1 ><Icon icon={arrowBarRight} color="red"/>  Customs et shoipping inclus  </h1><br/>
<h1 ><Icon icon={arrowBarRight} color="red"/>   le source le plus fiable pour les pièces rares </h1><br/>
<h1><Icon icon={arrowBarRight} color="red"/>   Payer en espèce ou par carte bancaire   </h1><br/>

</div>
           <form onSubmit={submitMobile}>
           <br/><br/><ul className="form-container">
                   <center><li>
                       <h2><Icon icon={mobilePhoneSolid} width="80" height="75" />S'authentifier-Mobile</h2>
                   </li></center>
                   <li>
                       {loading && <div><center><button className="btn btn-primary" type="button" disabled>
       <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
       Loading...
     </button></center></div> }
                       {error && <div>{error}</div>}
                   </li>
                   <li>
                       <label htmlFor="city">Ville</label>
                              <input type="city" name="city" id="city" className="form-control" placeholder="Votre ville" onChange={(e => setCity(e.target.value))} ></input>      
                   </li>
                   <li>
                       <label htmlFor="password">Mot de passe</label>
                              <input type="password" name="password" id="password" className="form-control" placeholder="Mot de passe" onChange={(e => setPassword(e.target.value))} ></input>      
                   </li>
                   <li>
                       <label htmlFor="tel">Téléphone</label>
                              <input type="tel" name="tel" id="tel" className="form-control" placeholder="Votre téléphone" onChange={(e => setTel(e.target.value))} ></input>      
                   </li>
                   <li>
                   <button type="submit" className="button primary full-width">Se connecter</button>
                   </li>
                   <li>
                   <Link to = "/signin"  type="submit" className=" button primary-mobile" ><center>Se Connecter par Mail</center></Link>
                   </li>
                   <li>
                       <h4>Première Visite ?</h4>
                   </li>
                   <Link to = "/register" className="button primary1"><center>Inscrivez-vous Maintenant !</center></Link>
               </ul>
           </form>
           
    </div>
    <br/><br/>
    </>
    );
}

export default SignMobileScreen ;  
