import React from "react";
import Data from "@data/sections/pricing.json";
import Link from "next/link";

const PricingSection = () => {
    
    return (
        <>
        <div className="saundyasection-title saundyaup">
            <div className="saundyadivider" />
            <h3>{Data.title}</h3>
        </div>

        {/* prices */}
        <section className="saundyap-90-60">
            <div className="row">
                {Data.items.map((item, key) => (
                <div key={`pricing-item-${key}`} className="col-lg-6">

                    <div className="saundyaprice-card saundyaup saundyamb-30">
                        <h4 className="saundyaupper saundyaaccent saundyaup saundyamb-30">{item.name}</h4>

                        <div className="saundyaprice-number saundyaup saundyamb-30">{item.price.value} <span>{item.price.after}</span></div>

                        <div className="saundyadivider saundyaup saundyamb-30" />

                        <ul className="saundyamb-60">
                            {item.list.map((element, key2) => (
                            <React.Fragment key={`pricing-item-${key}-list-${key2}`}>
                                { element.active == 1 &&
                                <li className="saundyaup">{element.value}</li>
                                }
                                { element.active != 1 &&
                                <li className="saundyaup saundyaempty">{element.value}</li>
                                }
                            </React.Fragment>
                            ))}
                        </ul>

                        <Link href={item.button.link} className="saundyalink saundyaup">
                            <span>{item.button.label}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </Link>
                    </div>

                </div>
                ))}
            </div>
        </section>
        {/* prices end */}
        </>
    );
};

export default PricingSection;