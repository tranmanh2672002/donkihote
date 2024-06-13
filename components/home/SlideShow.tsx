import Image from 'next/image';
import intro1 from '../../assets/images/intro/intro1.jpg';
import intro2 from '../../assets/images/intro/intro2.jpg';
import intro3 from '../../assets/images/intro/intro3.jpg';
import intro4 from '../../assets/images/intro/intro4.jpg';
import intro5 from '../../assets/images/intro/intro5.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function SlideShow() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={'fade'}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="!w-[340px] !h-[240px] sm:!w-[600px] sm:!h-[340px] rounded-xl"
      >
        <SwiperSlide>
          <Image className="bg-cover" src={intro1} alt="intro1" />
        </SwiperSlide>
        <SwiperSlide className="w-[400px]">
          <Image className="bg-cover" src={intro2} alt="intro1" />
        </SwiperSlide>
        <SwiperSlide className="w-[400px]">
          <Image className="bg-cover" src={intro3} alt="intro1" />
        </SwiperSlide>
        <SwiperSlide className="w-[400px]">
          <Image className="bg-cover" src={intro4} alt="intro1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-full" src={intro5} alt="intro1" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SlideShow;
