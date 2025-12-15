import resumePdf from '../images/projects-page/Resume.pdf';

function Projects() {
    return (
        <div>
            <div className='text-bg' />

            <div className='mc-siting-pointing' />
            <div className='resume-text' />
            <a href={resumePdf} download>
                <div className='mc-paper' />
            </a>

            <p className='text' style={{top: '37.685%', left: '8.229%'}}>
                <a href="https://saltiesalt.itch.io/vamoose" target="_blank" rel="noopener noreferrer">
                    vamoose
                </a>
                (22-24):
            </p>
            <ul className='text' style={{top: '37.685%', left: '8.229%'}}>
                <li>
                    2nd @ 
                    <a href="https://ignitecsexpo.org/" target="_blank" rel="noopener noreferrer">
                    ignitecs expo
                    </a>
                     (24)
                </li>
                <li>
                    1st @ 
                    <a href="https://gamegala.org/" target="_blank" rel="noopener noreferrer">
                    game gala
                    </a>
                     (23)
                </li>
                <li>judge's favorite @ <br /> 
                    <a href="https://online.coolestprojects.org/" target="_blank" rel="noopener noreferrer">
                        coolest projects
                        </a>
                     (24)
                </li>
                
            </ul>

            <p className='text' style={{top: '65%', left: '8.229%'}}>
                <a href="https://www.stumblingcat.com/" target="_blank" rel="noopener noreferrer">
                    stumbling cat 
                </a>
                (24-25):
            </p>
            <ul className='text' style={{top: '65%', left: '8.229%'}}>
                <li>game design intern</li>
                <li>implemented puzzles, <br />quests, and boss fight</li>
            </ul>

            <p className='text' style={{top: '37.685%', left: '48.11%'}}>
                <a href="https://scottmc.itch.io/mail-mares" target="_blank" rel="noopener noreferrer">
                    mail mares
                </a>
                 (25-now):
            </p>
            <ul className='text' style={{top: '37.685%', left: '48.11%'}}>
                <li>programmer</li>
                <li>implemented map functionality</li>
            </ul>

            <p className='text' style={{top: '54%', left: '48.11%'}}>
                this website!
            </p>

        </div>
    )
}

export default Projects;