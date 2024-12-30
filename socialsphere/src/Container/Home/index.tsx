import React from "react";
import { Header } from "../../Components/Header";
import { HeroSection } from "../../Components/HeroSection";
import FeatureSection from "./FeatureSection";
import SearchSection from "./SearchSection";
import TopInfluencerReports from "./TopCards";
import FAQ from "../../Components/Faqs";
import { FooterSection } from "./FooterSection";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeatureSection />
      <SearchSection />
      <TopInfluencerReports />
      <div className="bg-gray-50">
        <FAQ />
      </div>

      <FooterSection />
    </div>
  );
};

export default Home;
