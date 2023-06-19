import React from "react";
import {
  FaBeer,
  FaFacebook,
  FaRocketchat,
  FaTwitterSquare,
  FaViber,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10 text-white bg-rose-300 bg-gradient-to-r from-rose-300 to-sky-300">
      <div>
        <img
          className="w-20 rounded-3xl"
          src="https://i.ibb.co/R7T9yTN/logo.jpg"
          alt=""
        />
        <h6 className="text-3xl font-bold">Monarch</h6>
        <div className="flex space-x-5">
          <a href="https://www.facebook.com/">
            <FaFacebook></FaFacebook>
          </a>
          <a href="https://twitter.com/">
            <FaTwitterSquare></FaTwitterSquare>
          </a>
          <a href="link link-hover">
            <FaRocketchat></FaRocketchat>
          </a>
        </div>
        <p>Copyright © 2023 - All right reserved by Monarch Industries Ltd</p>
      </div>
      <div>
        <span className="footer-title text-xl">Services</span>
        <a className="link link-hover">Sell Doll</a>
        <a className="link link-hover">Design Doll</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title text-xl">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      <div>
        <span className="footer-title text-xl">Contact us</span>
        <a className="link link-hover">Phone: 123-456-7890</a>
        <a className="link link-hover">Email: info@example.com</a>
        <a className="link link-hover">Address:123 Street, Dhaka, Bangladesh</a>
      </div>
    </footer>
  );
};

export default Footer;
