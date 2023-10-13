import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProductCards from "./ProductCards";

const HomePage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showTrendingContent, setShowTrendingContent] = useState(false); // Add state
  const [bestsellerList, setBestsellerList] = useState([]);
  const regions = [
    "Kanto",
    "Kansai",
    "Tohoku",
    "Hokkaido",
    "Shikoku",
    "Chugoku",
    "Okinawa",
  ];

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("http://127.0.0.1:8000/test3", {
        region: "お土産", // You can define selectedRegion if needed

      })
      .then((response) => {
        // Handle the response and update the state with the product list
        console.log("Region selection successful:", response.data);
        setBestsellerList(response.data.item_data);
      })
      .catch((error) => {
        // Handle errors if any
        console.error("Error selecting region:", error);
      });
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleTrendingContent = () => {
    setShowTrendingContent(!showTrendingContent);
  };

  function handleDropdownItemClick(selectedRegion) {
    // Perform any necessary actions (e.g., sending data to Django)
    // ...
    console.log(selectedRegion);

    axios
      .post("http://127.0.0.1:8000/test3", {
        region: selectedRegion,
      })
      .then((response) => {
        // Handle the response if needed
        console.log("Region selection successful:", response.data);
        const productList = response.data;
        navigate(`/products`, { state: { productList } });
        console.log("navigated!");
      })
      .catch((error) => {
        // Handle errors if any
        console.error("Error selecting region:", error);
      });
    // Navigate to the "Products" page with the selected region
  }



  return (
    <div className="home-page">
      <div className="text-input-container-4">
        <div className="home-menu">Home</div>
        <div className="customerservice">Customer Service</div>
      </div>
      <div className="overlap">
        <div className="hero">
          <div className="text-input-9">
            <div className="button-2" onClick={toggleDropdown}>
              <input
                type="button"
                className="text-wrapper-3"
                value="Regions"
              />
              {showDropdown && (
                <div className="dropdown-menu">
                  {regions.map((region, index) => (
                    <button
                      key={index}
                      onClick={() => handleDropdownItemClick(region)}
                      className="region"
                    >
                      {region}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>


          <img
            className="image"
            alt="Image"
            src={require("./img/japanmap.png")}
            usemap="#workmap"
          />
          <div className="places">
            <img
              className="kyoto icon"
              id="Kyoto"
              alt="Image"
              src={require("./img/sapporo-icon.png")}
              onClick={() => handleDropdownItemClick("札幌")}
            />
            <img
              className="tokyo icon"
              id="Tokyo"
              alt="Image"
              src={require("./img/tokyo-icon.png")}
              onClick={() => handleDropdownItemClick("東京")}
            />
            <img
              className="image-3 icon"
              id="Nagoya"
              alt="Image"
              src={require("./img/nagoya-icon.png")}
              onClick={() => handleDropdownItemClick("名古屋")}
            />
            <img
              className="image-hiro icon"
              id="Hiroshima"
              alt="Image"
              src={require("./img/hiroshima-icon.png")}
              onClick={() => handleDropdownItemClick("広島")}
            />
          </div>
        </div>
      </div>
      <div className="overlap-group">
        <div className="overlap-2">
          <div className="BEYOURBEST-strip">Discover Japan&#39;s Treasures</div>
          <div className="text-input-2" />
        </div>
        <div className="overlap-2">
          <div className="BEYOURBEST-strip">Discover Japan&#39;s Treasures</div>
          <div className="text-input-2" />
        </div>
        <div className="overlap-2">
          <div className="BEYOURBEST-strip">Discover Japan&#39;s Treasures</div>
          <div className="text-input-2" />
        </div>
        <div className="overlap-2">
          <div className="BEYOURBEST-strip">Discover Japan&#39;s Treasures</div>
          <div className="text-input-2" />
        </div>
        <div className="overlap-2">
          <div className="BEYOURBEST-strip">Discover Japan&#39;s Treasures</div>
          <div className="text-input-2" />
        </div>
        <div className="overlap-2">
          <div className="BEYOURBEST-strip">Discover Japan&#39;s Treasures</div>
          <div className="text-input-2" />
        </div>
      </div>
      <div className="overlap-5">
        <div className="Japanese-styles-wrapper">
          <img className="Japanese-snack" src={require("./img/image-55.png")} />
          <div className="Japanese-text-container">
            <p>和菓子</p>
          </div>
        </div>
        <div className="overlap-6">
          <div className="FORMALS-styles-wrapper">
            <img className="Western-snack" src={require("./img/image-166.png")} />

            <div className="text-wrapper-9">
              <p>洋菓子</p>
            </div>
          </div>
          <div className="CASUALS-styles-wrapper">
            <img className="Other-snack" src={require("./img/image-155.png")} />

            <div className="text-wrapper-9">
              <p>その他</p>
            </div>
          </div>
        </div>
      </div>
      <div className="horizontal-container">
        <div className="frame">
          <div className="delivery">
            <img
              className="image-6"
              alt="Image"
              src={require("./img/image-144.png")}
            />
            <div className="overlap-group-4">Super Fast and Free Delivery</div>
          </div>
        </div>
        <div className="middle">
          <div className="text-input-container-2">
            <img
              className="image-8"
              alt="Image"
              src={require("./img/image-122.png")}
            />
            <div className="non-contactshipping">Non- Contact Shipping</div>
          </div>
          <div className="button-3">
            <img
              className="image-9"
              alt="Image"
              src={require("./img/image-111.png")}
            />
            <div className="moneybackguranteed">Money Back Guranteed</div>
          </div>
        </div>
        <div className="container">
          <div className="payment">
            <img
              className="image-7"
              alt="Image"
              src={require("./img/image-133.png")}
            />
            <div className="text-wrapper-12">Super Secure Payment System</div>
          </div>
        </div>
      </div>
      <div className="container-2">
        <div className="newarrivals">Best Sellers</div>
        <div className="container-3">
          {bestsellerList.map((product) => (
            <ProductCards key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="tooltip">
        <div className="foot-overlap-group">
          <div className="pAndText2">
            <p className="foot-p">
              <span className="foot-text-wrapper">
                Corporate Info
                <br />
              </span>
              <ul className="span">
                <li>Career</li>
                <li>Press</li>
                <li>Investor relations</li>
                <li>Corporate governance</li>
                <li>Cookie Settings</li>
              </ul>
            </p>
            <p className="foot-text-wrapper-2">
              Stay Connected with Us! Discover the best omiyage from Japan and
              be in the know about exclusive offers and cultural insights
              <br />
              <br /> [Explore More]
            </p>
          </div>
          <div className="div-2AndImage">
            <div className="div-2">
              <span className="foot-text-wrapper">Help</span>
              <ul className="span">
                <li>Customer Service</li>
                <li>Legal & Privacy</li>
                <li>Contact</li>
                <li>Report a scam</li>
                <li>Cookie Settings</li>
              </ul>
            </div>
            <img
              className="foot-image"
              alt="Image"
              src={require("./img/image.png")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
