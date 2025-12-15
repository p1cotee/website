import { Link } from "react-router-dom";

function Navigation(){
    return(
        <div>
            <div className='bg-rect'></div>
            <div className='nav-bar-about-me'></div>
            <div className='nav-bar-projects'></div>
            <div className='nav-bar-work'></div>

            <p className='nav-bar-text' style={{top: '27%', left: '22%'}}>
                about me
            </p>
            <p className='nav-bar-text' style={{top: '27%', left: '47%'}}>
                projects
            </p>

            <p className='nav-bar-text' style={{top: '27%', left: '75%'}}>
                work
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


            
        </div>
    );
}

export default Navigation;