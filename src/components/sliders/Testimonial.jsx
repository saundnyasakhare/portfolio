import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from '@data/sliders/testimonial';

const TestimonialSlider = () => {
  return (
    <>
      <div className="saundyasection-title saundyaup">
          <div className="saundyadivider"></div>
          <h3>{Data.title}</h3>
      </div>

      {/* reviews */}
      <section className="saundyap-90-90">

        <div className="row justify-content-center saundyareviews-slider-frame">
            <div className="col-lg-8">
                <Swiper
                  {...sliderProps.milReviewsSlider}
                  className="swiper-container saundyareviews-slider saundyamb-30"
                >
                  {Data.items.map((item, key) => (
                  <SwiperSlide className="swiper-slide" key={`testimonial-slider-item-${key}`}>

                      <div className="saundyareview saundyacenter" data-swiper-parallax-opacity="0" data-swiper-parallax="-90" data-swiper-parallax-scale=".8">
                          <div className="saundyareview-top">
                              <img src={item.image} alt={item.name} className="saundyaavatar saundyaup" />
                              <div className="saundyaname">
                                  <h4 className="saundyaup saundyamb-5">{item.name}</h4>
                                  <p className="saundyaupper saundyaup">{item.role}</p>
                              </div>
                          </div>
                          <p className="saundyaup">{item.text}</p>
                      </div>

                  </SwiperSlide>
                  ))}
                </Swiper>
            </div>

            <div className="saundyaslider-nav saundyaup">
                <div className="saundyareviews-prev">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>
                <div className="saundyareviews-next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>
            </div>

            <div className="swiper-reviews-pagination saundyaup" />

        </div>

      </section>
      {/* revievs end */}
    </>
  );
};
export default TestimonialSlider;
