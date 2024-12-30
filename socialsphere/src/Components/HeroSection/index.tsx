"use client";

import { Button, TextField } from "@mui/material";
import AnanlyticsImg from "../../Assets/Images/analytics.jpg";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-[#f5f3ff] min-h-[calc(100vh-250px)] flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 flex items-center justify-center gap-2">
            <span className="text-gray-600">400k+ Designers & Devs build with Relume</span>
            <div className="flex -space-x-2">
              {/* <img
                src="/placeholder.svg?height=24&width=24"
                alt="User Avatar"
                width={24}
                height={24}
                className="rounded-full border-2 border-white"
              />
              <img
                src="/placeholder.svg?height=24&width=24"
                alt="User Avatar"
                width={24}
                height={24}
                className="rounded-full border-2 border-white"
              />
              <img
                src="/placeholder.svg?height=24&width=24"
                alt="User Avatar"
                width={24}
                height={24}
                className="rounded-full border-2 border-white"
              /> */}
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Websites designed &{" "}
            <span className="relative">
              built
              {/* <span className="absolute -right-16 top-0">
                <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">Guest</span>
              </span> */}
            </span>
            <br />
            faster with AI
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Use AI as your design ally, not as a replacement. Effortlessly generate sitemaps and wireframes for
            marketing websites in minutes.
          </p>

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

        {/* Website Preview Images */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <div className="relative w-full h-[600px]">
            <img
              src={AnanlyticsImg}
              alt="Website Preview 1"
              width={250}
              height={300}
              className="absolute top-0 left-0 transform -translate-x-full rounded-lg shadow-lg"
            />
            <img
              src="/placeholder.svg?height=300&width=250"
              alt="Website Preview 2"
              width={250}
              height={300}
              className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 rounded-lg shadow-lg"
            />
            <img
              src="/placeholder.svg?height=300&width=250"
              alt="Website Preview 3"
              width={250}
              height={300}
              className="absolute bottom-0 left-0 transform -translate-x-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
