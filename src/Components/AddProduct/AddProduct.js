import axios from "axios";
import React from "react";
import "./addproduct.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { useFormik } from "formik";
import { newProductsSchema } from "../../Validator/productsSchemaValidator";
import { useEffect } from "react";
import { useRef } from "react";

export default function AddProduct() {
  //// Adding a new product from the form in return and sending to api.

  const productNameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();

  function addNewProduct() {
    var productName = productNameRef.current.value;
    var description = descriptionRef.current.value;
    var price = priceRef.current.value;
    var images = document.getElementsByClassName("images"); ///base 64 compresses images and converting to string format
    var selectedImages = [];
    for (var i = 0; i < images.length; i++) {
      if (images[i].value !== "") {
        selectedImages.push(images[i].value);
      }
    }
    var payload = {
      productName: productName,
      description,
      price,
      images: selectedImages,
    };
    console.log(payload);
    axios
      .post("http://localhost:8080/products", payload)
      .then((res) => {
        console.log(res);
        NotificationManager.success("Product has been Uploaded");
        productNameRef.current.value = "";
        priceRef.current.value = "";
        descriptionRef.current.value = "";
        document.getElementById("imagecontainer").innerHTML = "";
      })
      .catch((e) => {
        console.log(e);
        NotificationManager.error("Oops.. Something went wrong!");
      });
  }
  //// Yup Validation.
  var initialValues = {
    productName: "",
    description: "",
    price: "",
    file: "",
  };
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: newProductsSchema,
    onSubmit: () => {
      addNewProduct();
    },
  });

  useEffect(() => {
    document
      .getElementById("productImage")
      .addEventListener("change", readFile2);
  }, []);

  function readFile2(e) {
    //e stands for event
    let files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      (function (file) {
        var reader = new FileReader(); //initializing base 64
        reader.onload = () => {
          var img = document.createElement("img");
          img.src = reader.result;
          document.getElementById("imagecontainer").appendChild(img);
          document.getElementsByClassName("images")[i].value = reader.result; //link of image in b64 format is storing in input at string.
          console.log(reader.result);
        }; // converting file to base 64 link
        reader.readAsDataURL(file);
      })(files[i]);
    }
  }

  //// Return Section
  return (
    <div>
      <NotificationContainer />
      <div className="formatform">
        <form onSubmit={handleSubmit}>
          <h1>Add a Product</h1>
          <p>{errors.productName}</p>
          <input
            type="text"
            name="productName"
            id="productName"
            placeholder="Product Name: "
            value={values.productName}
            onChange={handleChange}
            onBlur={handleBlur}
            ref={productNameRef}
          />
          <br />
          <br />
          <p>{errors.description}</p>
          <input
            type="textarea"
            name="description"
            id="description"
            placeholder="Description: "
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            ref={descriptionRef}
          />
          <br />
          <br />
          <p>{errors.price}</p>

          <input
            type="number"
            name="price"
            id="price"
            placeholder="Price: "
            value={values.price}
            onChange={handleChange}
            onBlur={handleBlur}
            ref={priceRef}
          />
          <br />
          <br />
          <p>{errors.file}</p>

          <input
            type="file"
            name="file"
            multiple
            id="productImage"
            value={values.file}
            // onChange={(e) => {
            //   handleChange(e);
            //   readFile2(e);
            // }}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div id="imagecontainer"></div>
          <input type="text" className="images" hidden />
          <input type="text" className="images" hidden />
          <input type="text" className="images" hidden />
          <br />
          <br />
          <input
            type="submit"
            className="submitbutton"
            // onSubmit={addNewProduct}
          />
        </form>
      </div>
    </div>
  );
}
