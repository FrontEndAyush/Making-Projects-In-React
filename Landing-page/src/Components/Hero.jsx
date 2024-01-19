

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div>
          <div className="slogan">
            <h1>YOUR FEET</h1>
            <h1>DESERVE</h1>
            <h1>THE BEST</h1>
          </div>
          <div className="about">
            <p>
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
          </div>
          <div className="hero-btn">
            <button>Shop Now</button>
          

            {window.outerWidth == "480px" ? (
            alert("okay")
            ) : (
              <button className="hero-sec-btn">Category</button>
            )}
          </div>
          <div>
            <p>Also Available On</p>
            <img src="/Images/shops.png" alt="" />
          </div>
        </div>
        <div className="for-hero-img">
          <img src="Images/shoe_image.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
