import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductCards({ product }) {
  return (
    <div className="checkbox">
      <div className="overlap-group-3">
        <img className="image-7" alt="Image" src={product.image} />
        <div className="text-input">
          <div className="cargotrousers">{product.title}</div>
          <div className="rs">￥{product.price}</div>
        </div>
        <Link to={product.itemUrl} target="_blank">
          <div className="cargotrousers-2">Buy Now</div>
        </Link>
      </div>
    </div>
  );
}

export default ProductCards;
