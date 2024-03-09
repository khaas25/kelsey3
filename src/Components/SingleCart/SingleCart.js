import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./singlecart.css";

export default function SingleCart() {
  var location = useLocation();
  var id = location.state.id;
  var [cart, setCart] = useState({});
  var [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("Location State ID:", location.state.id);
    // Rest of your code
  }, [location.state.id]);
  useEffect(() => {
    console.log("ID:", id);
    async function getData() {
      var response = await fetch(`https://dummyjson.com/carts/` + id);
      var data = await response.json();
      console.log(data);
      setCart(data);
      setProducts(data.products);
    }
    getData();
  }, [id]);
  return (
    <div>
      <h2 className="title">Products</h2>
      <div className="productscontainer">
        <div>
          {products.map((product, index) => {
            return (
              <>
                {" "}
                <p>
                  {[index + 1]})&nbsp; {product.title}
                </p>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
