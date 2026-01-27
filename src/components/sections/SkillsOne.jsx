import Data from "@data/sections/skills-1.json";

const SkillsOneSection = () => {
  return (
    <>
        <div className="saundyasection-title saundyaup">
            <div className="saundyadivider"></div>
            <h3>{Data.title}</h3>
        </div>

        {/* language */}
        <section className="saundyalang-skills saundyap-90-60">
            <div className="row justify-content-between align-items-center">
                {Data.items.map((item, key) => (
                <div key={`skills1-item-${key}`} className="col-6 col-lg-3">

                    <div className="saundyalang-skills-item saundyacenter saundyaup saundyamb-30">
                        <div className="saundyacircular-progress" data-value={`${item.value}%`}>
                            <div className="saundyacounter-frame saundyaupper saundyadark"><span className="saundyacounter" data-number={item.value}>0</span><span>%</span></div>
                        </div>
                        <h6 className="saundyaup">{item.label}</h6>
                    </div>

                </div>
                ))}
            </div>
        </section>
        {/* language end */}
    </>
  );
};

export default SkillsOneSection;