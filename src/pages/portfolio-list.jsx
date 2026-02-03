import { useState } from 'react';

import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import PortfolioGrid from "@components/PortfolioGrid";
import CallToActionSection from "@components/sections/CallToAction";

import { getSortedPortfolioData } from "@library/portfolio";

import Link from "next/link";

const Portfolio2 = (props) => {
  return (
    <Layouts
      rightPanelBackground={"/img/person/bg-1.jpg"}
      rightPanelImg={"/img/person/2.png"}
    >
      <PageBanner pageTitle={"Designing a <br>Better World Today"} breadTitle={"Portfolio"} align={"center"} />

      <PortfolioGrid portfolio={props.portfolio} columns={2} />

      <CallToActionSection />

    </Layouts>
  );
};
export default Portfolio2;

export async function getStaticProps() {
  const allPortfolio = getSortedPortfolioData();

  return {
    props: {
      portfolio: allPortfolio
    }
  }
}