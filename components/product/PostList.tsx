'use client';
import { IconCalendarMonth } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from '../../assets/images/logo.png';
import dayjs from 'dayjs';
import Description from './Description';
import { Divider } from '@mantine/core';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IResponseStatus } from '../../interfaces/response.interface';

const variant = {
  initial: {
    translateY: 200,
    opacity: 0,
  },
  animate: {
    translateY: 0,
    opacity: 1,
  },
};

function PostList() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${process.env.API_BASEURL}/post`);
      if (res.data.status === IResponseStatus.success) {
        const data = res.data.data;
        setData(data);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="pt-6">
        {data?.map((item, index) => {
          return (
            <motion.div
              key={index}
              variants={variant}
              initial="initial"
              whileInView="animate"
              transition={{ delay: 0.25, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Post data={item} />
              <Divider className={`${index + 1 === data?.length ? 'hidden' : 'mb-6'}`} />
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

function Post({ data }: any) {
  return (
    <div className="mb-10 flex flex-col items-start gap-3">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative border-2 border-yellow-300 rounded-full w-[40px] h-[40px]">
            <Image src={logo} alt="logo" className="absolute top-[1px] select-none  rounded-full w-[40px] h-[40px]" />
          </div>
          <h4 className="font-semibold text-[17px]">Đôn Kihote</h4>
        </div>
        <div>
          <div className="flex gap-2 items-center text-[14px] md:text-[16px] text-[#374151] font-semibold">
            {dayjs(data?.date).format('DD/MM/YYYY')}
            <IconCalendarMonth size={20} />
          </div>
        </div>
      </div>
      <Description description={data?.description} />
      <div className="w-full">
        <img src={data?.images?.[0]} className="select-none rounded-lg w-[100%] h-[300px] sm:h-[380px] md:h-[480px]" />
      </div>
    </div>
  );
}

export default PostList;
