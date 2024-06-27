import React, { useState, useEffect } from 'react';
import { IconChevronUp } from '@tabler/icons-react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`fixed z-50 bottom-10 right-10 p-2 rounded-full bg-amber-900 shadow-sm animate-bounce cursor-pointer hidden sm:block ${
        visible ? '' : '!hidden'
      }`}
    >
      <IconChevronUp color="#fff" size={30} />
    </div>
  );
};

export default ScrollToTop;
