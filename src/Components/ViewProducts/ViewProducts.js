import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./viewproducts.css";

export default function ViewProducts() {
  var navigate = useNavigate();
  var [products, setProducts] = useState([]);
  var [images, setImages] = useState([]);
  useEffect(() => {
    async function getData() {
      var response = await fetch(`http://localhost:8080/products`);
      var data = await response.json();
      console.log(data);
      setProducts(data);
      setImages(data.images);
    }
    getData();
  }, []);

  function singleProduct(id) {
    navigate("/singleproduct", { state: { id: id } });
  }
  return (
    <div>
      <div>
        <h1>Products</h1>
        <div className="allproductscontainer">
          {products.map((product) => (
            <>
              <div className="singleproductcontainer">
                <h1 onClick={() => singleProduct(product._id)}>
                  {product.productName}
                </h1>
                <h3>{product.price}</h3>
                <p>{product.description.slice(0, 200)}...</p>
                {/* slice displays a crtain amount of words onwebsite */}
                <div className="image-container">
                  {product.images.map((image) => {
                    return (
                      <div className="imagediv">
                        <img src={image} alt="product" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
