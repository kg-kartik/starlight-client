import Image from 'next/image';
import { useRouter } from 'next/router';
import SVG_Logo from '../assets/logo.svg';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { BiLogOutCircle } from 'react-icons/bi';

const Header = () => {
  const router = useRouter();

  return (
    <div className="Header">
      <div className="container">
        <figure onClick={() => router.push('/')}></figure>
      </div>
    </div>
  );
};

export default Header;
