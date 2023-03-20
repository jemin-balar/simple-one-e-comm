import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";

const Header = () => {
  const [scrooled, setScrooled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState(false);

  const navigate = useNavigate();
  const { cartItems, cartCount } = useContext(Context);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrooled(true);
    } else {
      setScrooled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrooled ? `sticky-header` : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li>About</li>
            <li>Category</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            Simples-one
          </div>
          <div className="right">
            <TbSearch onClick={() => setSearch(true)} />
            <AiOutlineHeart />
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {search && <Search setSearch={setSearch} />}
    </>
  );
};

export default Header;
