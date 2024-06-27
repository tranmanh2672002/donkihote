import Image from 'next/image';
import logo from '../assets/images/logo.png';
import { ActionIcon } from '@mantine/core';
import { IconBrandFacebook, IconBrandTelegram, IconPhone, IconBrandTwitter, IconBrandSkype } from '@tabler/icons-react';
import { LazyMotion, domAnimation, motion, useInView } from 'framer-motion';

const variants = {
  initial: {
    translateY: 200,
    opacity: 0,
  },
  animate: {
    translateY: 0,
    opacity: 1,
  },
};

function Footer() {
  return (
    <motion.div className="border-t-[1px] border-[#ccc] py-10" variants={variants} initial="initial" whileInView="animate" viewport={{ once: true }}>
      <div className="flex justify-center">
        <Image src={logo} alt="logo" width={60} height={60} className="select-none " />
      </div>
      <div className="uppercase text-center font-bold text-[#2c3a58] text-[18px]">Nội thất việt</div>
      <div className="flex justify-center gap-5 my-10">
        <ActionIcon variant="filled" size={'lg'} color="gray">
          <IconBrandFacebook size={18} />
        </ActionIcon>
        <ActionIcon variant="filled" size={'lg'} color="gray">
          <IconBrandTelegram size={18} />
        </ActionIcon>
        <ActionIcon variant="filled" size={'lg'} color="gray">
          <IconPhone size={18} />
        </ActionIcon>
        <ActionIcon variant="filled" size={'lg'} color="gray">
          <IconBrandTwitter size={18} />
        </ActionIcon>
        <ActionIcon variant="filled" size={'lg'} color="gray">
          <IconBrandSkype size={18} />
        </ActionIcon>
      </div>
      <div className="text-center text-sm text-[#1D263A]">© 2024 Donkihote. By Manhtv</div>
    </motion.div>
  );
}

export default Footer;
