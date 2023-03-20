import { useNavigate } from "react-router-dom";

import "./Category.scss";

const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="shop-bt-category">
        <div className="categories">
          {categories?.data?.map((item) => {
            return (
              <>
                <div
                  key={item?.id}
                  className="category"
                  onClick={() => navigate(`/category/${item?.id}`)}
                >
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
