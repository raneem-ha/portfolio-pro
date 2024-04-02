import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './swip.css';
import { useRef } from 'react';

const swip = ({ images }) => {

    return (
        <div className='container-info'>
            <div className='info'>

                <p> I  use these languages and techniqes to design and develope websites
                </p>
            </div>
            <Swiper className='sw'
                modules={[Autoplay]}
                spaceBetween={25}
                slidesPerView={6}
                speed={10000}
                loop={true}
                autoplay={{
                    delay: 0
                }}

                freeMode={true}




                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    320: {

                        slidesPerView: 3,
                        spaceBetween: 10,

                    },
                    500: {

                        slidesPerView: 5,
                        spaceBetween: 10
                    },
                    932: {

                        slidesPerView: 6,
                        spaceBetween: 30
                    }
                }
                }


            >
                <div class="swiper-wrapper">
                    <SwiperSlide><img src={images.img1}></img></SwiperSlide>
                    <SwiperSlide><img src={images.img2}></img></SwiperSlide>
                    <SwiperSlide><img src={images.img3}></img></SwiperSlide>
                    <SwiperSlide><img src={images.img4}></img></SwiperSlide>
                    <SwiperSlide><img src={images.img5}></img></SwiperSlide>
                    <SwiperSlide><img src={images.img6}></img></SwiperSlide>
                    <SwiperSlide><img src={images.img7}></img></SwiperSlide>
                    <SwiperSlide><img src={images.img8}></img></SwiperSlide>
                    <SwiperSlide><img src={images.img9}></img></SwiperSlide>


                </div>

            </Swiper>
        </div >
    )
}

export default swip