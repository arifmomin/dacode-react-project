import React from 'react'
import banner from "../../image/banner.png"
import "./Banner.css"

const Banner = () => {
  return (
    
    <div className="banner_part">
        <div className="container">
            <div className="banner_wraper">
            <div className="banner_left">
                <h1 className='banner_head'>We help you create your <span>website</span></h1>
                 <p className='banner_summery'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut turpis adipiscing tempus, magna elit nunc iaculis sit. Libero velit quis leo non. At donec egestas cras in libero pellentesque. Donec amet phasellus</p>
           <div className="banner_button_wraper">
            <div className="banner_button">
                <a className='banner_first_button' href="">Get Started</a>
            </div>
            <div className="banner_button">
                <a className='banner_secound_button' href="">Contact Us</a>
            </div>
           </div>

            </div>
            <div className="banner_right">
                <picture><img src={banner} alt={banner} /></picture>
            </div>
            </div>
        </div>
    </div>

  )
}

export default Banner;