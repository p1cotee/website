import { Link } from "react-router-dom";

function Navigation(){
    return(
        <div>
            <div className='bg-rect'></div>
            <div className='nav-bar-about-me'></div>
            <div className='nav-bar-projects'></div>
            <div className='nav-bar-work'></div>
            <div className='nav-bar-links'></div>

            <p className='nav-bar-text' style={{top: '27%', left: '12.5%'}}>
                about me
            </p>
            <p className='nav-bar-text' style={{top: '27%', left: '34%'}}>
                projects
            </p>

            <p className='nav-bar-text' style={{top: '27%', left: '58.3%'}}>
                work
            </p>

            <p className='nav-bar-text' style={{top: '27%', left: '79%'}}>
                links
            </p>
            
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