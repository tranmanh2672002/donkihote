import { IconLeaf, IconFileShredder, IconAugmentedReality } from '@tabler/icons-react';
import { motion } from 'framer-motion';

const data = [
  {
    title: 'Thương hiệu Việt',
    description:
      'Với nhiều năm kinh nghiệm trong lĩnh vực thiết kế nội thất, chúng tôi tự hào mang đến những giải pháp thẩm mỹ và thực dụng đúng mong muốn nhu cầu của khách hàng.',
    icon: <IconLeaf className={`text-green-500`} size={34} />,
  },
  {
    title: 'Thiết kế và thi công',
    description:
      'Với đội ngũ thi công tận tâm và quy trình quản lý dự án chặt chẽ, chúng tôi cam kết hoàn thành mọi công trình nội thất của khách hàng trong thời gian nhanh nhất, đảm bảo chất lượng tối ưu.',

    icon: <IconFileShredder className={`text-green-500`} size={34} />,
  },

  {
    title: 'Độ tin cậy cao',
    description:
      'Tự hào là nhà cung cấp dịch vụ thi công nội thất uy tín hàng đầu, chúng tôi cam kết mang đến không gian sống hoàn hảo cho mọi gia đình với chất lượng dịch vụ đáng tin cậy.',
    icon: <IconAugmentedReality className={`text-green-500`} size={34} />,
  },
];

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

function SavingGrace() {
  return (
    <div className="flex flex-col md:flex-row gap-10 my-20">
      {data?.map((item, index) => {
        return <Card key={index} data={item} />;
      })}
    </div>
  );
}

function Card({ data }: any) {
  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      variants={variants}
      transition={{ delay: 0.5 }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {data?.icon}
      <div className="font-medium uppercase text-[#1D263A]">{data?.title}</div>
      <div className="text-[15px] text-[#1D263A] text-center">{data?.description}</div>
    </motion.div>
  );
}

export default SavingGrace;
