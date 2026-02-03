import Data from "@data/sections/hero-1.json";

const HeroOne = () => {
    return (
        <>
            {/* banner */}
            <section className="saundyaside-banner saundyacenter">
                <div className="saundyabanner-top saundyaup"></div>
                <div className="saundyabanner-title">
                    <div className="saundyaupper saundyadark saundyaup saundyamb">{Data.subtitle}</div>
                    <h1 className="saundyaup saundyamb" dangerouslySetInnerHTML={{__html : Data.title}} />
                    <p className="saundyaupper saundyadark saundyaup">{Data.description}</p>
                </div>
                <div className="saundyaup saundyaoval-frame">
                    <div className="saundyacircle-text">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve" className="saundyact-svg saundyarotate" data-value="360">
                            <defs>
                                <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                            </defs>
                            <circle cx="150" cy="100" r="75" fill="none" />
                            <g>
                                <use xlinkHref="#circlePath" fill="none" />
                                <text style={{"letterSpacing": "6.5px"}}>
                                    {/* circle text */}
                                    <textPath xlinkHref="#circlePath">Scroll down - Scroll down - </textPath>
                                </text>
                            </g>
                        </svg>
                        <a href="#about" className="saundyabutton">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <polyline points="19 12 12 19 5 12"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
            {/* banner end */}
        </>
    );
}
export default HeroOne;