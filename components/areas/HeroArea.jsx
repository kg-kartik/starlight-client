import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import SVG_Illustration from '../../assets/illustration.svg';

import { useRouter } from 'next/router';

export default function HeroSection() {
  const router = useRouter();
  return (
    <div className="HeroSection">
      <div className="container">
        <Fade cascade triggerOnce>
          <div className="left">
            <div className="headline">
              Improved Search <br /> for your platform
            </div>
            <div className="description">
              Build user personalized search APIs without writing a single line
              of code. Integrates seamlessly with existing data sources.
            </div>

            <div className="btn-grp">
              <button
                className="btn accent"
                onClick={() => router.push('/project')}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="right">
            <div className="illustration">
              <Image src={SVG_Illustration} alt="Side Illustration" />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
