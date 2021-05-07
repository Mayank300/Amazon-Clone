import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/GW/1x_SMP_D_Cricket._CB670251750_.jpg"
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Dough Hook, Wire Whip & Beater (6.5QT, Blue)"
            price={139.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61aT8jl8THL._AC_SX679_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Deco Gear DGVM29PB 29-Inch 2560x1080 100Hz VA Curved Gaming Monitor, 4ms Response Time, 3000:1 Contrast Ratio, sRGB, NTSC 85, DCI-P3, and Adobe RGB Color Accurate"
            price={299.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71U9XvjDpuL._AC_SX679_.jpg"
            rating={5}
          />
          <Product
            id="23445930"
            title="All-new Echo Show 10 (3rd Gen) | HD smart display with motion and Alexa | Charcoal"
            price={129.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51EVETDOOeL._AC_SX569_.jpg"
            rating={5}
          />
          <Product
            id="23445930"
            title="2020 Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)"
            price={999}
            image="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SX466_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model"
            price={1199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SX679_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
