import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Rating from '../components/Rating';
import { Icon, InlineIcon } from '@iconify/react';
import numberOutlined from '@iconify/icons-ant-design/number-outlined';
import logoutCircleLine from '@iconify/icons-ri/logout-circle-line';

function AteliersScreen(props) {
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
  <br/>
  <section className="banner-area relative" id="home">
          <div className="overlay overlay-bg" />
          <div className="container">
            <div className="row fullscreen d-flex align-items-center justify-content-center">
              <div className="banner-content col-lg-12 col-md-12">
                <h1>
                  Nos Ateliers 
                </h1>
              </div>
            </div>
          </div>
        </section><br/><br/>
  <center> <div className="nos"><strong>Trouver un Atelier LAPIECE</strong></div></center><br/>
  <center><div className="nos2">Trouver les ateliers les plus proches et obtenir vos pièces détachées facilement</div></center><br/><br/><br/>
  <center><div class="s003">
      <form>
        <div class="inner-form">
          <div class="input-field first-wrap"   >
          <input id="search" type="text" placeholder="Trouver une ville" />
          </div>
          <div class="input-field second-wrap">
            <input id="search" type="text" placeholder="Trouver un atelier autorisé lAPIECE" />
          </div>
          <div class="input-field third-wrap">
            <button class="btn-search" type="button">
              <svg class="svg-inline--fa fa-search fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
    </center><br/><br/><br/>
    <script src="js/extention/choices.js"></script>
   
 
  <center><iframe className="exemple" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26581.922038417957!2d-7.510346261747601!3d33.61204331657265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cb0124a1b09b%3A0x4e26877f8b61f636!2sSidi%20Bernoussi%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1600970578738!5m2!1sfr!2sma" width={1900} height={900} frameBorder={2} id="example" style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} /></center>
    </>
  );
}
export default AteliersScreen;