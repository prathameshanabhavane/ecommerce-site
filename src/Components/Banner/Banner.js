import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Banner.scss';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {
    return(
        <>
            <section className='banner-section'>
                <div className='banner'>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Link to="/product/category/women's clothing">
                                <img src="https://marketplace.canva.com/EAFfT9NH-JU/1/0/1600w/canva-gray-minimalist-fashion-big-sale-banner-TvkdMwoxWP8.jpg" alt="Banner 2" />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/product/category/men's clothing">
                                <img src="https://cdn.venngage.com/template/thumbnail/full/7749b2a8-7679-4716-a5c6-18250ee83ae9.webp" alt="Banner 3" />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/product/category/electronics">
                                <img src="https://i.pinimg.com/736x/f0/f9/e4/f0f9e45724771f16745ad3f6f640d3ce.jpg" alt="Banner 1" />
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}


export default Banner;