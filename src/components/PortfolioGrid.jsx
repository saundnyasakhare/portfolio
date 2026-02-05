import Link from "next/link";
import basePath from "@common/basePath";

const PortfolioGrid = ({ portfolio, columns }) => {
    let colClasses = "col-lg-12";

    switch (columns) {
        case 1 : colClasses = "col-lg-12"; break;
        case 2 : colClasses = "col-lg-6"; break;
        default : colClasses = "col-lg-12"; break;
    }

    return (
      <>
        {/* portfolio */}
        <section>
            <div className="row">
                {portfolio.map((item, key) => (
                <div className={colClasses} key={`portfolio-item-${key}`}>
                    {columns == 1 &&
                    <Link href={`/portfolio/${item.id}`} className="saundyaportfolio-item saundyaitem-2 saundyaup saundyamb-60">
                        <div className="saundyacover-frame">
                            <img src={`${basePath}${item.image}`} alt={item.title} data-swiper-parallax="-130" data-swiper-parallax-scale="1.25" />
                        </div>

                        <div className="saundyadescription" data-swiper-parallax-y="-100%" data-swiper-parallax-duration="400">
                            <h4>{item.title}</h4>
                            <div className="saundyabtn">View portfolio</div>
                        </div>
                    </Link>
                    }
                    {columns != 1 &&
                    <Link href={`/portfolio/${item.id}`} className="saundyaportfolio-item saundyamb-60">
                        <div className="saundyacover-frame saundyaup">
                            <img src={`${basePath}${item.image}`} alt={item.title} />
                        </div>
                        <div className="saundyadescription saundyaup">
                            <div>
                                <p className="saundyaupper saundyamb-5">{item.category}</p>
                                <h4>{item.title}</h4>
                            </div>
                            <div className="saundyalink saundyaicon-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                    }
                </div>
                ))}

            </div>
        </section>
        {/* portfolio end */}
      </>
    );
};
export default PortfolioGrid;
  