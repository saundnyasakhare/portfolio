import { useState } from 'react';

import Layouts from "@layouts/Layouts";
import basePath from "@common/basePath";
import PageBanner from "@components/PageBanner";
import PortfolioGrid from "@components/PortfolioGrid";
import CallToActionSection from "@components/sections/CallToAction";

import { getSortedPortfolioData } from "@library/portfolio";

import Link from "next/link";

const Portfolio2 = (props) => {
  return (
    <Layouts
      rightPanelBackground={`${basePath}/img/person/bg-1.jpg`}
      rightPanelImg={`${basePath}/img/person/2.png`}
    >
      <PageBanner pageTitle={"Designing Ideas<br>That Move People"} breadTitle={"Portfolio"} align={"center"} />

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