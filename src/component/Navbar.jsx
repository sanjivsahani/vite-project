import React from 'react'
import { useSelector } from 'react-redux'
import './Navbar.css'

const Navbar = () => {
  const thali = useSelector(state => state.counter.thali)
  console.log(thali.length)
  return (
    <div className='header'>
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1024px-McDonald%27s_Golden_Arches.svg.png" style={{ height: "50px" }} />
        <h5 className='logo_name'>McThali</h5>
      </div>
      <div className="search">
        <input type="text" className='search_input' placeholder='search Your ' />

      </div>
 
      <div className="cart">
        <button className='btn_cart'>
          view Cart <button className='btn_qwt_state'>{thali.length} </button></button>


      </div>
    </div>
  )
}

export default Navbar