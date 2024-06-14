import {Link} from 'react-router-dom'
import { useState } from 'react';
import { IoMenuSharp } from "react-icons/io5";


const Header = () => {
    const [isTrue,setTrue] = useState(false)
    const onClickMenu = () => {
        setTrue(prev=>!prev)
    }

    const linkClassName = isTrue ? "link-container" : "hide-link-container"

    return (
    <>
    <nav className='nav-container-desktop'>
        <Link to ="/" className='nav-link'><h2 className='name'>Portfolio</h2></Link>
        <ul className='desktop-link-container'>
            <Link to = "/" className='nav-link'><li>Home</li></Link>
            <Link to = "/projects" className='nav-link'><li>Projects</li></Link>
            <Link to = "/about" className='nav-link'><li>About</li></Link>
            <Link to = "/contact" className='nav-link'><li>Contact</li></Link>
        </ul>
    </nav>
    <nav className='nav-container'>
        <Link to ="/" className='nav-link'><h2 className='name'>Portfolio</h2></Link>
        <IoMenuSharp className='menu-icon' onClick = {onClickMenu}/>
    </nav>
    <ul className= {linkClassName}>
            <Link to = "/" className='nav-link'><li>Home</li></Link>
            <Link to = "/projects" className='nav-link'><li>Projects</li></Link>
            <Link to = "/about" className='nav-link'><li>About</li></Link>
            <Link to = "/contact" className='nav-link'><li>Contact</li></Link>
        </ul>
    </>
    
)
}
export default Header