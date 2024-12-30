import { Header } from "../../Components/Header";
import { FooterSection } from "../Home/FooterSection";
import { BrandLogos } from "./BrandLogo";
import { CampaignTable } from "./Campaign";
import { SignUpForm } from "./SignUpForm";

export default function SignUpPage() {
  return (
    <>
    <Header/>
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Section */}
      <div className="bg-[#f5f3ff] p-8 flex flex-col">
        <div className="max-w-xl mx-auto flex-1">
          <div className="space-y-4 mb-12">
            <h1 className="text-4xl font-bold text-black">
              Find any influencer on Earth
            </h1>
            <p className="text-black">
              We list every creator with 1k+ followers on Instagram, TikTok & YouTube. If
              they're on this planet, they're in Modash.
            </p>
          </div>
          
          <CampaignTable />
          <BrandLogos />
        </div>
      </div>

      {/* Right Section */}
      <div className="p-8 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <div className="mb-8">
            {/* <img
              src="/placeholder.svg?height=40&width=120"
              alt="sphere"
              className="h-10"
            /> */}
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">
              Create your account
            </h2>
            <p className="text-gray-600">
              Already have an account?{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Log in now
              </a>
            </p>
          </div>

          <SignUpForm />
        </div>
      </div>
    </div>
    </>
  )
}

