
import img from '../../assets/background.jpg'
export default function NotFound() {
  return (
    <div className='bg-white flex justify-end '>
<div className="text-start my-6 me-44 absolute z-20 right-2/4 ">
    <span className= ' text-blue-gray-600'>404 ERROR</span>
    <h2 className='my-3 text-blue-gray-900 text-5xl font-extrabold'>Page not found</h2>
<p className='leading-7 my-3'> Sorry, we couldn't find the page you're looking for. Perhaps<br /> you've mistyped the URL? Be sure to check your spelling.</p>
</div>
        <img src={img} alt="" className='w-3/4 relative ' />
    </div>
  )
}
