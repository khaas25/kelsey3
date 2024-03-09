import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./carts.css";

export default function Carts() {
  var navigate = useNavigate();
  var [carts, setCarts] = useState([]);
  useEffect(() => {
    async function getData() {
      var response = await fetch(`https://dummyjson.com/carts`);
      var data = await response.json();
      console.log(data);
      setCarts(data.carts);
    }
    getData();
  }, []);
  function singleCart(id) {
    navigate("/singlecart", { state: { id: id } });
  }
  return (
    <div>
      <h1 id="carts-title">Carts</h1>{" "}
      <div className="carts-container">
        {" "}
        {carts.map((cart) => (
          <div key={cart.id} className="cart-div">
            <h3 onClick={() => singleCart(cart.id)}>Cart ID: {cart.id}</h3>
            <div>
              {cart.products.map((product, index) => (
                <p key={product.id}>
                  {index + 1}) {product.title}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
