import Head from 'next/head';
import Link from "next/link";
import { useRouter } from 'next/router';
import appData from "@data/app.json";

const PageBanner = ({ pageTitle, breadTitle, align }) => {
  const { asPath } = useRouter();
  let clearBreadTitle;

  if ( breadTitle != undefined ) {
    clearBreadTitle = breadTitle;
  } else {
    const regex = /(<([^>]+)>)/gi;
    clearBreadTitle = pageTitle.replace(regex, "");
  }

  const headTitle = `${appData.settings.siteName} - ${clearBreadTitle}`;

  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>
      
      {/* banner */}
      <section className={`saundyabanner-sm saundya${align}`}>
          <div className="saundyabanner-top saundyaup"></div>
          <div className="saundyabanner-title">
              <h1 className="saundyah1-sm saundyaup saundyamb-60" dangerouslySetInnerHTML={{__html : pageTitle}} />
              <ul className="saundyabreadcrumbs saundyaup">
                  <li><Link href="/">Homepage</Link></li>
                  {asPath.indexOf('/blog/') != -1 &&
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  }
                  {asPath.indexOf('/portfolio/') != -1 &&
                  <li>
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  }
                  {asPath.indexOf('/skills/') != -1 &&
                  <li>
                    <Link href="/skills">Skills</Link>
                  </li>
                  }
                  <li dangerouslySetInnerHTML={{__html : clearBreadTitle}} />
              </ul>
          </div>
      </section>
      {/* banner end */}
    </>
  );
};
export default PageBanner;
