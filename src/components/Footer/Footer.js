import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer__container'>
            <div className='footer__wide'>
                <div className='footer__wide_one'>
                    <h4>SHOP</h4>
                    <p className='footer__link'>BRACELETS</p>
                    <p className='footer__link'>BEST SELLERS</p>
                    <p className='footer__link'>SALE</p>
                    <p className='footer__link'>CUSTOM BRACELETS</p>
                </div>
                <div className='footer__wide_two'>
                    <h4>BRAND</h4>
                    <p className='footer__link'>OUR STORE</p>
                    <p className='footer__link'>OUR IMPACT</p>
                    <p className='footer__link'>WHOLESALE</p>
                    <p className='footer__link'>CAREERS</p>
                </div>
                <div className='footer__wide_three'>
                    <h4>HELP</h4>
                    <p className='footer__link'>HELP & FAQ</p>
                    <p className='footer__link'>TRACK MY ORDER</p>
                    <p className='footer__link'>RETURNS & EXCHANGES</p>
                    <p className='footer__link'>STORE LOCATOR</p>
                    <p className='footer__link'>GIFT CARD BALANCE</p>
                </div>
                <div className='footer__wide_four'>
                    <h4>MORE INFO</h4>
                    <p className='footer__link'>PRIVACY POLICY</p>
                    <p className='footer__link'>TERMS OF USE</p>
                    <p className='footer__link'>DESCLAIMER</p>
                    <p className='footer__link'>PARTNERSHIP</p>
                    <p className='footer__link'>GET 20% off</p>
                </div>
            </div>
            <div className='footer__wide2'>
                <h5>FOLLOW OUR JOURNEY</h5>
                <p className='footer__link'>Get in Touch</p>
                <p className='footer__link'>info@puravida@gmail.com</p>
            </div>
        </div>
    );
}

export default Footer;