"use client";

import { Button } from "@mui/material";
import { BUTTON_COLOR } from "../../../Constants/styles";
import { useNavigate } from "react-router-dom";

interface FooterSection {
  title: string;
  links: {
    text: string;
    href: string;
  }[];
}

const footerSections: FooterSection[] = [
  {
    title: "PLATFORM",
    links: [
      { text: "Influencer Analytics", href: "#" },
      { text: "Influencer Discovery", href: "#" },
      { text: "Campaign Management", href: "#" },
      { text: "Market Analysis", href: "#" },
      { text: "Professional Services", href: "#" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { text: "About us", href: "#" },
      { text: "Press", href: "#" },
      { text: "Customers", href: "#" },
      { text: "Affiliate", href: "#" },
      { text: "Become a Partner", href: "#" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { text: "Blog", href: "#" },
      { text: "FAQ", href: "#" },
      { text: "Free Tools", href: "#" },
      { text: "Customer Stories", href: "#" },
      { text: "Sphere Academy", href: "#" },
    ],
  },
  {
    title: "GET STARTED",
    links: [
      { text: "Contact us", href: "#" },
      { text: "Request demo", href: "#" },
      { text: "Support", href: "#" },
      { text: "Migrate to Sphere", href: "#" },
    ],
  },
];

export function FooterSection() {
  const navigate = useNavigate();
  return (
    <footer className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Need More Info Section */}
        <div>
          <h2 className="text-gray-600 font-medium mb-4">NEED MORE INFO?</h2>
          <Button
            onClick={() => navigate("/contact")}
            variant="contained"
            sx={{
              backgroundColor: BUTTON_COLOR,
              "&:hover": {
                backgroundColor: BUTTON_COLOR,
              },
              textTransform: "none",
              borderRadius: "8px",
              padding: "8px 24px",
            }}
          >
            Talk to sales
          </Button>
        </div>

        {/* Other Sections */}
        {footerSections.map((section) => (
          <div key={section.title}>
            <h2 className="text-gray-900 font-medium mb-4">{section.title}</h2>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="text-gray-800 hover:text-gray-600 transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
