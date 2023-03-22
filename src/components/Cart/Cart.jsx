import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import { Context } from "../../utils/context";
import CartItem from "../Cart/CartItem/CartItem";

import "./Cart.scss";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentsRequest } from "../../utils/api";

const Cart = ({ setShowCart }) => {
  const { cartItems, cartSubTotal } = useContext(Context);

  const navigate = useNavigate();

  const stripePromise = loadStripe(
    "pk_test_51MngckSDyJc5gYXqoRe7evJjLfW1uPWiSMjmCW6ls9KE3c1lo8lsMVOhu9LycHzNBmyTnNXtKXek2qVWYkKToUZk00K4PeJVO0"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentsRequest.post("/api/orders", {
        products: cartItems,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="cart-panel">
        <div className="opac-layer"></div>
        <div className="cart-content">
          <div className="cart-header">
            <span className="heading">Shopping Cart</span>
            <span className="close-btn" onClick={() => setShowCart(false)}>
              <MdClose />
              <span className="text">Close</span>
            </span>
          </div>
          {!cartItems.length && (
            <div className="empty-cart">
              <BsCartX />
              <span>No Products In The Cart</span>
              <button className="return-cta" onClick={() => navigate("/")}>
                Return To Product
              </button>
            </div>
          )}
          {!!cartItems.length && (
            <>
              <CartItem />
              <div className="cart-footer">
                <div className="subtotal">
                  <span className="text">SubTotal :</span>
                  <span className="text total">&#8377;{cartSubTotal}</span>
                </div>
                <div className="button">
                  <button className="checkout-cta" onClick={handlePayment}>
                    CheckOut
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
