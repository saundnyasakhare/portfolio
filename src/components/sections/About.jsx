import Data from "@data/sections/about.json";

const AboutSection = () => {
    return (
        <>
            {/* about */}
            <section id="about" className="saundyap-0-90">
                <div className="saundyaoval-frame-2 saundyamb-90">
                    <img src={Data.avatar.image} alt={Data.avatar.alt} />
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="saundyacenter">
                            <h2 className="saundyaup saundyamb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                            <div className="saundyaquote saundyaup saundyamb-30"><i className="fas fa-quote-left" /></div>
                            <p className="saundyaup saundyamb-30">{Data.description}</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* about end */}
        </>
    );
};

export default AboutSection;