"use client";

import { useState } from "react";
import { Switch } from "@mui/material";
import { PricingCard } from "../../Components/PricingCard";
import { Header } from "../../Components/Header";
import { FooterSection } from "../Home/FooterSection";

const pricingData = [
  {
    name: "Free",
    description: "Conceptualize anything and bring your ideas to life. No cost, but with limits.",
    price: 0,
    currency: "USD",
    period: "/month for one person",
    buttonText: "Get started",
    features: [
      { text: "1 project" },
      { text: "1 page" },
      { text: "Share - Read-only link" },
      { text: "Export - Figma only" },
      { text: "30 Webflow components" },
      { text: "30 React components" },
      { text: "1,000+ Figma components" },
    ],
    persona: {
      title: "New Designer or Developer",
      description:
        "New to the industry and Relume. Usual projects are basic 1-page landing pages, requiring little to no collaboration",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    name: "Relume Starter",
    description: "Unlock extended functionality and turn those ideas into small websites.",
    price: 18,
    currency: "USD",
    period: "/month for one person",
    buttonText: "Start 7-day free trial",
    features: [
      { text: "1 project" },
      { text: "5 pages" },
      { text: "Share - Commenting" },
      { text: "Export - Figma & Webflow" },
      { text: "1,000+ Webflow components" },
      { text: "1,000+ React components" },
      { text: "1,000+ Figma components" },
    ],
    persona: {
      title: "Part-time Freelancer",
      description:
        "A seasoned designer and dev with a full-time job, often takes on a medium sized website project, normally only needing one project per month",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    name: "Relume Pro",
    description: "Complete freedom with unlimited access to build websites of any size.",
    price: 40,
    currency: "USD",
    period: "/month for one person",
    buttonText: "Start 7-day free trial",
    highlight: true,
    features: [
      { text: "Unlimited Projects" },
      { text: "Unlimited Pages" },
      { text: "Share - Commenting" },
      { text: "Export - Figma & Webflow" },
      { text: "1,000+ Webflow components" },
      { text: "1,000+ React components" },
      { text: "1,000+ Figma components" },
    ],
    persona: {
      title: "Full-time Freelancer",
      description:
        "An experienced freelancer managing larger projects with more pages and ongoing client maintenance, requiring more project slots",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    name: "Relume Team",
    description: "Bring your team over with all Pro access and enhanced collaboration.",
    price: 36,
    currency: "USD",
    period: "/month per person (Min 3 people)",
    buttonText: "Start 7-day free trial",
    features: [
      { text: "Everything in Pro +" },
      { text: "3 users included" },
      { text: "Each user with Pro features" },
      { text: "Team workspace" },
    ],
    persona: {
      title: "Agency or Team",
      description:
        "Collaborates with a team on multiple large website projects, benefiting from unlimited projects and extra membership seats",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
];

const companies = [
  { name: "Nike", logo: "/placeholder.svg?height=30&width=30" },
  { name: "Webflow", logo: "/placeholder.svg?height=30&width=30" },
  { name: "ROKT", logo: "/placeholder.svg?height=30&width=30" },
  { name: "IDEO", logo: "/placeholder.svg?height=30&width=30" },
  { name: "DEPT", logo: "/placeholder.svg?height=30&width=30" },
  { name: "VML", logo: "/placeholder.svg?height=30&width=30" },
];

export default function Pricing() {
  const [yearlyBilling, setYearlyBilling] = useState(false);

  return (
    <>
      <Header />
      <div className="mx-auto px-16 py-16 bg-[#F5F3FF]">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Plans that evolve with your projects.</h1>
          <h2 className="text-5xl font-bold mb-12">
            Try with your{" "}
            <span className="bg-gradient-to-r from-red-400 via-blue-500 to-yellow-500 bg-clip-text text-transparent">
              team
            </span>{" "}
            for free.
          </h2>

          <div className="mb-8">
            <p className="text-gray-600 mb-4">Teams already on Relume</p>
            {/* <div className="flex justify-center items-center gap-8">
              {companies.map((company) => (
                <img
                  key={company.name}
                  src={company.logo}
                  alt={company.name}
                  width={30}
                  height={30}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                />
              ))}
            </div> */}
          </div>

          <div className="flex justify-end items-center gap-2 mb-8">
            <span className="text-sm text-gray-600">Yearly discount (30%)</span>
            <Switch checked={yearlyBilling} onChange={(e) => setYearlyBilling(e.target.checked)} color="primary" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingData.map((tier) => (
            <PricingCard key={tier.name} tier={tier} yearlyDiscount={yearlyBilling} />
          ))}
        </div>
      </div>
      <FooterSection />
    </>
  );
}
