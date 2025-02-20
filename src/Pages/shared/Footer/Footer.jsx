import React from 'react';
import logo from '../../../assets/shop/logo.png';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYahoo, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer bg-yellow-700 opacity-90  text-white p-10 flex justify-evenly items-center flex-col md:flex-row">
      <div className="mb-6 flex flex-col justify-center items-center">
        <img src={logo} alt="Pearl Bistro Logo" className="w-24 h-24" />
        <div className="text-center py-4">
        <p className="text-sm">&copy; 2025 Pearl Bistro. All rights reserved.</p>
          <p>123 Pearl Street, Bistro Town, USA</p>
          <p>+1 (555) 123-4567</p>
          <p>info@pearlbistro.com</p>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-6 text-xl">
              <Link><FaFacebook></FaFacebook></Link>
              <Link><FaInstagram></FaInstagram></Link>
              <Link><FaTwitter></FaTwitter></Link>
              <Link><FaYoutube></FaYoutube></Link>
              <Link><FaWhatsapp></FaWhatsapp></Link>
              <Link><FaYahoo></FaYahoo></Link>
            </div>
          </div>
      </div>
      </div>
      <div className='flex gap-10'>
        <nav className='flex flex-col'>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className='flex flex-col'>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
      </div>
      <form className='flex flex-col items-center'>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text text-white hidden md:block">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item" />
            <button className="btn bg-yellow-900 text-white join-item">Subscribe</button>
          </div>
          
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;