import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductCards({ product }) {
  return (
    <div className="card-checkbox">
      {/* <div className="card-overlap-group-3"> */}
      <Link to={product.itemUrl} target="_blank">
        <img className="card-image" alt="Image" src={product.image} />
        <div className="card-text-input">
          <div className="card-title">{product.title}</div>
          <div className="card-rs">￥{product.price}</div>
        </div>
        {/* </div> */}
      </Link>
    </div>
  );
}

export default ProductCards;
