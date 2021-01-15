import React, { useEffect } from 'react';




function HelpScreen(props) {


  useEffect(() => {
    
    return () => {
      //
    };
  }, []);
  
  const getReport = async function() {
    const dbUrl ="mongodb://localhost/lapiece";
    const res= await fetch(dbUrl);
    const json = await res.json();

    const data = json.map(row => ({
      name: row.age,
      price: row.email,
      brand: row.brand,
      category: row.category,
      description: row.description,
      price: row.price,
    }));
    const button = document.getElementById("myButton");
    button.addEventListener('click,getReport');
    console.log(data);
//const csvData= objectToCsv(json);

  



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
  
        <section className="banner-area relative" id="home">
          <div className="overlay overlay-bg" />
          <div className="container">
            <div className="row fullscreen d-flex align-items-center justify-content-center">
              <div className="banner-content col-lg-12 col-md-12">
                <h1>
                  Pièce non trouvée ?
                </h1>
              </div>
            </div>
          </div>
        </section>
      <br/><br/>
      <button id="myButton">Download</button>
  

 </>

  );
}
export default HelpScreen;