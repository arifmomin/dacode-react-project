import React from 'react'
import "./Portfolio.css"
import portfolio1 from "../../image/portfolio1.png"
import portfolio2 from "../../image/portfolio2.png"
import portfolio3 from "../../image/portfolio3.png"

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Portfolio = () => {
    const portfolio_item = [
        {
            id: 1,
            img: portfolio1,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum `,
        },
        {
            id: 2,
            img: portfolio2,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum `,
        },
        {
            id: 3,
            img: portfolio3,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum `,
        }
    ]
  return (
    <div className='portfolio_part'>
            <div className="portfolio_title">
                <h2>Portfolio</h2>
                <h3>Our Great Work</h3>
            </div>
            <div className="portfolio_button_wrapper">
                <div className="portfolio_button">
                    <a className='buttonOne' href="">Website Optimization</a>
                </div>
                <div className="portfolio_button">
                    <a className='buttontwo' href="">Website Redesign</a>
                </div>
                <div className="portfolio_button">
                    <a className='buttonthree' href="">Search Engine Optimization</a>
                </div>
            </div>
            <div className="portfolio_parrent">
                {portfolio_item?.map((item)=>(
                <div className="portfolio_item">
                <picture><img src={item.img} alt={`Portfolio ${item.id}`} /></picture>
            <p className='portfolio_summery'>{item.description}</p>
            </div>
                ))}
                <div className='portfolio_next_arrow'>
                    <IoIosArrowBack/>
                </div>
                <div className='portfolio_prev_arrow'>
                    <IoIosArrowForward/>
                </div>
                <div className="all_item_button">
                    <a className='portfolio_item_button' href="#">See All</a>
                </div>
        </div>
    </div>
  )
};

export default Portfolio;