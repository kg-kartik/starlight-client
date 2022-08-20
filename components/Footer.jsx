import React, { useContext } from 'react';
import { BsWhatsapp, BsInfoSquare } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { useRouter } from 'next/router';

import { ThemeContext } from '../context/theme-context';

const Footer = () => {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);

  return (
    <div className="Footer">
      <div className="footer container">
        <a
          className="footer-link"
          id={`whatsapp-${theme}`}
          href="whatsapp://send?text=Hey !👋🏻, I have been using Identify to get career guidance :  https://identify-app.vercel.app ✨"
          data-action="share/whatsapp/share"
        >
          <BsWhatsapp style={{ marginRight: '0.5rem' }} />
          Share via Whatsapp
        </a>
        <div className="footer-link" onClick={() => router.push('/about')}>
          <BiUserCircle size="18" style={{ marginRight: '0.5rem' }} />
          Made by Team 0xCompyler
        </div>
      </div>
    </div>
  );
};

export default Footer;
