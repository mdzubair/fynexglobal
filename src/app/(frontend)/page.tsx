import CompanyNews from "./componets/CompanyNews";
import HeroSection from "./componets/HeroSection";
import IntroducingBroker from "./componets/IntroducingBroker";
import MobileAndServices from "./componets/MobileAndServices";

import OurProducts from "./componets/OurProducts";
import PartnersSection from "./componets/PartnersSection";
import StepGuide from "./componets/StepGuide";

import TrustpilotSlider from "./componets/TrustpilotSlider";
import WhyChooseSection from "./componets/WhyChooseSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustpilotSlider />
      <WhyChooseSection />
      <OurProducts />
      <MobileAndServices />
      <IntroducingBroker />
      <StepGuide />
      <CompanyNews />
      <PartnersSection />
    </>
  );
}
