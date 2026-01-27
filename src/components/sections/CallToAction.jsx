import Data from "@data/sections/call-to-action.json";
import Link from "next/link";

const CallToActionSection = ( { bg } ) => {
  return (
    <>
        <div className="saundyadivider saundyaup saundyamb-90" />

        {/* call to action */}
        <div className="saundyap-0-90">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="saundyacenter">
                        <h2 className="saundyaup saundyamb-30">{Data.title}</h2>
                        <div className="saundyaup">
                            <Link href={Data.button.link} className="saundyabtn saundyasm-btn">{Data.button.label}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* call to action end */}
    </>
  );
};

export default CallToActionSection;