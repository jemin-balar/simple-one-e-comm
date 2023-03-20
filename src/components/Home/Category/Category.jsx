import "./Category.scss";

import Cat1 from "../../../assets/category/cat-1.jpg";

const Category = ({ categories }) => {
  return (
    <>
      <div className="shop-bt-category">
        <div className="categories">
          {categories?.data?.map((item) => {
            return (
              <>
                <div key={item?.id} className="category">
                  <img
                    src={
                      "http://localhost:1337" +
                      item?.attributes?.img?.data?.attributes?.url
                    }
                    alt=""
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Category;
