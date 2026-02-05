import { useEffect } from "react";
import { useRouter } from "next/router";
import { scrollAnimation } from "../common/scrollAnims";
import { preloaderAnimation } from "../common/preloader";
import { countersAnimation } from "../common/counters";
import { parallaxAnimation } from "../common/parallax";
import { anchorSscroll } from "../common/utilits";

import Footer from "./footers/Index";
import Header from "./headers/Index";
import Preloader from "./preloader/Index";
import LeftPanel from "./left-bar/Index";
import RightPanel from "./right-bar/Index";
import BackToTop from "./back-to-top/Index";

const Layouts = ({
  children,
  header,
  footer,
  noHeader,
  noFooter,
  fullWidth,
  rightPanelBackground,
  rightPanelImg,
  fullWidth100,
  extraClass,
}) => {
  let bodyClass = false;
  let containerClass = false;

  if ( fullWidth && fullWidth100 ) {
    bodyClass = ['saundyafw-page', 'saundya100-page'];
    containerClass = 'saundyacontainer-100';
  } else if ( fullWidth ) {
    bodyClass = 'saundyafw-page';
    containerClass = 'saundyacontainer-fw';
  } else {
    bodyClass = false;
  }

  const router = useRouter();

  useEffect(() => {
    //preloaderAnimation();
    scrollAnimation();
    countersAnimation();
    parallaxAnimation();
    anchorSscroll();

    if ( document != undefined && bodyClass ) {
      if ( Array.isArray(bodyClass) ) {
        document.querySelector('body').classList.add(...bodyClass);
      } else {
        document.querySelector('body').classList.add(bodyClass);
      }
    } else {
      document.querySelector('body').classList.remove('saundyafw-page');
      document.querySelector('body').classList.remove('saundya100-page');
    }

    return () => {
      // Clean up body classes on unmount so they don't persist across navigations
      document.querySelector('body').classList.remove('saundyafw-page');
      document.querySelector('body').classList.remove('saundya100-page');
    };
  }, [router.asPath]);

  return (
    <div className="saundyawrapper" id="top">
      {/* <Preloader /> */}

      <div className="saundyaframe">

        {!noHeader && (
          <Header
            layout={header}
            extraclassName={extraClass}
          />
        )}

        <LeftPanel />
        
        <BackToTop />
      </div>

      <div className="saundyacontent">
        <div className="saundyascroll-wrapper transition-fade" id="swupMain">
          <div className={containerClass ? containerClass : "saundyacontainer"}>
            {children}

            {!noFooter && <Footer layout={footer} />}
          </div>
        </div>
        
        {!fullWidth &&
        <RightPanel background={rightPanelBackground} img={rightPanelImg} />
        }

      </div>
    </div>
  );
};
export default Layouts;
