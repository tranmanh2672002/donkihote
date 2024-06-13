import SlideShow from './SlideShow';

function Intro() {
  return (
    <div className="flex flex-col lg:flex-row gap-5 my-5">
      <div className="lg:w-[40%]">
        <div className="h-full flex flex-col items-center justify-center gap-5">
          <div className="w-full flex lg:justify-start justify-center">
            <h2 className="w-max text-transparent bg-gradient-to-r from-green-500 to-purple-500 bg-clip-text text-center font-bold lg:text-[36px] text-[30px]">
              NỘI THẤT VIỆT
            </h2>
          </div>
          <p className="lg:text-left text-center font-semibold text-gray-400">
            Thiết kế của chúng tôi không ngừng khám phá những giới hạn mới, mang đến những ý tưởng đột phá và sáng tạo chưa từng có. Từ không gian ẩm
            thực đến nội thất sống, mỗi tác phẩm thiết kế của chúng tôi là một câu chuyện sáng tạo khác biệt, khơi gợi cả vị giác lẫn cảm xúc. Hãy
            cùng chúng tôi vượt ra ngoài những ranh giới truyền thống, khám phá những không gian sống mới lạ và đầy cảm hứng.
          </p>
        </div>
      </div>
      <div className="flex-1 h-[340px]">
        <SlideShow />
      </div>
    </div>
  );
}

export default Intro;
