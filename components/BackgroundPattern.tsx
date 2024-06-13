import Image from 'next/image';
import background from '../assets/images/background.png';

function BackgroundPattern() {
  return (
    <div>
      <Image src={background} alt="bg" className="fixed top-0 left-0 right-0 z-0 bg-cover" />
    </div>
  );
}

export default BackgroundPattern;
