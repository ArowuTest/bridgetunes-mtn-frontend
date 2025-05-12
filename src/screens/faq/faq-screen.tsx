import { FaqBox } from "@/src/components/common/faq-box";
import translations from "@/src/constants/translations.json";
import { useState } from "react";

export default function FAQSscreen() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="w-full pt-14 bg-black bg-[url('/images/landing-page/bg-pattern.png')] bg-repeat bg-center">
      <section className="p-2 md:p-4 w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-[80%] mx-auto flex flex-col gap-14">
        <div className="w-full border rounded-xl overflow-hidden max-h-[220px] md:max-h-[420px] border-[transparent] relative">
          <img
            className="w-full h-full object-cover object-top"
            src="/images/landing-page/cubes.jpg"
          />
          <h1 className="absolute bottom-2 md:bottom-10 left-0 w-full text-white text-center p-4 text-xl md:text-3xl">
            {translations.faqs.title}
          </h1>
        </div>
        <div className="w-100 flex flex-col px-4 gap-6 mb-8">
          {translations.faqs.content.map((faq, idx) => (
            <FaqBox
              content={faq}
              key={idx}
              className="faq-item-wrapper"
              isOpen={openFaq === idx}
              onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
