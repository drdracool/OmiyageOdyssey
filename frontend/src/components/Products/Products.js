import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";
import ProductCards from "./ProductCards";

const Products = () => {
  const [sortOrder, setSortOrder] = useState("");
  const [sortCriteria, setSortCriteria] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(8);
  const location = useLocation();

  //   useEffect(() => {
  //     // For testing, use mock data
  //     setDetails(mockProducts);
  //   }, []);
  let productList = location.state.productList.item_data;
  // console.log(productList);
  const [isOpen, setIsOpen] = useState(false);
  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const sortProducts = (criteria) => {
    const sortedProducts = productList;

    if (criteria === "price") {
      sortedProducts.sort((a, b) => {
        if (sortOrder === "asc") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    } else if (criteria === "reviewAverage") {
      sortedProducts.sort((a, b) => {
        if (sortOrder === "asc") {
          return a.reviewAverage - b.reviewAverage;
        } else {
          return b.reviewAverage - a.reviewAverage;
        }
      });
    }

    productList = sortedProducts;
  };

  //   useEffect(() => {
  //     // Perform data fetching or other side effects here
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get("http://127.0.0.1:8000/test3");
  //         setDetails(response.data.item_data);
  //         console.log("Yeah");

  //         console.log(response.data); // Update the 'details' state with the fetched data
  //         console.log("Yeah");
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };

  //     fetchData(); // Call the fetchData function when the component mounts
  //   }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div className="products">
      {/* <div className="div"> */}
      <div className="text-input-container">
        <div className="home-menu">
          <Link to="/">Home</Link>
        </div>
        <div className="findastore-menu">Customer Service</div>
      </div>
      <div className="hero">
        <div className="overlap">
          <img className="img" alt="Image" src={require(".//image-1.png")} />
          <img
            className="image-2"
            alt="Image"
            src={require(".//Yatsuhashi.png")}
          />
          <div className="overlapGroups">
            <div className="overlap-group-2">
              <div className="text-wrapper-4">With love.</div>
              <img
                className="image-5"
                alt="Image"
                src={require(".//image-5.png")}
              />
            </div>
            <div className="overlap-2">
              <p className="text-wrapper-3">
                Elevate Gifting with a Touch of Japan
              </p>
              <img
                className="image-3"
                alt="Image"
                src={require(".//image-4.png")}
              />
              <img
                className="image-4"
                alt="Image"
                src={require(".//image-4.png")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="vertical-container">
        <div className="overlap-3">
          <div className="text-wrapper-8">OmiyageOdyssey Collection</div>
          {/* <img
            className="image-6"
            alt="Image"
            src={require(".//image-6.png")}
          /> */}
          <div className="text-input-4">
            <div className="all-sort-options">
              <input
                type="button"
                className="text-wrapper-5"
                onClick={toggleOptions}
                value="Sort"
              />
              <div className="options-dropdown">
                <input
                  type="button"
                  className={`sort-options price-up ${isOpen ? "visible" : ""}`}
                  value="price-up"
                  onClick={() => {
                    setSortCriteria("price");
                    setSortOrder("asc");
                    sortProducts("price");
                  }}
                />
                <input
                  type="button"
                  className={`sort-options price-down ${
                    isOpen ? "visible" : ""
                  }`}
                  value="price-down"
                  onClick={() => {
                    setSortCriteria("price");
                    setSortOrder("desc");
                    sortProducts("price");
                  }}
                />
                <input
                  type="button"
                  className={`sort-options review-up ${
                    isOpen ? "visible" : ""
                  }`}
                  value="review-up"
                  onClick={() => {
                    setSortCriteria("reviewAverage");
                    setSortOrder("asc");
                    sortProducts("reviewAverage");
                  }}
                />
                <input
                  type="button"
                  className={`sort-options review-down ${
                    isOpen ? "visible" : ""
                  }`}
                  value="review-down"
                  onClick={() => {
                    setSortCriteria("reviewAverage");
                    setSortOrder("desc");
                    sortProducts("reviewAverage");
                  }}
                />
              </div>
            </div>
          </div>

          <div className="productsList">
            {productList.slice(0, visibleProducts).map((product) => (
              <ProductCards key={product.id} product={product} />
            ))}
          </div>

          <button
            className="text-wrapper-7"
            onClick={() => setVisibleProducts(visibleProducts + 8)}
          >
            Load More
          </button>
          <img className="arrow" alt="Arrow" src="/img/arrow-2.svg" />
        </div>
      </div>

      <div className="tooltip">
        <div className="overlap-group">
          <div className="pAndText2">
            <p className="p">
              <span className="text-wrapper">
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
            <p className="text-wrapper-2">
              Stay Connected with Us! Discover the best omiyage from Japan and
              be in the know about exclusive offers and cultural insights
              <br />
              <br /> [Explore More]
            </p>
          </div>
          <div className="div-2AndImage">
            <div className="div-2">
              <span className="text-wrapper">Help</span>
              <ul className="span">
                <li>Customer Service</li>
                <li>Legal & Privacy</li>
                <li>Contact</li>
                <li>Report a scam</li>
                <li>Cookie Settings</li>
              </ul>
            </div>
            <img className="image" alt="Image" src={require(".//image.png")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
