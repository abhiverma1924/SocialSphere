"use client";

import { ReportsCarousel } from "../../../Components/ReportsCarousel";

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

const sampleReports: InfluencerReport[] = [
  {
    platform: "Tiktok",
    username: "Ceren Yaldız",
    handle: "@cerenyaldz",
    avatar: "/placeholder.svg?height=40&width=40",
    metrics: {
      aqs: 73,
      subscribers: 8500000,
      avgViews: 897800,
    },
    color: "bg-[#F5F3FF]",
  },
  {
    platform: "Twitch",
    username: "summit1g",
    handle: "@summit1g",
    avatar: "/placeholder.svg?height=40&width=40",
    metrics: {
      followers: 6300000,
    },
    color: "bg-[#F5F3FF]",
  },
  {
    platform: "Instagram",
    username: "honeymoon",
    handle: "@honeymoon",
    avatar: "/placeholder.svg?height=40&width=40",
    metrics: {
      aqs: 32,
      qualityAudience: 12300000,
      authenticEng: 1600000,
    },
    color: "bg-[#F5F3FF]",
  },
  {
    platform: "Youtube",
    username: "Evrim Ağacı",
    handle: "@evrimağacı",
    avatar: "/placeholder.svg?height=40&width=40",
    metrics: {
      cqs: 50,
    },
    color: "bg-[#F5F3FF]",
  },
  // Add more sample reports to match the image
];

export default function TopInfluencerReports() {
  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Sample reports:</h2>
        <ReportsCarousel reports={sampleReports} />
        <div className="text-center mt-8">
          <p className="text-gray-700">
            Check 1,000+ top influencer reports for free in{" "}
            <a href="#" className="text-[#F26B4E] hover:underline">
              Top Rankings
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
