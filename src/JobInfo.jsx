import React from 'react'
import Duties from "./Duties.jsx";
const JobInfo = ({jobs,currentItem}) => {
    const {title,company,dates,duties} = jobs[currentItem] || [];
    return(
        <article className=''>
                <h5>{title}</h5>
                <h4 className='job-company'>{company}</h4>
                <p className='job-date'>{dates}</p>
            <Duties duties={duties}/>
        </article>
    )
}

export default JobInfo