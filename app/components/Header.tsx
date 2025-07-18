'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center h-screen mx-auto flex flex-col items-center justify-center gap-4'>
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                    duration: 0.8,
                    type: 'spring',
                    stiffness: 100
                }}>
                <Image src={assets.profile_img} alt='profile-image' className='rounded-full w-28'></Image>
            </motion.div>
            <motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                    delay: 0.3
                }}
                className='flex items-end gap-2 text-xl md:text-2xl mb-3'>
                Hi! Mudassar Sultan
                <Image src={assets.hand_icon} alt='profile-image' className='rounded-full w-6'></Image>
            </motion.h3>
            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5
                }}
                className='text-3xl sm:text-6xl lg:text-[66px] font-bold'>
                Frontend Web Developer
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    duration: 0.6,
                    delay: 0.7
                }}
                className='max-w-2xl mx-auto font-normal'>
                I am a frontend developer from Lahore, Pakistan with 8 years experiance in multiple companies
                like Royal Cyber, Techavant & Codeavour
            </motion.p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: 1
                    }}
                    href="#contact" className='px-10 py-3 bg-black text-white border rounded-full border-gray-500 flex items-center gap-2'>Contact me
                    <Image src={assets.right_arrow_white} alt='right_arrow_white' className='w-4'></Image>
                </motion.a>
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: 1.2
                    }}
                    href="/Mudassar-Sultan.pdf" className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2' download>my resume
                    <Image src={assets.download_icon} alt='download_icon' className='w-4'></Image>
                </motion.a>
            </div>
        </div>
    )
}

export default Header
