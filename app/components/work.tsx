'use client'
import { assets, workData } from '@/assets/assets'
import { link } from 'fs'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { transform } from 'next/dist/build/swc/generated-native'
const work = () => {
    return (
        <motion.div id='work' className='w-full px-[12%] py-10 scroll-mt-20'
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
                }}>My Portfolio</motion.h4>
            <motion.h2 className='text-center text-5xl font-bold'
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.5,
                    duration: 0.5
                }}>My Latest Work</motion.h2>
            <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-normal'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.7,
                    duration: 0.5
                }}>
                Welcom to my web development portfolio! Explore a collection of projects
                showcasing my experties in frontend Development.
            </motion.p>

            <motion.div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 my-10'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.9,
                    duration: 0.6
                }}>
                {workData.map((project, index) => (
                    <motion.div key={index}
                        className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                        style={{ backgroundImage: `url(${project.bgImage})` }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}>
                        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 px-5 py-3 duration-500 group-hover:bottom-7'>
                            <div>
                                <h2 className='font-semibold'>{project.title}</h2>
                                <p className='text-sm text-gray-700'>{project.description}</p>
                            </div>
                            <a href={project.link} target='_blank' className='inline-block mt-3 px-4 py-1 bg-black text-white border rounded-full border-gray-500'>
                                <span className='flex items-center gap-2'>
                                    Website
                                    <Image src={assets.right_arrow_white} alt='right_arrow_white' className='w-4' style={{transform: 'rotate(325deg)'}}></Image>
                                </span>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full
            py-3 px-10 mx-auto my-20 hover:bg-[#fcf4ff] duration-500'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 1.1,
                    duration: 0.5
                }}>
                Show More <Image src={assets.right_arrow_bold} alt='arrow-bold' className='w-4'></Image>
            </motion.a>
        </motion.div>
    )
}

export default work
