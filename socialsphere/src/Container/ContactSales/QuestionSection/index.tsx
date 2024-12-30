import { Button } from "@mui/material";
import { Newspaper, HelpCircle, Zap } from 'lucide-react'

export function QuestionsSection() {
  return (
    <div className="bg-[#F3F4FF] rounded-lg p-6 mt-8">
      <h2 className="text-xl font-semibold mb-6">Have other questions?</h2>
      <div className="space-y-4">
        <Button
          variant="outlined"
          className="w-full justify-start gap-2 bg-white"
        >
          <Newspaper className="w-5 h-5" />
          Visit our press page
        </Button>
        <Button
          variant="outlined"
          className="w-full justify-start gap-2 bg-white"
        >
          <HelpCircle className="w-5 h-5" />
          Explore our help center
        </Button>
        <Button
          variant="outlined"
          className="w-full justify-start gap-2 bg-white"
        >
          <Zap className="w-5 h-5" />
          Register to start using SocialSphere
        </Button>
      </div>
    </div>
  )
}

