import React from 'react'
import style from './About.module.css'
export default function About() {
    return (
        <div className='container m-auto min-h-[80vh] pt-11 flex flex-wrap items-center'>
            <div >
                <div className="flex flex-wrap flex-col justify-center"><h2 className='text-2xl md:text-4xl capitalize font-extrabold mb-5'>Exploring New Frontiers</h2>
                    <div className='flex justify-center my-2 items-center'>
                        <div className={style.line}></div>
                        <i className='fa-solid fa-star mx-2 '></i>
                        <div className={style.line}></div>
                    </div>
                </div>
                <div className="aboutP flex flex-col md:flex-row mt-6 px-5">
                    <p className='md:w-1/2 md:text-start w-full text-center mb-5 md:ps-28'>we’re dedicated to crafting web experiences that shine as brightly as the stars. Our team combines creativity and cutting-edge technology to build stunning websites that stand out in the vast digital universe.</p>
                    <p className='md:w-1/2 md:text-start w-full text-center md:ps-4 md:pe-28 '>Inspired by the cosmos, we create innovative designs and functional solutions to bring your vision to life. Join us on this journey as we explore new horizons in web development.</p>
                </div>
            </div>
        </div>
    )
}
