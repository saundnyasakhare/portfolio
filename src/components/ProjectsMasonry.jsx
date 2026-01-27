import React from "react";
import Link from "next/link";

const PortfolioMasonry = ({ portfolio }) => {
    const portfolioRows = [];

    for (var i = 0; i < portfolio.length; i += 2 ) {
        portfolioRows.push(portfolio.slice(i, 2 + i));
    }
    
    return (
      <>
        {/* portfolio */}
        <section>
            <div className="row align-items-center justify-content-between">
                {portfolioRows.map((row, row_key) => (
                <React.Fragment key={`portfolio-item-${row_key}`}>
                    {row.map((item, key) => (
                    <div className={row_key%2==0 ? key%2 == 0 ? "col-lg-5" : "col-lg-6" : key%2 == 0 ? "col-lg-6" : "col-lg-5"} key={`portfolio-item-${row_key}-${key}`}>
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
                </React.Fragment>
                ))}

            </div>
        </section>
        {/* portfolio end */}
      </>
    );
};
export default PortfolioMasonry;
  