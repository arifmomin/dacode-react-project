import React from 'react'
import "./testiomonial.css"
import { FaStar } from "react-icons/fa6";
import testiomoinal1 from "../../image/testiomoinal1.png"
import testiomoinal2 from "../../image/testiomoinal2.png"
import testiomoinal3 from "../../image/testiomoinal3.png"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const testiomonial = () => {
  return (
    <div className='testiomonial_part'>
        <div className="container">
            <div className="testiomonial_title">
                <h2>Testiomonials</h2>
                <h3>Our Happy Clients</h3>
            </div>
            <div className="testiomonial_box">
                <h4>5.0</h4>
                <div className="testiomonial_icon">
                    <span><FaStar/></span>
                    <span><FaStar/></span>
                    <span><FaStar/></span>
                    <span><FaStar/></span>
                    <span><FaStar/></span>
                </div>
                <p>We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.</p>
                <div className='testiomonial_next_arrow'>
                    <IoIosArrowBack/>
                </div>
                <div className='testiomonial_prev_arrow'>
                    <IoIosArrowForward/>
                </div>
            </div>
            <div className="testiomonial_item">
                <div className="testiomonial_img">
                <picture><img src={testiomoinal1} alt={testiomoinal1} /></picture>
                <picture><img src={testiomoinal2} alt={testiomoinal2} /></picture>
                <picture><img src={testiomoinal3} alt={testiomoinal3} /></picture>
                <picture><img src={testiomoinal2} alt={testiomoinal2} /></picture>
                <picture><img src={testiomoinal1} alt={testiomoinal1} /></picture>
                </div>
                <div className="testiomonial_name">
                    <h2>Paulus Haverinen</h2>
                    <h3>Owner, Ikirakenne Ltd
</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default testiomonial