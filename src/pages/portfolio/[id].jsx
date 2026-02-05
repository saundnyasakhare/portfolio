import Layouts from "@layouts/Layouts";
import basePath from "@common/basePath";

import Link from "next/link";

import { getPortfolioData, getRelatedPortfolio } from "@library/portfolio";

import RelatedPortfolioSection from "@components/sections/RelatedPortfolio";

const PortfolioDetail = ( props ) => {
  
  const postData = props.data;

  return (
    <Layouts
      fullWidth={postData.fullWidth}
      rightPanelBackground={`${basePath}${postData.image}`}
    >
    
      {/* banner */}
      <section className="saundyabanner-sm saundyacenter">
          <div className="saundyabanner-top saundyaup" />
          <div className="saundyabanner-title">
              <ul className="saundyapuplication-details saundyaup saundyamb-60">
                  {postData.details.map((item, key) => (
                  <li key={`portfolio-details-item-${key}`}>
                    {item.label != "$category" &&
                    <>
                      <span className="saundyaupper saundyadark">{item.label} </span>
                      &nbsp;&nbsp;
                      <span className="saundyaupper">{item.value}</span>
                    </>
                    }
                    {item.label == "$category" &&
                    <>
                      <span className="saundyaupper saundyaaccent">{postData.category}</span>
                    </>
                    }
                  </li>
                  ))}
              </ul>
              <h1 className="saundyah1-sm saundyaup saundyamb-60">{postData.title}</h1>
              <ul className="saundyabreadcrumbs saundyaup">
                  <li><Link href="/">Saundnya Sakhare</Link></li>
                  <li><Link href="/portfolio-list">Portfolio</Link></li>
                  <li>Portfolio</li>
              </ul>
          </div>
      </section>
      {/* banner end */}
      
      {postData.fullWidth == true &&
      <img src={`${basePath}${postData.image}`} alt={postData.title} style={{"width": "100%"}} className="saundyaup saundyamb-90" />
      }

      {/* portfolio */}
      <section className="saundyap-0-30">

          <div className="row justify-content-center">
              {typeof postData.description != "undefined" &&
                <>
                  {postData.description.enabled == 1 &&
                  <div className="col-lg-9">
                    <div className="saundyatext-xl saundyadark saundyaup saundyacenter saundyamb-90" dangerouslySetInnerHTML={{__html : postData.description.content}} />
                  </div>
                  }
                </>
              }
              {typeof postData.gallery != "undefined" &&
                <>
                  {postData.gallery.enabled == 1 &&
                    <>
                    {postData.gallery.items.map((item, key) => (
                    <div key={`gallery-item-${key}`} className={key == 0 ? "col-lg-12" : "col-lg-6"}>
                        <img src={`${basePath}${item.image}`} alt={item.alt} style={{"width": "100%"}} className="saundyaup saundyamb-30" />
                    </div>
                    ))}
                    </>
                  }
                </>
              }

              {typeof postData.description2 != "undefined" &&
                <>
                  {postData.description2.enabled == 1 &&
                  <>
                    <div className="col-lg-6">
                        <h3 className="saundyaup saundyamb-30">{postData.description2.heading}</h3>
                    </div>
                    <div className="col-lg-6">
                        <div className="saundyaup saundyamb-30" dangerouslySetInnerHTML={{__html : postData.description2.content}} />
                        {postData.description2.button != undefined &&
                        <a href={postData.description2.button.link} target={postData.description2.button.target} className="saundyalink saundyaup saundyamb-60">
                            <span>{postData.description2.button.label}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </a>
                        }
                    </div>
                  </>
                  }
                </>
              }
              {typeof postData.gallery2 != "undefined" &&
                <>
                  {postData.gallery2.enabled == 1 &&
                    <>
                    {postData.gallery2.items.map((item, key) => (
                    <div key={`gallery-item-${key}`} className={key == 0 ? "col-lg-12" : "col-lg-6"}>
                        <img src={`${basePath}${item.image}`} alt={item.alt} style={{"width": "100%"}} className="saundyaup saundyamb-30" />
                    </div>
                    ))}
                    </>
                  }
                </>
              }

          </div>

      </section>
      {/* portfolio end */}

      <RelatedPortfolioSection items={props.related} />

    </Layouts>
  );
};
export default PortfolioDetail;

export async function getStaticPaths() {
    // Only generate portfolio-1 route
    return {
      paths: [{ params: { id: 'portfolio-1' } }],
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPortfolioData(params.id)
    const relatedPosts = await getRelatedPortfolio(params.id)

    return {
      props: {
        data: postData,
        related: relatedPosts
      }
    }
}