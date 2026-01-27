import Data from "@data/sections/related-posts.json";
import Date from '@library/date';
import Link from "next/link";

const RelatedPostsSection = ( Content ) => {

    return (
        <>
            <div className="saundyasection-title saundyaup">
                <div className="saundyadivider" />
                <h3>{Data.title}</h3>
            </div>

            {/* blog */}
            <section className="saundyap-90-30">
                <div className="row justify-content-between align-items-center">
                    {Content.items.slice(0, Data.numOfItems).map((item, key) => (
                    <div key={`related-post-${key}`} className="col-lg-6">

                        <a href={`/blog/${item.id}`} className="saundyablog-card saundyamb-60">
                            <div className="saundyacover saundyaup">
                                <img src={item.image} alt={item.title} />
                                <div className="saundyalink saundyaicon-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </div>
                            </div>
                            <div className="saundyadescr">
                                <h4 className="saundyaup saundyamb-15">{item.title}</h4>
                                <p className="saundyaup">{item.short}</p>
                            </div>
                        </a>

                    </div>
                    ))}
                </div>

            </section>
            {/* blog end */}

            <div className="saundyadivider saundyaup" />
        </>
    );
};

export default RelatedPostsSection;