import React from "react";
import Layouts from "@layouts/Layouts";

import HeroOneSection from "@components/sections/HeroOne"
import AboutSection from "@components/sections/About";
import SkillsSection from "@components/sections/Skills";
import SkillsOneSection from "@components/sections/SkillsOne";
import SkillsTwoSection from "@components/sections/SkillsTwo";
import CallToActionSection from "@components/sections/CallToAction";

const Home1 = () => {
  return (
    <Layouts
      rightPanelBackground={"/img/person/bg-1.jpg"}
      rightPanelImg={"/img/person/2.png"}
    >
      <HeroOneSection />
      <AboutSection />
      <SkillsSection />
      <SkillsOneSection />
      <SkillsTwoSection />
      <CallToActionSection />
    </Layouts>
  );
};
export default Home1;