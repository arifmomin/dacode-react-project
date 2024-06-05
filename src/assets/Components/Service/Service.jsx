import React from 'react'
import "./Service.css"
import { CgWebsite } from "react-icons/cg";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaWordpress } from "react-icons/fa";
import { HiComputerDesktop } from "react-icons/hi2";
import { AiFillSetting } from "react-icons/ai";
import { IoRocket } from "react-icons/io5";
import { TbBox } from "react-icons/tb";

const Service = () => {
    const service_item = [
        {
            id: 1,
            icon: <CgWebsite/>,
            title: `Our Services`,
            description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
            tempor invidunt ut labore et.`,
            readmore: `Read More`,
        },
        {
            id: 2,
            icon: <FaWordpress/>,
            title: `Our Services`,
            description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
            tempor invidunt ut labore et.`,
            readmore: `Read More`,
        },
        {
            id: 3,
            icon: <HiComputerDesktop/>,
            title: `Our Services`,
            description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
            tempor invidunt ut labore et.`,
            readmore: `Read More`,
        },
        {
            id: 4,
            icon: <AiFillSetting/>,
            title: `Our Services`,
            description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
            tempor invidunt ut labore et.`,
            readmore: `Read More `,
        },
        {
            id: 5,
            icon: <IoRocket/>,
            title: `Our Services`,
            description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
            tempor invidunt ut labore et.`,
            readmore: `Read More`,
        },
        {
            id: 6,
            icon: <TbBox/>,
            title: `Our Services`,
            description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
            tempor invidunt ut labore et.`,
            readmore: `Read More`,
        }
    ]
  return (
    <div className='service_part'>
        <div className="container">
            <div className="service_title">
                <h2>Our Services</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
tempor invidunt ut labore et.</p>
            </div>
            <div className="service_parrent">
                {service_item?.map((item)=>(
                <div className="service_item">
                <div className="service_icon">
                    <span>{item.icon}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
<div className="service_link">
<a href=""> 
<span>{item.readmore}</span>
<span className='readmore_icon'><HiArrowLongRight/></span>
</a>
</div>
            </div>
                ))}

            </div>
        </div>
    </div>
  )
};

export default Service;