"use client";
import React, { useEffect, useRef, useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef<HTMLUListElement>(null);
    const [activeSection, setActiveSection] = useState('top');
    const openMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(-16rem)'
        }
    }
    const closeMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(16rem)';
        }
    };
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if (scrollY > 50){
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    },[])
    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                <Image src={assets.header_bg_color} alt='header-bg' className='w-full'></Image>
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-center z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm": ""}`}>
                <ul className={`hidden md:flex items-center gap-6 lg:8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`}>
                    <li><a href="#top" onClick={() => setActiveSection('top')} className={activeSection === 'top' ? 'font-bold text-rose-500' : ''}>Home</a></li>
                    <li><a href="#work" onClick={() => setActiveSection('work')} className={activeSection === 'work' ? 'font-bold text-rose-500' : ''}>Projects</a></li>
                    <li><a href="#services" onClick={() => setActiveSection('services')} className={activeSection === 'services' ? 'font-bold text-rose-500' : ''}>Services</a></li>
                    <li><a href="#skills" onClick={() => setActiveSection('skills')} className={activeSection === 'skills' ? 'font-bold text-rose-500' : ''}>Skills</a></li>
                    <li><a href="#contact" onClick={() => setActiveSection('contact')} className={activeSection === 'contact' ? 'font-bold text-rose-500' : ''}>Contact me</a></li>
                </ul>
                <div className='flex items-center gap-4'>
                    <button type='button' className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={assets.menu_black} alt='moon-icon' className='w-6 cursor-pointer'></Image>
                    </button>
                </div>
                {/* Mobile Menu */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={assets.close_black} alt='close' className='w-5 cursor-pointer'></Image>
                    </div>
                    <li><a onClick={closeMenu} href="#top">Home</a></li>
                    <li><a onClick={closeMenu} href="#about">About me</a></li>
                    <li><a onClick={closeMenu} href="#services">Services</a></li>
                    <li><a onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a onClick={closeMenu} href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
