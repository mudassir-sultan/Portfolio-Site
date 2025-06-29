import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <Image src={assets.logo} alt='footer-logo' className='w-36 mx-auto mb-2'></Image>
                <div className='flex items-center justify-center gap-2 mx-auto'>
                    <Image src={assets.mail_icon} alt='mail_icon' className='w-6'></Image>
                    mudassarali0281@gmail.com
                </div>
                <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                    <p>@ 2025 mudassar sultan. All rights reserved</p>
                    <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
                        <li><a href="https://github.com/mudassir-sultan" target='_blank'>Github</a></li>
                        <li><a href="https://www.linkedin.com/in/mudassar-sultan-aa8388118/" target='_blank'>Linkdin</a></li>
                        <li><a href="javascript:void(0)" target='_blank'>Twitter</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
