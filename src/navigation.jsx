import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';
import clickMp3 from '/sounds/minecraft_click.mp3'; // adjust path

function Navigation() {
  const navigate = useNavigate();
  const [play] = useSound(clickMp3, { volume: 0.5 });

  const handleClick = (path) => {
    play(); // play sound immediately
    setTimeout(() => navigate(path), 100); // small delay to let sound start
  };

  return (
    <div>
      <div className='bg-rect'></div>

      <div className="nav-bar-bg" style={{ top: '11.2963%', left: '23.333%' }} />
      <div className="nav-bar-bg" style={{ top: '11.2963%', left: '48.333%' }} />
      <div className="nav-bar-bg" style={{ top: '11.2963%', left: '73.333%' }} />

      <p className='nav-bar-text' style={{ top: '27%', left: '22%' }}>about me</p>
      <p className='nav-bar-text' style={{ top: '27%', left: '47%' }}>projects</p>
      <p className='nav-bar-text' style={{ top: '27%', left: '75%' }}>work</p>

      <div className='about-me-icon' onClick={() => handleClick('/about-me')} />
      <div className='projects-icon' onClick={() => handleClick('/projects')} />
      <div className='work-icon' onClick={() => handleClick('/work')} />
    </div>
  );
}

export default Navigation;
