import Image from 'next/image';
import Logo from '../public/assets/Logo.png';
import LetsTalk from '../public/assets/contactButton.png';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Navbar() {
  const router = useRouter();

  const handleNavigation = (route) => {
    router.push(`/${route.toLowerCase()}`);
  };

  return (
    <div className="navbar">
      <div className="left">
        <Link href='/'>
          <Image className='logo' src={Logo} alt="Website logo" />
        </Link>
        
      </div>
      <div className="center">
          <Link href='/#about'>
            <span >ABOUT</span>
          </Link>
          <Link href='/#work'>
            <span >WORK</span>
          </Link>
          <Link href='/#socials'>
            <span >SOCIALS</span>
          </Link>
      </div>
      <div className="right">
        <Link href='/#contact'>
          <Image className='lets-talk' src={LetsTalk} alt="Contact Button" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
