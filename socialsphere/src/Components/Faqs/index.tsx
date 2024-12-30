"use client";

import { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Will I find who I'm looking for in Modash?",
    answer:
      "Yes, Modash has an extensive database of influencers across multiple platforms. Our search capabilities allow you to find exactly who you're looking for based on various criteria including niche, location, engagement rate, and audience demographics.",
  },
  {
    question: "How do you get your data? How accurate is it?",
    answer:
      "We collect data directly from social media platforms through their official APIs and combine it with our proprietary analytics tools. Our data accuracy rate is over 95%, and we update our database regularly to ensure the most current information.",
  },
  {
    question: "Do you show analytics & performance metrics for influencers & their followers?",
    answer:
      "Yes, we provide comprehensive analytics including engagement rates, audience demographics, growth trends, and performance metrics for both influencers and their followers. This helps you make data-driven decisions for your campaigns.",
  },
  {
    question: "Does Modash calculate engagement rate?",
    answer:
      "Yes, Modash automatically calculates engagement rates for all influencers. We use a sophisticated formula that takes into account likes, comments, shares, and other relevant interactions to provide accurate engagement metrics.",
  },
  {
    question: "Can I track my campaigns with Modash?",
    answer:
      "Modash offers robust campaign tracking features. You can monitor performance metrics, ROI, engagement rates, and other key indicators in real-time for all your influencer marketing campaigns.",
  },
  {
    question: "Do you have any limits?",
    answer:
      "Our platform offers different tiers of service with varying limits. Each plan includes a specific number of searches, exports, and tracked influencers. Contact our sales team for detailed information about our plans and their respective limits.",
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="bg-gray-50 max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#1a1b3d] ">Stuff influencer marketers ask us</h2>
      <div className="space-y-4 bg-gray-50">
        {faqData.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              boxShadow: "none",
              "&:before": {
                display: "none",
              },
              borderBottom: "1px solid #e5e7eb",
              borderRadius: "0 !important",
            }}
          >
            <AccordionSummary
              expandIcon={<ChevronDown className="w-6 h-6 text-[#1a1b3d]" />}
              sx={{
                padding: "1rem 0",
                "& .MuiAccordionSummary-content": {
                  margin: "0",
                },
              }}
            >
              <h3 className="text-xl font-semibold text-[#1a1b3d]">{faq.question}</h3>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: "0 0 1.5rem 0" }}>
              <p className="text-gray-700 ">{faq.answer}</p>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
