import React from 'react'
import { SiFacebook, SiInstagram, SiTwitter, SiYoutube } from "react-icons/si";

const Footter = () => {
  return (
    <div id='comi'>
        <footer>
            <div className="container-footer">
                <h2>BIZI TAKIP EDIN</h2>
                <div className="social-media">
                    <a href="https://www.instagram.com/"><SiInstagram /></a>
                    <a href="https://www.instagram.com/"><SiTwitter /></a>
                    <a href="https://www.instagram.com/"><SiFacebook /></a>
                    <a href="https://www.instagram.com/"><SiYoutube /></a>
                </div>
                <h2>ÖDEME YÖNTEMLERİ</h2>
                <div className="payment-method">
                    <img 
                    onDragStart={(event)=> event.preventDefault()}
                    id='payment-img' src="https://cdn.webshopapp.com/shops/218525/files/371942398/payment-methods-epicerie-ludo.png" alt="paypal" />
                </div>
                <h2>ILETIŞIM</h2>
                <div className="contact-footer">
                    <p>Adres: Erzurum Yakutiye</p>
                    <p>Telefon: +90 530 746 48 99</p>
                    <p>E-posta: 
                        <a href="mailto:info@leuchstore.me">
                         info@leuchstore.me
                        </a>
                    </p>
                </div>    
            </div>
            <div className="signature">
                    <p>© 2022 Leuch Media. Tüm hakları saklıdır.</p>
                </div>
        </footer>                
    </div>
  )
}

export default Footter