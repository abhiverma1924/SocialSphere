"use client";

import { PlatformCard } from "../InfluencerCard";

interface SocialMetrics {
  subscribers?: number;
  followers?: number;
  avgViews?: number;
  aqs?: number;
  cqs?: number;
  qualityAudience?: number;
  authenticEng?: number;
}

interface InfluencerReport {
  platform: "Tiktok" | "Twitch" | "Instagram" | "Youtube";
  username: string;
  handle: string;
  avatar: string;
  metrics: SocialMetrics;
  color: string;
}

interface ReportsCarouselProps {
  reports: InfluencerReport[];
}

export function ReportsCarousel({ reports }: ReportsCarouselProps) {
  return (
    <div className="relative w-full">
      <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar">
        {reports.map((report, index) => (
          <div key={index} className="flex-none w-[300px]">
            <PlatformCard report={report} />
          </div>
        ))}
      </div>
    </div>
  );
}