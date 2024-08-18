



import React, {  useState } from 'react'
import style from './Contact.module.css'
import { replace } from 'react-router-dom'


export default function Contact() {
const [isFocus, setisFocus] = useState(
  {name:false,
    email:false,
    age:false,
    password:false,}
)
 
    function handleFocus(e) {
      setisFocus({...isFocus,[e.target.name]:true})
    }
  return (
    <>
     
       
          <div className="container mx-auto py-5">

            <h2 className={`${style.head} text-2xl md:text-4xl font-extrabold`}>Contact</h2>
            
            <div className='flex justify-center mt-2 items-center'>
              <div className={style.line}></div>
              <i className='fa-solid fa-star mx-2 '></i>
              <div className={style.line}></div>
            </div>

            <form className=' mx-auto mt-9 ' action="">
              <div className={`${style.text} mx-auto pb-1 mb-4 relative`}>
                <label htmlFor='userName' className={`${style.textMain,style.label} ${isFocus.name? style.goUp:""} absolute opacity-0 `}>userName :</label>
                <input id='userName' name='name' className={`z-1 py-2 px-3 bg-transparent w-2/3 relative border-b-2 rounded-lg border-blue-gray-800 mb-4`} type="text" placeholder="userName" onInput={(e)=>handleFocus(e)} />
                
              </div>

              <div className={`${style.text} mx-auto pb-1 mb-4 relative`}>
                <label  htmlFor='userAge' className={`${style.textMain,style.label} ${isFocus.age? style.goUp:""} absolute opacity-0 `}>userAge :</label>
                <input id='userAge' name='age' className={` z-1 py-2 px-3 bg-transparent w-2/3 relative border-b-2 rounded-lg border-blue-gray-800 mb-4`} type="number" placeholder="userAge" onInput={handleFocus}/>
                
              </div>

              <div className={`${style.text} mx-auto pb-1 mb-4 relative`}>
                <label htmlFor='userEmail' className={`${style.textMain,style.label} ${isFocus.email? style.goUp:""} absolute opacity-0 `}>userEmail :</label>
                <input id='userEmail' name='email' className={` z-1 py-2 px-3 bg-transparent w-2/3 relative border-b-2 rounded-lg border-blue-gray-800 mb-4`} type="email" placeholder="userEmail" onInput={handleFocus}/>
                
              </div>

              <div className={`${style.text} mx-auto pb-1 mb-4 relative`}>
                 <label htmlFor='userPassword' className={`${style.textMain,style.label} ${isFocus.password? style.goUp:""} absolute opacity-0 `}>userPassword :</label>
                 <input id='userPassword' name='password' className={` z-1 py-2 px-3 bg-transparent w-2/3 relative border-b-2 rounded-lg border-blue-gray-800 mb-4`} type="password" placeholder="userPassword" onInput={handleFocus}/>
               
              </div>

              <div className={`mx-auto`}>
                <button className={`${style.btn} mx-auto block`} > submit </button>
              </div>

            </form>
          </div>
        
      
    </>
  )
}