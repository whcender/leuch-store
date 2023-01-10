import React from 'react'
import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Link as Link2 } from 'react-router-dom';
import { IoArrowUpCircleSharp } from "react-icons/io5"; 


const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (offset > 70) {
            document.querySelector('header').classList.add('sticky');
            document.querySelector('.upper').classList.add('visible');
        } else {
            document.querySelector('header').classList.remove('sticky');
        }
    }, [offset]);
    
  return (
    <main id="hero">
    <div className='frame'>
    <header>
        <Link2 to='/home'><img className='first-logo' src="https://i.hizliresim.com/i6vj2ca.jpg" alt="" /></Link2>
        <nav ref={navRef}>
            <h3 className='inside-logo'>LGOO</h3>
            <Link2 to='/home'>
             <Link to="hero" spy={true} smooth={true} offset={-50} duration={500} onClick={showNavbar} >ANASAYFA</Link>
            </Link2>
            <Link2 to='/page404'>HAKKIMIZDA</Link2>
            <Link to="products" spy={true} smooth={true} offset={-50} duration={500} onClick={showNavbar} >ÜRÜNLER</Link>
            <Link to="comi" spy={true} smooth={true} offset={50} duration={500} onClick={showNavbar} >İLETİŞİM</Link>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes className='close-icon' />
            </button>
            <p>leuchmedia</p>
        </nav>
        <button className='nav-btn nav-open-btn' onClick={showNavbar}>
            <FaBars  />
        </button>
    </header>
    </div>
    <Link to='hero' spy={true} smooth={true} offset={-50} duration={500} className="upper"> <IoArrowUpCircleSharp /></Link>
    </main>
  )
}

export default Navbar