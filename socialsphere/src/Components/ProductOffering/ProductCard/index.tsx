import { Card, CardContent } from "@mui/material";
import AnalyticsImg  from '../../../Assets/Images/analytics.jpg'
export interface MainFeature {
  title: string;
  description: string;
  image: string;
}

export interface AdditionalFeature {
  title: string;
  isNew?: boolean;
}

interface FeatureCardProps {
  feature: MainFeature;
}

export function ProductCard({ feature }: FeatureCardProps) {
  return (
    <Card className="h-[250px] bg-gray-50 hover:shadow-lg transition-shadow duration-300">
      <CardContent className="">
        <div className="w-[200px] h-[100px] mb-5 relative rounded-lg overflow-hidden bg-white">
          <img src={AnalyticsImg} alt={feature.title} className="object-cover" />
        </div>
        <h3 className="text-xl font-bold">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </CardContent>
    </Card>
  );
}
