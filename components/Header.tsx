import { IconList, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import logo from '../assets/images/logo.png';
import Image from 'next/image';
import { Divider } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const sidebar = [
  {
    title: 'Trang chủ',
    path: '/',
  },
  {
    title: 'Sản phẩm',
    path: '/product',
  },
  {
    title: 'Về chúng tôi',
    path: '/about',
  },
  {
    title: 'Liên hệ',
    path: '/contact',
  },
];

function Sidebar() {
  const pathname = usePathname();
  const [rail, setRail] = useState(false);

  const handleClickNav = () => {
    setRail(!rail);
  };

  return (
    <div className={`fixed top-0 left-0 right-0  z-50 shadow transition-all duration-200 ${'bg-white'} `}>
      <motion.div
        className="flex items-center justify-between max-w-[1200px] m-auto py-4 px-[20px] sm:px-[40px] lg:px-[40]"
        initial={{ translateY: -200 }}
        animate={{ translateY: 0 }}
        transition={{ ease: 'circOut' }}
      >
        <Image src={logo} alt="logo" className="select-none w-[40px] h-[40px] sm:h-[60px] sm:w-[60px]" />
        <ul className="hidden  sm:flex gap-4 md:gap-10">
          {sidebar.map((item, index) => {
            return (
              <li
                className={`transition-all duration-200 ${'text-[#1D263A]'}  text-[16px] font-medium cursor-pointer select-none relative inline-block group`}
              >
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] ${
                    pathname === item.path ? 'bg-green-600' : 'bg-[#1D263A]'
                  }  scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200`}
                ></span>
                <Link className={`link ${pathname === item.path ? `${'text-green-600'}` : ''}`} href={item.path}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <IconList className={`block pa-4 text-2xl cursor-pointer ${'text-[#1D263A]'}  hover:text-opacity-80 sm:hidden`} onClick={handleClickNav} />
        <div
          className={
            rail
              ? 'fixed top-0 right-0 h-full w-[100%] sm:hidden bg-white border-r border-r-slate-200 px-4 ease-in-out duration-500'
              : 'fixed right-[-100%]'
          }
        >
          <div className="flex justify-between items-center py-4">
            <Image src={logo} alt="logo" width={60} height={60} />
            <IconX className="block pa-4 text-xl cursor-pointer text-[#1D263A] hover:text-slate-600" onClick={handleClickNav} />
          </div>
          <Divider className="mb-4" />
          <ul className="flex flex-col gap-6 ">
            {sidebar.map((item, index) => {
              return (
                <li className="w-max text-[#1D263A] text-[16px] font-medium cursor-pointer select-none relative inline-block group">
                  <Link className={`link ${pathname === item.path ? `${'text-green-600'}` : ''}`} href={item.path}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default Sidebar;
