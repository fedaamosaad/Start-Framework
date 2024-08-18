import React, { useState } from 'react'
import style from './Portfolio.module.css'
import img1 from '../../assets/port1.jpg'
import img2 from '../../assets/port2.jpg'
import img3 from '../../assets/port3.jpg'
import img4 from '../../assets/port4.jpg'
import img5 from '../../assets/port5.jpg'
import img6 from '../../assets/port6.jpg'

export default function Portfolio() {
    const allImg = [img1, img4, img3, img5, img2, img6];
    const [displayedIndex, setDisplayedIndex] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    function handleIsOpen(index) {
        setDisplayedIndex(index)
        console.log(index);
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false)
    }
    function nextIndex() {
        setDisplayedIndex((index) => index < allImg.length - 1 ? index + 1 : 0)
    }
    function prevIndex() {
        setDisplayedIndex((index) => index > 0 ? index - 1 : allImg.length - 1)
    }
    return (

        <div className='container mx-auto py-3'>

            <h2 className={`${style.head} text-2xl md:text-4xl font-extrabold`}>Portfolio</h2>
            <div className='flex justify-center mt-2 items-center'>
                <div className={style.line}></div>
                <i className='fa-solid fa-star mx-2 '></i>
                <div className={style.line}></div>
            </div>
            <div className='flex justify-center items-center flex-wrap mx-10 '>{allImg.map((ele, i) => (
                <div key={i} className=' lg:w-1/3 md:w-1/2 sm:w-full p-7' onClick={()=>handleIsOpen(i)}>
                    
                    <img src={ele} alt="" className='rounded-2xl w-full cursor-pointer ' />
                </div>))}
            </div>
            {isOpen && (
                <div className="fixed inset-0 flex items-center bg-teal-100 bg-opacity-35 justify-center">
                    <button onClick={nextIndex} className='absolute end-3 top-1/2'><i className='fa-solid fa-angle-right hover:bg-blue-gray-900 hover:text-blue-gray-200 bg-opacity-75 p-2 rounded-xl text-xl'></i></button>
                    <div className='flex justify-center items-center md:w-2/5 w-1/2 rounded-2xl overflow-hidden' >

                        <img src={allImg[displayedIndex]} className='w-full ' alt="" />
                    </div>
                    <button onClick={prevIndex} className='absolute start-3 top-1/2'><i className='fa-solid fa-angle-left hover:bg-blue-gray-900 hover:text-blue-gray-200 bg-opacity-75 p-2 rounded-xl text-xl'></i></button>
                    <button onClick={closeModal} className='absolute start-3 top-3'><i className='fa-solid fa-x hover:bg-blue-gray-900 hover:text-blue-gray-200 bg-opacity-75 p-2 rounded-xl text-xl'></i></button>
                </div>
            )

            }
        </div>
    )
}
