import Data from "@data/sections/related-portfolio.json";
import Link from "next/link";

const RelatedPortfolioSection = ( Content ) => {

    return (
        <>
        <div className="saundyasection-title saundyaup">
            <div className="saundyadivider" />
            <h3>{Data.title}</h3>
        </div>

        {/* similar portfolio */}
        <section className="saundyap-90-30">
            <div className="row justify-content-between align-items-center">
                {Content.items.slice(0, Data.numOfItems).map((item, key) => (
                <div className="col-lg-6" key={`portfolio-item-${item.id}`}>

                    <Link href={`/portfolio/${item.id}`} className="saundyaportfolio-item saundyamb-60">
                        <div className="saundyacover-frame saundyaup">
                            <img src={item.image} alt={item.title} />
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

                </div>
                ))}
            </div>

        </section>
        {/* similar portfolio end */}

        </>
    );
};

export default RelatedPortfolioSection;