import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";

const PortfolioSlider = ( { portfolio } ) => {
  return (
    <>
        <section className="saundyap-90-0">
            <div className="row">
                <div className="col-lg-9">
                    <Swiper
                        {...sliderProps.milPortfolioCarousel}
                        className="saundyaswiper-container saundyaportfolio-carousel saundyaup"
                    >
                            {portfolio.map((item, key) => (
                            <SwiperSlide className="swiper-slide" key={`portfolio-item-${key}`}>

                                <div className="saundyaportfolio-item saundyaitem-2 saundyacarousel-item">
                                    <div className="saundyacover-frame">
                                        <img src={item.image} alt={item.title} data-swiper-parallax="-130" data-swiper-parallax-scale="1.25" />
                                    </div>
                                    <div className="saundyadescription" data-swiper-parallax-y="-100%" data-swiper-parallax-duration="400">
                                        <h4>{item.title}</h4>
                                        <Link href={`/portfolio/${item.id}`} className="saundyabtn">View portfolio</Link>
                                    </div>
                                </div>

                            </SwiperSlide>
                            ))}
                    </Swiper>

                </div>
                <div className="col-lg-3">
                    <div className="saundyacarousel-nav">
                        <div className="saundyacarousel-nav-arrow saundyaportfolio-prev">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </div>
                        <div className="saundyacarousel-nav-arrow saundyaportfolio-next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </div>
                        <div className="saundyaportfolio-pagination saundyaupper saundyadark" />
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};
export default PortfolioSlider;
