import ManImg from '../../Assets/Icons/man.png'


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

interface PlatformCardProps {
  report: InfluencerReport;
}

const formatNumber = (num: number): string => {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
};

export function PlatformCard({ report }: PlatformCardProps) {
  const { platform, username, handle, avatar, metrics, color } = report;

  return (
    <div className={`${color} rounded-xl p-4 w-[300px] h-[180px] flex flex-col justify-between shadow-md`}>
      <div className="flex justify-between items-start">
        <div>
          <div className="text-sm text-gray-600">{platform}</div>
          <div className="text-lg font-bold">{username}</div>
          <div className="text-xs text-gray-600">{handle}</div>
        </div>
        <img src={ManImg} alt={username} className="w-10 h-10 rounded-full" />
      </div>
      <div className="grid grid-cols-3 gap-2 text-sm">
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key}>
            <div className="font-semibold">{formatNumber(value)}</div>
            <div className="text-xs text-gray-600">{key}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
