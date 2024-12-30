import FAQ from "./Components/Faqs";
import { Header } from "./Components/Header";
import { HeroSection } from "./Components/HeroSection";
import FeatureSection from "./Container/Home/FeatureSection";
import { FooterSection } from "./Container/Home/FooterSection";
import SearchSection from "./Container/Home/SearchSection";
import TopInfluencerReports from "./Container/Home/TopCards";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <HeroSection />
      <FeatureSection />
      <SearchSection />
      <TopInfluencerReports />
      <FAQ />
      <FooterSection /> */}
      <Layout/>
    </div>
  );
}

export default App;
