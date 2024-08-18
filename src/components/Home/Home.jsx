
import style from './Home.module.css'
import homeImg from '../../assets/vecteezy_spaceman-astronaut-no-background-applicable-to-any-context_27291149.png'
// import homeImg from'../../assets/background.jpg'
export default function Home() {
  return (
    <div className={style.home}>
      <div className="home-cont pb-8 min-h-[80vh] flex flex-wrap items-center">
       <div> <div className="home-img md:w-1/3   mx-auto pt-1">
          <img src={homeImg} alt="astronaut" />
        </div>
        <h2 className='text-2xl md:text-4xl font-extrabold'>HELLO FRAMEWORK</h2>
        <div className='flex justify-center my-2 items-center'>
          <div className={style.line}></div>
          <i className='fa-solid fa-star mx-2 '></i>
          <div className={style.line}></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p></div>
      </div>
    </div>
  )
}
