import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./singleproduct.css";

export default function SingleProduct() {
  var location = useLocation();
  var id = location.state.id;
  var [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    console.log("ID:", id);
    async function getData() {
      var response = await fetch(`http://localhost:8080/products/` + id);
      var data = await response.json();
      console.log(data);
      setSingleProduct(data);
    }
    getData();
  }, [id]);
  return (
    <div>
      <div>
        <div>
          <div>
            <h1>{singleProduct.productName}</h1>
            <h3>{singleProduct.price}</h3>
            <p>{singleProduct.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
