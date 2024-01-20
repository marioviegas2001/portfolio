import Image from 'next/image';
import Logo from '../public/assets/Logo.png';
import LetsTalk from '../public/assets/contactButton.png';
import { useRouter } from 'next/router';

function Navbar() {
  const router = useRouter();

  const handleNavigation = (route) => {
    router.push(`/${route.toLowerCase()}`);
  };

  return (
    <div className="navbar">
      <div className="left">
        <Image className='logo' onClick={() => handleNavigation('Main')} src={Logo} alt="Website logo" />
      </div>
      <div className="center">
        <span onClick={() => handleNavigation('About')}>ABOUT</span>
        <span onClick={() => handleNavigation('Work')}>WORK</span>
        <span onClick={() => handleNavigation('Socials')}>SOCIALS</span>
      </div>
      <div className="right">
        <Image className='lets-talk' onClick={() => handleNavigation('Contact')} src={LetsTalk} alt="Contact Button" />
      </div>
    </div>
  );
}

export default Navbar;
