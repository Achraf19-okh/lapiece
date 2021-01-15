import React, { useState, useEffect } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import carIcon from '@iconify/icons-fa-solid/car';
import truckIcon from '@iconify/icons-whh/truck';
import godotengineIcon from '@iconify/icons-simple-icons/godotengine';
import voitures from '../voitures.png';
function MarkScreen(props) {


  


  return (
    <>

  <br/>
  <section className="banner-area relative" id="home">
          <div className="overlay overlay-bg" />
          <div className="container">
            <div className="row fullscreen d-flex align-items-center justify-content-center">
              <div className="banner-content col-lg-12 col-md-12">
                <h1>
                  Marques
                </h1>
              </div>
            </div>
          </div>
        </section><br/>
        <center><Icon icon={carIcon}  color="#30a5d0" width="130" height="150" /></center>
     <div className="voiture">
       
     
     <center><img src={voitures} alt="Logo" className="scrollto"/></center>
     </div>
      
  <br/><br/>
   <center><Icon icon={truckIcon}  color="#30a5d0" width="130" height="140" /></center>
   <div className="voiture">
     <center><img src={voitures} alt="Logo" className="scrollto"/></center>
     </div>
      
   <center><Icon  icon={godotengineIcon}  color="#30a5d0" width="150" height="170" /></center>
   <div className="form-container5" >
     <div id="voitures">
       ffffffffffffffffffff
        </div>
      
   </div><br/><br/>
 
  
    <script src="js/extention/choices.js"></script>
   
 
    </>
  );
}
export default MarkScreen;