import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Rating from '../components/Rating';
import { Icon, InlineIcon } from '@iconify/react';
import numberOutlined from '@iconify/icons-ant-design/number-outlined';
import logoutCircleLine from '@iconify/icons-ri/logout-circle-line';

function HomeScreen(props) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category));

    return () => {
      //
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push("/");
    dispatch(listProducts(category, searchKeyword,searchCategory, sortOrder));
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, searchCategory, sortOrder));
  };


  return (
    <>
    {category && <h2>{category}</h2>}
     <section id="intro" className="clearfix">
        <div className="container">
          <div className="intro-img">
            <img src="intro-img.svg" alt="" className="img-fluid" />
          </div><br/><br/><br/><br/>
          <div className="intro-info">
            <center><h2>Votre Meilleur<br />Marché<br /><span> DES PIÈCES DETACHÉES ! </span></h2></center>
            <div>
              <center>
                <i className="fa fa-user icon" />
               

      <ul className="filter">
        <li>
          <form onSubmit={submitHandler}>

            
         
          <input 
             placeholder="Référence de pièce"
              className="btn-services scrollto"
              name="searchKeyword"
              onChange={(e) => setSearchKeyword(e.target.value)}
              
           /> 
           
           <select name="searchCategory" className="btn-servicess scrollto" onChange={(e) => setSearchCategory(e.target.value)}>
           
               <option >Voitures</option>
               <option >Engins de TP</option>
               <option >Manutention</option>
               <option >Camions</option>
             </select> 
           
         <button type="sumbit" className="btn-get-started scrollto">Accéder Aux offres</button>
            
            <select name="sortOrder"  className="btn-service scrollto" onChange={sortHandler}>
            Trier Par{' '}
               <option value="">Récent</option> 
               <option value="lowest">Moins cher</option>
               <option value="highest">Plus cher</option>
             </select> 
           
          
           
             <div className="intro-infoo">
            <h2>Trouver des offres si vous connaisez ou non votre code référence de la pièce</h2></div>
          </form>
          <Link to="/help"><center><button className="btn-get-started "><strong>Obtenir l'aide</strong></button></center></Link>
        </li> 
       
    
      </ul>
 
      
   </center>

   </div>
          </div>
        </div>
      </section><br/><br/><br/><br/>
      {loading ? (
       <div><center><button className="btn btn-primary" type="button" disabled>
       <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
       Loading...
     </button></center></div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ul className="products">
          {products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <Link to={'/product/' + product._id}>
                  <img
                    className="product-image"
                    src={product.image}
                    alt="product"
                  />
                </Link>
                <div className="product-name">
               
                  <Link to={'/product/' + product._id}>{product.name}</Link>
                </div>
                <div className="product-brand">{product.category}</div>
                <div className="product-price">{product.price} MAD </div>
                <div className="product-rating">
                  <Rating
                    value={product.rating}
                    text={product.numReviews + ' reviews'}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default HomeScreen;