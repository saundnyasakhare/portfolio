import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import basePath from "@common/basePath";

const Contact = () => {
  return (
    <Layouts
      rightPanelBackground={`${basePath}/img/person/bg-1.jpg`}
      rightPanelImg={`${basePath}/img/person/2.png`}
    >
        <PageBanner pageTitle={"Get in touch!"} align={"center"} />

        {/* info */}
        {/* <div>
            <ul className="saundyapuplication-details saundyaup saundyamb">
                <li>
                    <span className="saundyaupper saundyaaccent">Write: </span>&nbsp;&nbsp;
                    <span className="saundyaupper saundyadark">saundnyas@gmail.com</span>
                </li>
            </ul>
        </div> */}

        <div className="saundyasection-title saundyaup">
            <div className="saundyadivider" />
            <h3>Let's Talk</h3>
        </div>

        {/* contact buttons */}
        <div id="contact" className="saundyap-90-60">
            <div className="row justify-content-center">
                <div className="col-lg-6 saundyaup saundyacenter">
                    <a href="mailto:saundnyas@gmail.com" className="saundyalink saundyaup saundyamb-60" style={{display: "inline-flex"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail" style={{marginRight: "12px"}}>
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <span>Email Me</span>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg> */}
                    </a>
                </div>
                <div className="col-lg-6 saundyaup saundyacenter">
                    <a href="https://www.linkedin.com/in/saundnya-sakhare-883498239/" target="_blank" rel="noopener noreferrer" className="saundyalink saundyaup saundyamb-60" style={{display: "inline-flex"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin" style={{marginRight: "12px"}}>
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                        <span>LinkedIn</span>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg> */}
                    </a>
                </div>
            </div>
        </div>
        {/* contact end */}

    </Layouts>
  );
};
export default Contact;
