import { Link } from 'react-router-dom'
import Header from './Header'
import { profileImage } from './data'
import { FaGithub } from "react-icons/fa";


const Home = () => (
    <div className='home-container'>
        <Header />
        <div className='home-card-container'>
            <div>
                <p className='role'>MERN Stack Developer</p>
                <h3>Hello, My name is Vijender Chimma</h3>
                <p>My name is Vijender Chimma. I have hands on experience with MERN Stack Development. I had worked on Projects like Nxttrendz application which similar to amazon, Foodie Application which is similar to swiggy.</p>
                <div className='button-container'>
                    <button className='projects-button'><Link to="/projects" className='nav-link'>Projects</Link></button>
                    <a href="https://github.com/vijenderchimma" target='_blank' rel='noreferrer'><button className='github-button'><FaGithub /> Git Hub</button></a>
                </div>
            </div>
            <img src={profileImage} alt="vijender" className='profile-image' />
        </div>

    </div>
)

export default Home