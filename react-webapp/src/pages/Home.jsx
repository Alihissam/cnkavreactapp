import React from "react";
import VideoSection from "../components/VideoSection";
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
      {/* Hero Section */}
      <HeroSection />
      <InfluewaveSection />
      <VideoSection />

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
