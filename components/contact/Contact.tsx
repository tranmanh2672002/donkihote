import { Button, Input, Textarea } from '@mantine/core';
import { motion } from 'framer-motion';

const variantInfo = {
  initial: {
    translateX: -200,
    opacity: 0,
  },
  animate: {
    translateX: 0,
    opacity: 1,
  },
};

const variantForm = {
  initial: {
    translateX: 200,
    opacity: 0,
  },
  animate: {
    translateX: 0,
    opacity: 1,
  },
};

const info = [
  { title: 'Email', content: 'donkihote1994@email.com' },
  { title: 'Số điện thoại', content: '034 264 6543' },
  { title: 'Địa chỉ', content: '383 Gò Gai, Núi Đèo, Thủy Nguyên, Hải Phòng' },
];

function Contact() {
  return (
    <>
      <div className="my-10 flex flex-col md:flex-row items-start justify-center gap-7">
        <motion.div
          variants={variantInfo}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full md:w-80 flex flex-col sm:flex-row md:flex-col gap-6"
        >
          {info?.map((item, index) => {
            return (
              <div key={index}>
                <div className="mb-2 font-semibold text-[#1D263A]">{item.title}</div>
                <div className="font-normal text-gray-400 text-sm">{item.content}</div>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          variants={variantForm}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex-1 w-full"
        >
          <Input size="md" placeholder="Tên của bạn" />
          <div className="flex flex-col lg:flex-row gap-6 my-6">
            <Input size="md" className="flex-1" placeholder="Email" />
            <Input size="md" className="flex-1" placeholder="Số điện thoại" />
          </div>
          <Textarea size="md" placeholder="Ghi chú" />
          <div className="mt-6 flex justify-start sm:justify-end">
            <Button color="dark">Gửi tin nhắn</Button>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Contact;
