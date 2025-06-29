
'use client'
import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
const Services = () => {
    return (
        <motion.div id='services' className='w-full px-[12%] py-10 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 1
            }}>
            <motion.h4 className='text-center mb-2 text-lg'
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.3,
                    duration: 0.5
                }}>What I Offer</motion.h4>

            <motion.h2 className='text-center text-5xl font-bold'
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.5,
                    duration: 0.5
                }}>My Services</motion.h2>

            <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-normal'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.7,
                    duration: 0.5
                }}>
                I am a frontend developer from Lahore, Pakistan with 10 years of experiance in multiple
                companies like Royal Cyber, Techavant & Codeavour.
            </motion.p>

            <motion.div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.9,
                    duration: 0.6
                }}>
                {serviceData.map(({ icon, title, description }, index) => (
                    <motion.div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500'
                        whileHover={{ scale: 1.05 }}>
                        <Image src={icon} alt='icon' className='w-10'></Image>
                        <h3 className='text-lg my-4 tet-g'>{title}</h3>
                        <p className='text-sm text-gray-500 leading-5'>{description}</p>
                    </motion.div>
                ))}

            </motion.div>
        </motion.div>
    )
}

export default Services
