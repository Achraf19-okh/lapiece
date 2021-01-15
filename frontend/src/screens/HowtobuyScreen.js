import React, { useState, useEffect } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import accountSupervisorCircle from '@iconify/icons-mdi/account-supervisor-circle';
import carKey from '@iconify/icons-mdi/car-key';
import gitCompare from '@iconify/icons-codicon/git-compare';
import selectO from '@iconify/icons-gg/select-o';
import confirmCircle from '@iconify/icons-line-md/confirm-circle';



function HowtobuyScreen(props) {


  useEffect(() => {
    
    return () => {
      //
    };
  }, []);

  const getReport = async function() {
    const dbUrl ="mongodb://localhost/lapiece";
    const res= await fetch(dbUrl);
    const json = await res.json();
    console.log(json);
    const data = json.map(row => ({

    }));
    
   // const csvData= objectToCsv(json);

  
    
  };



  return (
      <>
      <br/><br/>
       {/* Mobile Specific Meta */}
       <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* Favicon*/}
        <link rel="shortcut icon" href="img/fav.png" />
        {/* Author Meta */}
        <meta name="author" content="codepixer" />
        {/* Meta Description */}
        <meta name="description" content />
        {/* Meta Keyword */}
        <meta name="keywords" content />
        {/* meta character set */}
        <meta charSet="UTF-8" />
        {/* Site Title */}
        <title>Industry</title>
        <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet" />
        {/*
			CSS
			============================================= */}
        <link rel="stylesheet" href="css/linearicons.css" />
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        <link rel="stylesheet" href="css/bootstrap.css" />
        <link rel="stylesheet" href="css/magnific-popup.css" />
        <link rel="stylesheet" href="css/nice-select.css" />
        <link rel="stylesheet" href="css/hexagons.min.css" />
        <link rel="stylesheet" href="css/animate.min.css" />
        <link rel="stylesheet" href="css/owl.carousel.css" />
        <link rel="stylesheet" href="css/main.css" />
  <div>
        <section className="banner-area relative" id="home">
          <div className="overlay overlay-bg" />
          <div className="container">
            <div className="row fullscreen d-flex align-items-center justify-content-center">
              <div className="banner-content col-lg-12 col-md-12">
                <h1>
                  Comment acheter?
                </h1>
              </div>
            </div>
          </div>
        </section>
        {/* End banner Area */}
        {/* Start cat Area */}
        <section className="cat-area section-gap" id="feature">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="single-cat d-flex flex-column">
                <center><Icon icon={carKey} color="#30a5d0" width="130" height="140"  /></center>
                  <h1 className="mb-20" style={{marginTop: '23px'}}>Entrer la référence de la pièce après avoir indiqué le produit et la marque.</h1>
                  <h4><p>
                    Chaque pièce a un numéro de fabricant d'équipement d'origine ou OEM.<br />
                    Vous pouvez rechercher des pièces auprès de fournisseurs locaux.
                  </p></h4>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-cat">
                <center><Icon icon={accountSupervisorCircle} color="#30a5d0"  width="130" height="140" /></center>
                  <h1 className="mt-40 mb-20" style={{marginTop: '23px'}}>Créer votre compte sur la pièce.</h1>
                  <h4><p>
                    Vous devrez vous connecter ou vous inscrire sur lapiece avant de recevoir des offres.<br />
                    Après l’identification, vous pouvez facilement suivre toutes vos commandes et offres.<br />
                    Lapiece ne partage les données des clients avec aucune autre partie. Nous prenons la
                    confidentialité des données très au sérieux et allons au-delà des exigences légales minimales.
                  </p></h4>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-cat">
                <center><Icon icon={gitCompare} color="#30a5d0" width="130" height="140" /></center>
                  <h1 className="mt-40 mb-20" style={{marginTop: '23px'}}>Comparer les offres reçues.</h1>
                  <h4><p>
                    De nouvelles offres seront ajoutées au fur et à mesure que les fournisseurs au Maroc entier
                    répondront à votre demande.<br />
                    Vous pouvez filtrer les offres selon vos préférences afin de ne voir que des pièces d'origine
                    ou de rechange, ou des fournisseurs locaux ou étrangers.
                  </p></h4>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-cat d-flex flex-column">
                <center><Icon icon={selectO} color="#30a5d0"  width="130" height="140" /></center>
                  <h1 className="mb-20" style={{marginTop: '40px'}}>Sélectionner l'offre qui vous convient.</h1>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-cat d-flex flex-column">
                <center><Icon icon={confirmCircle} color="#30a5d0"  width="130" height="140" /></center>
                  <h1 className="mb-20" style={{marginTop: '40px' }}>Confirmer votre commande en choisissant la méthode de paiement.</h1>
                  <h4><p>
                    Vous pouvez payer en ligne via une transaction Visa ou MasterCard.<br />
                    Vous pouvez payer en espèce lorsque vous récupérez une pièce chez un distributeur Lapiece
                    agréé.
                  </p></h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
   
   <br/><br/>
  
  
 </>

  );
}
export default HowtobuyScreen;