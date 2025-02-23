import React from "react";
import footerlogo from "../assets/Logo1.svg";

const Footer = () => {
    return (
        <footer className="footer-container">
            <section>
                <div className="company-info">
                    <img src={footerlogo} alt="Little Lemon Logo" />
                    <p>
                        We are a family-owned Mediterranean restaurant, focused on 
                        traditional recipes served with a modern twist.
                    </p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br /> 555 Little Lemon, Chicago</li>
                        <li>Phone: <br /> <a href="tel:+00000000000">+00 000 000 000</a></li>
                        <li>Email: <br /> <a href="mailto:info@littlelemon.com">info@littlelemon.com</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
