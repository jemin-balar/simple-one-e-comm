import { useEffect, useContext } from "react";
import "./Home.scss";

import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDatFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = () => {
    fetchDatFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
    });
  };

  const getProducts = () => {
    fetchDatFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
    });
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products products={products} heaingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
