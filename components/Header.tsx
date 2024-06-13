import { IconList, IconX } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import Image from 'next/image';
import { Divider } from '@mantine/core';
import Link from 'next/link';
function Sidebar() {
  const [rail, setRail] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleClickNav = () => {
    setRail(!rail);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`fixed top-0 left-0 right-0  z-50 shadow transition-all duration-200 ${scrollPosition > 200 ? 'bg-[#b7c4c5]' : 'bg-white'} `}>
      <div className="flex items-center justify-between max-w-[1200px] m-auto py-4 px-[20px] sm:px-[40px] lg:px-[40]">
        <Image src={logo} alt="logo" width={60} height={60} className="select-none" />
        <ul className="hidden  sm:flex gap-4 md:gap-10">
          <li
            className={`transition-all duration-200 ${
              scrollPosition > 200 ? 'text-white' : 'text-[#1D263A]'
            }  text-[18px] font-medium cursor-pointer select-none relative inline-block group`}
          >
            <span
              className={`absolute bottom-0 left-0 w-full h-[2px] ${
                scrollPosition > 200 ? 'bg-white' : 'bg-[#1D263A]'
              }  scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200`}
            ></span>
            <Link href="/">Trang chủ</Link>
          </li>
          <li
            className={`transition-all duration-200 ${
              scrollPosition > 200 ? 'text-white' : 'text-[#1D263A]'
            }  text-[18px] font-medium cursor-pointer select-none relative inline-block group`}
          >
            <span
              className={`absolute bottom-0 left-0 w-full h-[2px] ${
                scrollPosition > 200 ? 'bg-white' : 'bg-[#1D263A]'
              }  scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200`}
            ></span>
            <Link href="/product">Sản phẩm</Link>
          </li>
          <li
            className={`transition-all duration-200 ${
              scrollPosition > 200 ? 'text-white' : 'text-[#1D263A]'
            }  text-[18px] font-medium cursor-pointer select-none relative inline-block group`}
          >
            <span
              className={`absolute bottom-0 left-0 w-full h-[2px] ${
                scrollPosition > 200 ? 'bg-white' : 'bg-[#1D263A]'
              }  scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200`}
            ></span>
            <Link href="/about">Về chúng tôi</Link>
          </li>
          <li
            className={`transition-all duration-200 ${
              scrollPosition > 200 ? 'text-white' : 'text-[#1D263A]'
            }  text-[18px] font-medium cursor-pointer select-none relative inline-block group`}
          >
            <span
              className={`absolute bottom-0 left-0 w-full h-[2px] ${
                scrollPosition > 200 ? 'bg-white' : 'bg-[#1D263A]'
              }  scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200`}
            ></span>
            <Link href="/contact">Liên hệ</Link>
          </li>
        </ul>
        <IconList
          className={`block pa-4 text-2xl cursor-pointer ${scrollPosition > 200 ? 'text-white' : 'text-[#1D263A]'}  hover:text-opacity-80 sm:hidden`}
          onClick={handleClickNav}
        />
        <div
          className={
            rail
              ? 'fixed top-0 left-0 h-full w-[60%] sm:hidden bg-white border-r border-r-slate-200 px-4 ease-in-out duration-500'
              : 'fixed left-[-100%]'
          }
        >
          <div className="flex justify-between items-center py-4">
            <Image src={logo} alt="logo" width={60} height={60} />
            <IconX className="block pa-4 text-xl cursor-pointer text-[#1D263A] hover:text-slate-600" onClick={handleClickNav} />
          </div>
          <Divider className="mb-4" />
          <ul className="flex flex-col gap-6 ">
            <li className="w-max text-[#1D263A] text-[18px] font-[18px] cursor-pointer select-none relative inline-block group">
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
              Trang chủ
            </li>
            <Divider />
            <li className="w-max text-[#1D263A] text-[18px] font-[18px] cursor-pointer select-none relative inline-block group">
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
              Sản phẩm
            </li>
            <Divider />
            <li className="w-max text-[#1D263A] text-[18px] font-[18px] cursor-pointer select-none relative inline-block group">
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
              Về chúng tôi
            </li>
            <Divider />
            <li className="w-max text-[#1D263A] text-[18px] font-[18px] cursor-pointer select-none relative inline-block group">
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
              Liên hệ
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
