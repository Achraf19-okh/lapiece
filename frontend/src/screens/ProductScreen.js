import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct, saveProductReview } from '../actions/productActions';
import Rating from '../components/Rating';
import { PRODUCT_REVIEW_SAVE_RESET } from '../constants/productConstants';
import back from '../back.png';
import { Icon, InlineIcon } from '@iconify/react';
import arrowLeft from '@iconify/icons-bi/arrow-left';
function ProductScreen(props) {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const productReviewSave = useSelector((state) => state.productReviewSave);
  const { success: productSaveSuccess } = productReviewSave;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productSaveSuccess) {
      alert('Review submitted successfully.');
      setRating(0);
      setComment('');
      dispatch({ type: PRODUCT_REVIEW_SAVE_RESET });
    }
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, [productSaveSuccess]);
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch actions
    dispatch(
      saveProductReview(props.match.params.id, {
        name: userInfo.name,
        rating: rating,
        comment: comment,
      })
    );
  };
  const handleAddToCart = () => {
    props.history.push('/cart/' + props.match.params.id + '?qty=' + qty);
  };

  return (
    <div>
      <br /><br /><br /><br /><br /><div className="back-to-result">
        <Link to="/" className=" button primary-mobile" ><strong><Icon icon={arrowLeft} width="50" height="45" /></strong> Revenir Aux Résultats</Link>
      </div>
      {loading ? (
         <div><center><button className="btn btn-primary" type="button" disabled>
         <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
         Loading...
       </button></center></div>
      ) : error ? (
        <div>{error} </div>
      ) : (
        <>
          <div className="details">
            <div className="details-image">
              <img src={product.image} alt="product"></img>
            </div>
            <div className="details-action">
              <center><h2>Disponibilité de <strong>{product.name} </strong></h2></center><br/><br/>
              <ul>
                <li><h4><strong>Prix Unitaire : </strong>{""} {""}{""}{""} {product.price} MAD</h4></li><br/><br/>
                <li><h4><strong>Description: </strong>{product.description}</h4></li><br/><br/>
                <li>
                 <h4><strong> Statut </strong></h4>
                  <strong><h5><center>{product.countInStock > 0 ? <div className="stock">En Stock</div> : <div className="outstock">Non valable</div>}</center></h5></strong>
                </li><br/><br/>
                <li>
                <h4><strong> Quantité en stock :</strong></h4>{' '}
                  <center><select
                   className="button primary-option" 
                    value={qty}
                    onChange={(e) => {
                      setQty(e.target.value);
                    }}
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option  key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select></center>
                </li><br/><br/>
                <li>
                  {product.countInStock > 0 && (
                    <button
                      onClick={handleAddToCart}
                      className="button primary-panier"
                    >
                      Ajouter Au panier
                    </button>
                    
                  )}
                </li>
                
              </ul>
            </div>
          </div>
          
        </>
      )}
    </div>
  );
}
export default ProductScreen;