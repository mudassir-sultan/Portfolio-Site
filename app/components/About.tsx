'use client'
import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = () => {
    return (
        <>
            <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    duration: 1,
                }}>
                <motion.h4 className='text-center mb-2 text-lg'
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.3
                    }}>Introduction</motion.h4>
                <motion.h2 className='text-center text-5xl font-bold'
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.5
                    }}>About me</motion.h2>
                {/*  */}
                <motion.div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.8
                    }}>
                    <motion.div className='w-64 sm:w-80 rounded-3xl max-w-none'
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.6
                        }}>
                        <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'></Image>
                    </motion.div>
                    <motion.div className='flex-1'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.6
                        }}>
                        <p className='mb-10 max-w-2xl font-normal'>I am an experianced Frontend Developer with over a decade of professional experties in the field.
                            Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
                        </p>
                        <motion.ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 1
                            }}>
                            {infoList.map(({ icon, iconDark, title, description }, index) => (
                                <motion.li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]' key={index}
                                    whileInView={{ scale: 1.03 }}>
                                    <Image src={icon} alt={title} className='w-7 mt-3'></Image>
                                    <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                    <p className='text-gray-600 text-sm'>{description}</p>
                                </motion.li>
                            ))}
                        </motion.ul>
                        <motion.h4 className='my-6 text-gray-700 font-bold'
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                delay: 1.3,
                                duration: 0.5
                            }}>Tools I Use</motion.h4>
                        <motion.ul className='flex items-center gap-3 sm:gap-5'
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{
                                delay: 1.5,
                                duration: 0.6
                            }}>
                            {toolsData.map((tool, index) => (
                                <motion.li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}
                                    whileHover={{ opacity: 1, scale: 1.05 }}>
                                    <Image src={tool} alt='tool' className='w-5 sm:w-7'></Image>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </motion.div>
            </motion.div></>
    )
}

export default About
