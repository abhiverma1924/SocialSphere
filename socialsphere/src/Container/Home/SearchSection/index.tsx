'use client'

import { Button, TextField } from "@mui/material"
import { SearchBottom } from "../../../Components/SearchBottom"

const features = [
  'Over 205.4M influencers in our database',
  '35+ metrics for influencer vetting',
  'Industry-leading AI fraud detection',
]

export default function SearchSection() {
  const handleSearch = (account: string) => {
    console.log('Searching for account:', account)
  }

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-900 relative inline-block">
            ANALYTICAL REPORTS
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-coral-500" />
          </h2>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-12 max-w-3xl mx-auto">
          Get best-in-class analytical reports for any Instagram, TikTok, Twitch, X (Twitter), or YouTube account
        </h1>

        <div className="mb-12">
        <div className="max-w-2xl mx-auto">
            <div className="flex gap-2 p-1 rounded-2xl bg-gradient-to-r from-[#ff6b3d] to-[#6366f1]">
              <div
                className="flex-1 bg-white rounded-xl"
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <TextField
                  fullWidth
                  placeholder="Describe a company in a sentence or two..."
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  sx={{
                    "& .MuiInputBase-root": {
                      padding: "20px 20px",
                      borderRadius: "12px",
                    },
                  }}
                />
                <Button
                  variant="contained"
                  startIcon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9 4.5L12 3L15 4.5M9 19.5L12 21L15 19.5M4.5 9L3 12L4.5 15M19.5 9L21 12L19.5 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  sx={{
                    backgroundColor: "#6366f1",
                    "&:hover": {
                      backgroundColor: "#4f46e5",
                    },
                    textTransform: "none",
                    borderRadius: "12px",
                    padding: "12px 24px",
                    fontSize: "16px",
                    position: "absolute",
                    right: "16px", // Adjust as necessary
                  }}
                >
                  Generate
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <SearchBottom key={index} text={feature} />
          ))}
        </div>
      </div>
    </div>
  )
}

