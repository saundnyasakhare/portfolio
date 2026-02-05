import Data from "@data/sections/skills.json";
import basePath from "@common/basePath";

const SkillsSection = () => {
  return (
    <>
        <div className="saundyasection-title saundyaup">
            <div className="saundyadivider"></div>
            <h3>{Data.title}</h3>
        </div>

        {/* skills */}
        <section className="saundyap-90-30">
            <div className="row justify-content-between align-items-center">
                {Data.items.map((item, key) => (
                <div key={`skills-item-${key}`} className="col-lg-4">
                    <div className="saundyaicon-box saundyacenter saundyamb-60">
                        <div className="saundyaservice-icon saundyaup">
                            <img src={`${basePath}${item.icon}`} alt={item.title} className="saundyamb-30" />
                        </div>
                        <h5 className="saundyaup saundyamb-30">{item.title}</h5>
                        <p className="saundyaup saundyamb-30">{item.text}</p>
                    </div>
                </div>
                ))}
            </div>
        </section>
        {/* skills end */}
    </>
  );
};

export default SkillsSection;