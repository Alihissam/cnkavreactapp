import React from "react";
import ImagesSection from "../components/ImagesSection";
import ExclusiveRoomSection from "../components/ExclusiveRoomSection";
import PricingSection from "../components/PricingSection";
import FlexibleSection from "../components/FlexibleSection";
import InfluewaveSection from "../components/InfluewaveSection";
import EngagnmentSection from "../components/EngagnmentSection";
import VideoChat from "../components/VideoChat";
import QuestSection from "../components/QuestSection";
import HeroSection from "../components/HeroSection";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <InfluewaveSection />

      <QuestSection />

      <VideoChat />
      <FlexibleSection />

      <PricingSection />
      <EngagnmentSection />
      <ExclusiveRoomSection />
      <ImagesSection />
    </div>
  );
}
