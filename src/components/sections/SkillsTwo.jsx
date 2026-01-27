import Data from "@data/sections/skills-2.json";
import Link from "next/link";

const SkillsTwo = () => {
  return (
    <>
        <div className="saundyasection-title saundyaup">
            <div className="saundyadivider" />
            <h3>{Data.title}</h3>
        </div>

        {/* hard skills */}
        <section className="saundyap-90-60">
            <div className="row justify-content-between align-items-center">
                {Data.items.map((item, key) => (
                <div className="col-lg-6" key={`skills2-item-${key}`}>
                    <div className="saundyalang-skills-item saundyamb-30">
                        <h6 className="saundyaup saundyamb-30">{item.label}</h6>
                        <div className="saundyaline-progress saundyaup">
                            <div className="saundyabar" data-value={`${item.value}%`} />
                        </div>
                    </div>
                </div>
                ))}
            </div>

        </section>
        {/* hard skills end */}
    </>
  );
};

export default SkillsTwo;