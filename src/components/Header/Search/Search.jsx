import { useState } from "react";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import { useNavigate } from "react-router-dom";

import "./Search.scss";
import useFetch from "../../../hooks/useFetch";

const Search = ({ setSearch }) => {
  const [query, setQuary] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setQuary(e.target.value);
  };

  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  if (!query.length) {
    data = null;
  }

  return (
    <>
      <div className="search-modal">
        <div className="form-field">
          <input
            type="text"
            autoFocus
            placeholder="Search for Products"
            value={query}
            onChange={onChange}
          />
          <MdClose onClick={() => setSearch(false)} />
        </div>
        <div className="search-result-content">
          <div className="search-results">
            {data?.data?.map((item) => (
              <div
                key={item?.id}
                className="search-results-item"
                onClick={() => {
                  navigate("/product/" + item.id);
                  setSearch(false);
                }}
              >
                <div className="img-container">
                  <img
                    src={
                      "http://localhost:1337" +
                      item?.attributes?.img?.data[0]?.attributes?.url
                    }
                    alt=""
                  />
                </div>
                <div className="prod-details">
                  <span className="name">{item.attributes.title}</span>
                  <span className="desc">{item.attributes.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
