import React from 'react'
import style from './Footer.module.css'
export default function Footer() {
  return (
    <div className={style.footer}>
      <div className="upper-footer flex flex-col md:flex-row bg-blue-gray-400 p-10">
        <div className="location lg:w-1/3 md:w-full m-5" >
          <h3 >LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p className='mt-3'>Clark, MO 65243</p>
        </div>
        <div className="web lg:w-1/3 md:w-full m-5">
          <h3>AROUND THE WEB</h3>
          <div className="icons flex justify-center">
          <i className={`${style.icon} mx-1 border-solid border-2 p-2 rounded-full hover:bg-gray-900 hover:text-blue-gray-100 transition-all   fa-brands fa-facebook `}></i>
        <i className={`${style.icon} mx-1 border-solid border-2 p-2 rounded-full hover:bg-gray-900 transition-all  hover:text-blue-gray-100  fa-brands fa-twitter`}></i>
            <i className={`${style.icon} mx-1 border-solid border-2 p-2 rounded-full hover:bg-gray-900 transition-all  hover:text-blue-gray-100  fa-brands fa-linkedin`} ></i>
            <i className={`${style.icon} mx-1 border-solid border-2 p-2 rounded-full hover:bg-gray-900 transition-all  hover:text-blue-gray-100  fa-solid fa-globe`}></i>

          </div>
        </div>
        <div className="freelance lg:w-1/3 md:w-full m-5">
          <h3>ABOUT FREELANCER</h3>
          <p>Freelance is a free to use, Tailwind space theme created by <a className='hover:text-deep-orange-300' href='https://www.linkedin.com/in/fedaa-mosaad-8592aa31a/' target='_blank' >Fedaa Mosaad</a></p>
        </div>
      </div>
      <div className={`${style.lowerfooter} text-center py-4`}><p>Copyrights © <a className='hover:text-deep-orange-300' href="https://www.vecteezy.com/free-vector/astronaut" target='_blank'>Astronaut Vectors by Vecteezy</a></p></div>
    </div>
  )
}
