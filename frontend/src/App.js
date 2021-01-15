import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import SigninScreen from './screens/SigninScreen';
import SignMobileScreen from './screens/SignMobileScreen';
import HowtobuyScreen from './screens/HowtobuyScreen';
import ResultsScreen from './screens/ResultsScreen';
import AteliersScreen from './screens/AteliersScreen';
import DistributeursScreen from './screens/DistributeursScreen';
import MarkScreen from './screens/MarkScreen';
import HelpScreen from './screens/HelpScreen';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './lapiece.png';






function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userSignmobile = useSelector((state) => state.userSignmobile);
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <BrowserRouter>
    
      <div className="grid-container">
      <div>
      <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            
          </div>
        
        <link rel="icon" href="lapiece.png" type="" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous" />
        <link rel="stylesheet" href="App.css" />
        {/* Favicons */}
        <link href="img/favicon.png" rel="icon" />
        <link href="img/apple-touch-icon.png" rel="apple-touch-icon" />
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700" rel="stylesheet" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        {/* Bootstrap CSS File */}
        <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        {/* Libraries CSS Files */}
        <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
        <link href="lib/animate/animate.min.css" rel="stylesheet" />
        <link href="lib/ionicons/css/ionicons.min.css" rel="stylesheet" />
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
        <link href="lib/nice-select/css/nice-select.min.css" rel="stylesheet" />
        <link href="lib/linearicons/css/linearicons.min.css" rel="stylesheet" />
        <link href="lib/hexagons/css/hexagons.min.css" rel="stylesheet" />
        <link href="lib/magnific-popup/css/magnific-popup.min.css" rel="stylesheet" />
        <link href="lib/jquerysctipttop/css/jquerysctipttop.min.css" rel="stylesheet" />
        {/* Main Stylesheet File */}
        <link href="App.js" rel="stylesheet" />
      </div>
        <header className="fixed-top" id="header">
          <div className="container">
          <div className="logo float-left">
          
            <Link to="/" className="scrollto"><img src={logo} alt="Logo" className="img-fluid"/></Link>
          </div>
          
          </div>
          <div className="main-nav float-right d-none d-lg-block">
          
         
            {userInfo ? (
             
              <li className="dropdown"><Link to="/profile">{userInfo.name}
              <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">Se déconnecter</Link>
                  </li>
                </ul>
              </Link></li>
              
            )
             : (
              
              <nav className="main-nav float-right d-none d-lg-block">
              <ul>
                <li><a href="howtobuy">Comment acheter</a></li>
                <li><a href="mark">Marques</a></li>
                <li><a href="ateliers">Nos Ateliers</a></li>
                <li className="drop-down"><a href="distributeurs">Nos Distributeurs</a>
                  <ul>
                    <li><a href="#">Devenir distributeur</a></li>
                  </ul>

                </li>
              
                <li><a href="register">S'inscrire</a></li>
                <li><a href="signin">S'identifier</a></li>
                
                
              </ul>
              </nav>
            )}
            {userInfo && userInfo.isAdmin && (
              
              <div className="dropdown">
                
             <a href="#">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/">Recommendations</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header><br />
      
        <main className="main">
          <div className="content">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/howtobuy" component={HowtobuyScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="results"  component={ResultsScreen} />
            <Route path="/mark"  component={MarkScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/ateliers" component={AteliersScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/distributeurs" component={DistributeursScreen} />
            <Route path="/help" component={HelpScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/signmobile" component={SignMobileScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main><br /><br /><br />
        <div>
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 footer-info">
                  <h3><img src={logo} alt="Logo" className="img-fluid"/>LAPIECE</h3>
                  <p>LaPièce offre le meilleur service dans le domaine automobile plus précisément les pièces détachées,si vous cherchez d'une pièce détachée et vous connaissez pas le référence de la pièce,sans souci LaPièce.ma vous donne la pièce dont vous cherchez par  soumettre la photo de la pièce ainsi que la plaque signalétique de la machine .</p>
                </div>
                <div className="col-lg-2 col-md-6 footer-links">
                  <h4 className="underline">Liens utiles</h4>
                  <ul>
                    <li><a href="#">Marques</a></li>
                    <li><a href="howtobuy">Comment acheter</a></li>
                    <li><a href="#">Distributeurs</a></li>
                    <li><a href="#">À propos de nous</a></li>
                    <li><a href="#">Devenir un distributeur</a></li>
                  </ul>
                </div>
                <div className="col-lg-2 col-md-6 footer-links">
                  <ul>
                    <li><a href="#">Devenir fournisseur</a></li>
                    <li><a href="howtobuy">FAQ</a></li>
                    <li><a href="#">Conditions d'utilisation</a></li>
                    <li><a href="#">Politique de confidentialité</a></li>
               
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-contact">
                  <h4>Pour devenir un atelier autorisé LaPièce , contacter : jamii.mahmoud@towardafrica.com</h4>
                  <p>
                  SARL Toward Africa <br />
                  GROUPE ATTAKKADDOUM GH2 N 17,  2eme étage SIDI BERNOUSSI  CASABLANCA.<br />
                    Maroc <br />
                    <strong>Téléphone:</strong>  06.61.62.67.41<br />
                    <strong>Email:</strong> info@towardafrica.com<br />
                  </p>
                  <p><strong>Suivez-nous :</strong></p>
                  <div className="social-links">
                    <a href="#" className="twitter"><i className="fa fa-twitter" /></a>
                    <a href="#" className="facebook"><i className="fa fa-facebook" /></a>
                    <a href="#" className="instagram"><i className="fa fa-instagram" /></a>
                    <a href="https://www.linkedin.com/company/toward-africa/" className="linkedin"><i className="fa fa-linkedin" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              © Copyright <strong>LAPIECE</strong>. Tous Droits Réservées.
            </div>
            <div className="credits">
              {/*
            All the links in the footer should remain intact.
            You can delete the links only if you purchased the pro version.
            Licensing information: https://bootstrapmade.com/license/
            Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=NewBiz
          */}
            </div>
          </div>
        </footer>{/* #footer */}
      </div>
      </div>
    </BrowserRouter>
   
  );
  
}

export default App;