import { motion } from 'framer-motion';

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

const variantDescription = {
  initial: {
    translateX: 200,
    opacity: 0,
  },
  animate: {
    translateX: 0,
    opacity: 1,
  },
};

function Intro() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-12 bg-white">
        <motion.div
          variants={variantTitle}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="font-bold text-transparent text-[26px] sm:text-[28px] md:text-[34px] bg-clip-text bg-gradient-to-r from-amber-700 to-green-400"
        >
          Hãy liên hệ với chúng tôi
        </motion.div>
        <motion.div
          variants={variantDescription}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-4 px-4 sm:px-20 lg:px-32 text-gray-400 text-center text-md"
        >
          Đội ngũ của chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn với bất kỳ câu hỏi hoặc yêu cầu nào. Hãy liên hệ với chúng tôi để được giải đáp
          tận tình.
        </motion.div>
      </div>
    </>
  );
}

export default Intro;
