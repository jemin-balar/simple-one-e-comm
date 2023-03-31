import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <>
      <footer className="footer" id="newslettercomponents">
        <div className="footer-content">
          <div className="col">
            <div className="title">About</div>
            <div className="text">
              Lorem ipsum dolor, sit am sxs xset consectetur adipisicing elit
              Officiisipsa quasi dolores facere, eaque aspernatur nemo
              architecto exerciatem. Eaque?
            </div>
          </div>
          <div className="col">
            <div className="title">contact</div>
            <div className="c-item">
              <FaLocationArrow />
              <div className="text">
                B-206 ,Siciliya ,Mota Varachha, Surat -394101
              </div>
            </div>
            <div className="c-item">
              <FaEnvelope />
              <div className="text">Email : jems123@gmail.com</div>
            </div>
            <div className="c-item">
              <FaMobileAlt />
              <div className="text">Phone : 0471 272 0261</div>
            </div>
          </div>
          <div className="col">
            <div className="title">Categorys</div>
            <span className="text">Headphones</span>
            <span className="text">Smart Watches</span>
            <span className="text">Bluetooth Speakers</span>
            <span className="text">Wireless Earbuds</span>
            <span className="text">Home Theater</span>
            <span className="text">Projectors</span>
          </div>
          <div className="col">
            <div className="title">Pages</div>
            <span className="text">Home</span>
            <span className="text">About</span>
            <span className="text">Privacy Policy</span>
            <span className="text">Returns</span>
            <span className="text">Terms & Conditions</span>
            <span className="text">Contact Us</span>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="bottom-bar-content">
            <div className="text">
              SIMPLEONE 2023 CREATED BY JEMSBALAR. PREMIUM E-COMMERCE SOLUTIONS.
            </div>
            <img src={Payment} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
