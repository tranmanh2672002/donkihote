import { IconCalendarMonth, IconMapPin, IconTopologyStar3 } from '@tabler/icons-react';
import product1 from '../../assets/images/product/p11.jpg';
import product2 from '../../assets/images/product/p12.jpg';
import product3 from '../../assets/images/product/p13.jpg';
import product4 from '../../assets/images/product/p14.jpg';
import product5 from '../../assets/images/product/p15.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';

const data = [
  {
    date: '25/06/2024',
    description: 'Đảo Vũ Yên, Hải Phòng',
    image: product1,
  },
  {
    date: '16/04/2024',
    description: 'Đông Hưng, Thái Bình',
    image: product2,
  },
  {
    date: '06/01/2024',
    description: 'Núi Đèo, Hải Phòng',
    image: product3,
  },
  {
    date: '11/08/2023',
    description: 'Uông Bí, Quảng Ninh',
    image: product4,
  },
  {
    date: '18/02/2023',
    description: 'Giao Thuỷ, Nam Định',
    image: product5,
  },
];

const variantTitle = {
  initial: {
    translateX: -200,
    opacity: 0,
  },
  animate: {
    translateX: 0,
    opacity: 1,
  },
};

const variantInfo = {
  initial: {
    translateY: 100,
    opacity: 0,
  },
  animate: {
    translateY: 0,
    opacity: 1,
  },
};

const variantImage = {
  initial: {
    translateY: 100,
    opacity: 0,
  },
  animate: {
    translateY: 0,
    opacity: 1,
  },
};

function Product() {
  return (
    <>
      <div className="relative h-[2px] bg-[#ebebeb]  mb-20">
        <div className="absolute right-[50%] translate-x-[50%] top-[-6px] w-16 h-4 bg-white flex items-center justify-center">
          <IconTopologyStar3 color="#ebebeb" size={40} />
        </div>
      </div>
      <div className="mt-30">
        <motion.div
          variants={variantTitle}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 0.25, duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-4 font-bold text-transparent text-[26px] sm:text-[28px] md:text-[34px] bg-clip-text bg-gradient-to-r from-amber-700 to-green-400"
        >
          Sản phẩm nổi bật
        </motion.div>
        {data?.map((item, index) => {
          return <Post key={index} data={item} />;
        })}
      </div>
    </>
  );
}

function Post({ data }: any) {
  return (
    <div className="mb-10 flex flex-col items-start gap-3">
      <motion.div variants={variantInfo} transition={{ delay: 0.25 }} initial="initial" whileInView="animate" viewport={{ once: true }}>
        <div className="mb-2 flex gap-2 items-center font-medium text-[16px] md:text-[22px] text-[#1D263A]">
          <IconMapPin size={20} /> {data?.description}
        </div>
        <div className="flex gap-2 items-center text-[14px] md:text-[16px] text-[#374151] font-semibold">
          <IconCalendarMonth size={20} />
          {data?.date}
        </div>
      </motion.div>
      <motion.div
        variants={variantImage}
        transition={{ delay: 0.25 }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="w-full"
      >
        <Image src={data?.image} alt="logo" className="select-none rounded-lg w-[100%] h-[280px] sm:h-[380px] md:h-[640px]" />
      </motion.div>
    </div>
  );
}

export default Product;
