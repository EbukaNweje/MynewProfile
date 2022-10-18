import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Recommendations = () => {
  return (
    <div className='RecommendationsBody'>
        <Swiper
        className='Desktop'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='RecommendationsCard'>
        <div className='RecommendationsCardBody'>
            <div className='RecommendationsCardBodyProfile'></div>
            <h3>Paul Trueman</h3>
            <span>Template author</span>
            <p>
                 Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur! This is easily a 5 star freelancer.
            </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='RecommendationsCard'>
        <div className='RecommendationsCardBody'>
            <div className='RecommendationsCardBodyProfile'></div>
            <h3>Paul Trueman</h3>
            <span>Template author</span>
            <p>
                 Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur! This is easily a 5 star freelancer.
            </p>
        </div>
      </SwiperSlide>
    </Swiper>
        <Swiper
        className='mobile'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='RecommendationsCard'>
        <div className='RecommendationsCardBody'>
            <div className='RecommendationsCardBodyProfile'></div>
            <h3>Paul Trueman</h3>
            <span>Template author</span>
            <p>
                 Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur! This is easily a 5 star freelancer.
            </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='RecommendationsCard'>
        <div className='RecommendationsCardBody'>
            <div className='RecommendationsCardBodyProfile'></div>
            <h3>Paul Trueman</h3>
            <span>Template author</span>
            <p>
                 Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur! This is easily a 5 star freelancer.
            </p>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Recommendations