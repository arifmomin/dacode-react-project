import React from 'react'
import "./artical.css"
import { HiArrowLongRight } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";

const artical = () => {
    const artical_right_item = [
        {
            id: 1,
            title: `Why Your SaaS Business should use WordPress`,
            description: `A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort`,
            readmore: `Read More`,
        },
        {
            id: 2,
            title: `Why Your SaaS Business should use WordPress`,
            description: `A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort`,
            readmore: `Read More`,
        }
    ]
  return (
    <div className='artical_part'>
        <div className="container">
            <div className="artical_wrapper">
                <div className="artical_left">
                    <h2>News & Articles</h2>
                    <h3>DaCode Blog</h3>
                    <p>On daCode blog we will review the latest in web development for the SaaS-, tech- and crypto industry.</p>
                    <div className="artical_button">
                        <a href="#">See All</a>
                    </div>
                </div>
                <div className="artical_right">
                    {artical_right_item.map((item)=>(
                    <div className="artical_right_item">
                    <h2>{item.title} </h2>
                    <p>{item.description}</p>
                    <div className="artical_right_link">
                        <a href="#">
                            <span className='artical_read'>{item.readmore}</span>
                            <span className='artical_icon'><HiArrowLongRight/></span>
                        </a>
                    </div>
                </div>
                    ))}
                <div className='artical_prev_arrow'>
                    <IoIosArrowForward/>
                </div>
                </div>
            </div>
            <div className="artical_ball">
                <span className='one'></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
  )
}

export default artical