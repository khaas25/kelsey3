import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Main/Main";
import Section from "./Components/Section/Section";
import Carts from "./Components/Carts/Carts";
import SingleCart from "./Components/SingleCart/SingleCart";
import Videos from "./Components/Videos/Videos";
import SingleVideo from "./Components/SingleVideo/SingleVideo";
import AddProduct from "./Components/AddProduct/AddProduct";
import ViewProducts from "./Components/ViewProducts/ViewProducts";

//SET UP ROUTES FOR THIS PROJECT
// cREATE AT LEAST TWO ROUTES AND CREAT NAVBAR TO NAVIGATE BETWEEN TWO ROUTES.

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header title="Home" />
                <Main />
              </>
            }
          />
          <Route
            path="/section"
            element={
              <>
                <Header />
                <Section />
              </>
            }
          />
          <Route
            path="/carts"
            element={
              <>
                <Carts />
              </>
            }
          />
          <Route
            path="/singlecart"
            element={
              <>
                <Header title="Single Cart" />
                <SingleCart />
              </>
            }
          />
          <Route
            path="/videos"
            element={
              <>
                <Header title="Videos" />
                <Videos />
              </>
            }
          />
          <Route
            path="/singlevideo"
            element={
              <>
                <Header title="Video Details" />
                <SingleVideo />
              </>
            }
          />
          <Route
            path="/addproduct"
            element={
              <>
                <Header title="Add a Product" />
                <AddProduct />
              </>
            }
          />
          <Route
            path="/viewproducts"
            element={
              <>
                <Header title="All Products" />
                <ViewProducts />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
