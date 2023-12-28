// Footer.js
import React from 'react';
import './styles/Footer.css'; // Assurez-vous d'ajuster le chemin du fichier CSS

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="contact-form">
        <h2>Contact us</h2>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-info">
        {/* Ajoutez vos informations de contact ici */}
      </div>
    </footer>
  );
};

export default Footer;
