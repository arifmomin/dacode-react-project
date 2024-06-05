import React from 'react'
import "./footer.css"
import footerLogo from "../../image/footerLogo.png"
import { IoIosArrowDown } from "react-icons/io";


function footer() {
    const footer_right_item = [
        {
            id: 1,
            title: `Work`,
            serviceone: `Blog`,
            servicetwo: `How We Work`,
            servicethree: `Testimonials`,
        },
        {
            id: 2,
            title: `Services`,
            serviceone: `Marketing Strategy`,
            servicetwo: `Website Optimization`,
            servicethree: `Email Maerketing`,
        },
        {
            id: 3,
            title: `Business Solution`,
            serviceone: `Partnership`,
            servicetwo: `About Project`,
            servicethree: `Corporate`,
        }
    ]
  return (
    <div className="footer_part">
        <div className="container">
            <div className="footer_parrent">
                <div className="footer_left_part">
                    <picture><img src={footerLogo} alt={footerLogo} /></picture>
                    <h2>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</h2>
                </div>
                <div className="footer_right_part">
                    {footer_right_item.map((item) =>(
                                            <div className="footer_right_item">
                                            <h2>{item.title}</h2>
                                            <div className="footer_service">
                                                <ul className='footer_service_list'>
                                                    <li><a href="#">{item.serviceone}</a></li>
                                                    <li><a href="#">{item.servicetwo}</a></li>
                                                    <li><a href="#">{item.servicethree}</a></li>
                                           
                                                    </ul>
                                            </div>
                                        </div>
                    ))}
                    <div className="footer_lang">
                        <h2>Language</h2>
                        <span><IoIosArrowDown/></span>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="footer_bottom_left">
                <h2>© DaCode. 2020</h2>
                </div>
                <div className="footer_bottom_right">
                    <span>FB</span>
                    <span>TW</span>
                    <span>IG</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer