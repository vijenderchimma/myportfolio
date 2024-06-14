import React from 'react'
import Header from './Header'
import data from './data'
import ProjectList from './ProjectList'
import { v4 as uuidv4 } from 'uuid'

const Projects = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    return (
        <>
        <div className='project-container'>
            <Header />
            <div>
                <h2 className='project-heading'>Projects</h2>
                    <ul className='project-list-container'>
                        {data.map(project => (
                            <ProjectList project={project} key={uuidv4()} />
                        ))}
                    </ul>
            </div>
        </div>
        </>
    )
}

export default Projects