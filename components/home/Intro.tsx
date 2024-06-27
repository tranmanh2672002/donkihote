import SlideShow from './SlideShow';
import { motion } from 'framer-motion';

function Intro() {
  return (
    <div className="flex flex-col lg:flex-row gap-5 my-5">
      <div className="lg:w-[40%]">
        <motion.div
          className="h-full flex flex-col items-center justify-center gap-5"
          initial={{ translateX: -2000, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{ delay: 0.25, ease: 'circOut' }}
        >
          <div className="w-full flex lg:justify-start justify-center">
            <h2 className="w-max text-transparent bg-gradient-to-r from-green-600 to-amber-600 bg-clip-text text-center font-bold lg:text-[36px] text-[30px]">
              NỘI THẤT VIỆT
            </h2>
          </div>
          <p className="lg:text-left text-center font-light text-gray-400">
            Thiết kế của chúng tôi không ngừng khám phá những giới hạn mới, mang đến những ý tưởng đột phá và sáng tạo chưa từng có. Từ không gian ẩm
            thực đến nội thất sống, mỗi tác phẩm thiết kế của chúng tôi là một câu chuyện sáng tạo khác biệt, khơi gợi cả vị giác lẫn cảm xúc. Hãy
            cùng chúng tôi vượt ra ngoài những ranh giới truyền thống, khám phá những không gian sống mới lạ và đầy cảm hứng.
          </p>
        </motion.div>
      </div>
      <motion.div
        className="flex-1 h-[340px]"
        initial={{ translateX: 2000 }}
        animate={{ translateX: 0 }}
        transition={{ delay: 0.25, ease: 'circOut' }}
      >
        <SlideShow />
      </motion.div>
    </div>
  );
}

export default Intro;
