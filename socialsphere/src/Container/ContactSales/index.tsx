import { Header } from "../../Components/Header";
import { FooterSection } from "../Home/FooterSection";
import { ClientLogos } from "./Clients";
import { DemoForm } from "./ContactForm";
import { QuestionsSection } from "./QuestionSection";

export default function ContactSales() {
  return (
    <>
      <Header />
      <div className="bg-[#f5f3ff]">
        <div className="max-w-7xl mx-auto px-4 py-12 bg-[#f5f3ff]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl font-bold mb-4">Book your free demo</h1>
              <p className="text-gray-600 mb-8">
                Learn everything about SocialSphere and how its features can help you achieve your business goals with
                our influencer marketing experts.
              </p>
              <DemoForm />
            </div>
            <div className="space-y-8">
              <ClientLogos />
              {/* <QuestionsSection /> */}
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
}
