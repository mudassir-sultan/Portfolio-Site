'use client'
import React from 'react'
import { assets, skillsData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"
const Skills = () => {
    return (
        <div>
            <motion.div id='skills' className='w-full px-[12%] py-10 scroll-mt-20'
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
                    }}>My</motion.h4>

                <motion.h2 className='text-center text-5xl font-bold'
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.5
                    }}>Skills</motion.h2>

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

                <motion.div className='grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-6 my-10'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        delay: 0.9,
                        duration: 0.6
                    }}>
                    {skillsData.map(({ icon, title }, index) => (
                        <motion.div key={index} className='border border-gray-400 rounded-lg px-4 py-4 hover:shadow-black cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500'
                            whileHover={{ scale: 1.05 }}>
                            <Image src={icon} alt='icon' className='w-10 rounded-lg'></Image>
                            <h5 className='text-sm text-gray-700 my-4 mb-0'>{title}</h5>
                        </motion.div>
                    ))}

                </motion.div>
            </motion.div>
        </div>
    )
}

export default Skills
