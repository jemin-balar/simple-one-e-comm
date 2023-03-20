import "./Products.scss";
import Product from "./Product/Product";
const Products = ({ products, innerPage, heaingText }) => {
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{heaingText}</div>}
      <div className="products">
        {products?.data?.map((item) => (
          <Product key={item?.id} id={item?.id} data={item?.attributes} />
        ))}
      </div>
    </div>
  );
};

export default Products;
