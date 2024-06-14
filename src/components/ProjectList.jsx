import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Projectlist = (props) => {
  const { project } = props

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }




  return (
    <li>
      <Slider {...settings}>
        {project.images.map((item) => {
          return (
            <img src={item.image} alt="carousel" className="carousel-image" />
          )
        })}
      </Slider>
      <h3 className='project-name'>{project.projectName}</h3>
      <a href={project.projectUrl} target='_blank' className='project-url'>{project.projectUrl}</a><br/>
      {project.pdfFile && <a href={project.pdfFile} className='project-pdf' target='_blank' rel="noopener noreferrer">
        Open PDF
      </a>}
    </li>

  )
}

export default Projectlist