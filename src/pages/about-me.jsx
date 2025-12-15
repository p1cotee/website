import AboutMeTextBody from "../components/AboutMeTextBody";
import '../App.css';


function AboutMe() {
    return (
        <div>
            <div className='text-bg' />

            <div className="ni-hao"></div>
            <div className='mc-pointing' />
            <div className='profile-pic' />


            <p className='text' style={{top: '37.685%', left: '8.229%'}}>
                main interests:
            </p>
            <ul className='text' style={{top: '37.685%', left: '8.229%'}}>
                <li>game development</li>
                <li>software engineering</li>
                <li>ai</li>
                <li>computer modeling</li>
            </ul>

            <p className='text' style={{top: '65%', left: '8.229%'}}>
                hobbies:
            </p>
            <ul className='text' style={{top: '65%', left: '8.229%'}}>
                <li>video games</li>
                <li>tennis + biking</li>
                <li>flute</li>
            </ul>

            <p className='text' style={{top: '37.685%', left: '44.11%'}}>
                languages (fluent):
            </p>
            <ul className='text' style={{top: '37.685%', left: '44.11%'}}>
                <li>english</li>
                <li>mandarin</li>
            </ul>

            <p className='about-me-name-text' style={{top: '68.611%', left: '71.570%'}}>
                Isabel Wang
            </p>

            <p className='about-me-info-text' style={{top: '74.9074%', left: '77.1583%'}}>
                us citizen
            </p>
            <p className='about-me-info-text' style={{top: '78.1184%', left: '71.570%'}}>
                cse major @ uc irvine
            </p>
            <p className='about-me-info-text' style={{top: '81.3%', left: '71.570%'}}>
                based in bellevue, wa
            </p>
        
        </div>
  );
}

export default AboutMe;