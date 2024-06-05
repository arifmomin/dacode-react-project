import React from 'react'
import reality from "../../image/reality.png"
import "./Reality.css"

const Reality = () => {
    const reality_item = [
        {
            id: 1,
            title: `You r Idea`,
            description: `In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.`,
        },
        {
            id: 2,
            title: `Strategy meeting`,
            description: `This meeting will be a meeting where we together go over our proposed strategy on how we can reach your website goals. Here we will establish a project update system where you will be able to follow the whole process from start to finish.`,
        },
        {
            id: 3,
            title: `Agile and Scrum framework`,
            description: `In this step we will have a team meeting with the project manager and the lead developer and designer. Then we will be working using and agile and scrum framework in order to make sure to deliver your project on time and within budget.`,
        },
        {
            id: 4,
            title: `Your website goes live`,
            description: `The final checks of the website will happen, we will make sure that all tracking pixels, links and user interface is compatible with all different devices. We will also perform a few different tests to make sure that the website is optimised for user experience.`,
        }
    ]
  return (
    <div className='reality_part'>
        <div className="container">
            <div className="reality_title">
                <h2>Your idea into <span>reality</span></h2>
                <p>We start every web development project with a project manager from daCode interviewing you about the goal with the project. This is for us to be able to come up with a solution for your SaaS business, estimate a timeline, and come up with a budget.</p>
            </div>
            <div className="reality_mian_parrent">
            <div className="reality_parrent">
                {reality_item.map((item)=>(
               <div className="reality_item">
               <div className="reality_number">
                   <span>{item.id}</span>
                   </div>
                   <div className="reality_content">
                       <h3>{item.title}</h3>
                       <h4>{item.description}</h4>
               </div>
              </div>
                ))}

            </div>
            <div className="reality_right_img">
                <picture><img src={reality} alt={reality} /></picture>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Reality