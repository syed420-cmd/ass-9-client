import { Typography } from '@material-tailwind/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const Banner = () => {
  return (
    <div>


      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide className='w-full'>
          <img className='w-full h-[550px]' src="https://wallpapercave.com/wp/wp4110681.jpg" alt="" />
        </SwiperSlide>

        <SwiperSlide className='w-full'>
          <img className='w-full h-[550px]' src="https://wallpapers.com/images/hd/big-mansion-with-palm-trees-5692l6vwcj1hmc5k.jpg" alt="" />
        </SwiperSlide>

        <SwiperSlide className='w-full'>
          <img className='w-full h-[550px]' src="https://w.forfun.com/fetch/2e/2e0ba48344e712324203d0f5d50d4c58.jpeg" alt="" />
        </SwiperSlide>
        ...
      </Swiper>
    </div >
  );
};
export default Banner;
