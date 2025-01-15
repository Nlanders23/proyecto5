import React from 'react';
import { Facebook, GitHub, Instagram, YouTube } from '@mui/icons-material';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
     <div className="footer-container">
        <div className="footer-grid">
        
        <div className="footer-section">
            <h3 className="footer-title">GameZone</h3>
            <p className="footer-text">
              Your ultimate destination for gaming news, reviews, and community. Join us in celebrating the world of gaming.
            </p>
          </div>
        
          <div className="footer-section">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-section">
              <li><a href="#" className="footer-link">Contact Us</a></li>
              <li><a href="#" className="footer-link">FAQ</a></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Terms of Service</a></li>
            </ul>
          </div>
  
          <div className="footer-section">
            <h4 className="footer-title">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="footer-link">
              <Facebook size={20} />
              </a>
              <a href="#" className="footer-link">
              <GitHub size={20} />
              </a>
              <a href="#" className="footer-link">
              <Instagram size={20} />
              </a>
              <a href="#" className="footer-link">
              <YouTube size={20} />
              </a>
            </div>
          </div>
         </div>

          <div className="derechos reservados">
            <p className="texto">
            © {new Date().getFullYear()} GameZone. All rights reserved.
            </p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;