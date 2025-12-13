import { Link } from "react-router-dom";

function Navigation(){
    return(
        <div>
            <div className='bg-rect'></div>
            <div className='nav-bar-about-me'></div>
            <div className='nav-bar-projects'></div>
            <div className='nav-bar-work'></div>
            <div className='nav-bar-links'></div>
            
            <Link to='/about-me'>
                <div className='about-me-icon'></div>
            </Link>
            <Link to='/projects'>
                <div className='projects-icon'></div>
            </Link>
            <Link to='/work'>
                <div className='work-icon'></div>
            </Link>
            <Link to='links'>
                <div className='links-icon'></div>
            </Link>
        </div>
    );
}

export default Navigation;