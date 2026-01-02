"use client";

import React, { useState } from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { useRouter } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import Image from "next/image";

const Product = () => {
  const router = useRouter();

  const faq = [
    {
      question: "How does navillo make code more secure?",
      answer:
        "navillo automatically detects potential vulnerabilities like injection risks or unsafe API keys inside your coding environment, and flags them in real time. Every fix is explainable, so you always stay in control.",
    },
    {
      question: "Does navillo collect or store my code?",
      answer:
        "navillo securely processes snippets of anonymized code to improve detection accuracy and model performance. We never store identifiable user projects or link submissions to individuals. All training data is sanitized, encrypted, and used solely to make navillo smarter over time.",
    },
    {
      question: "Which coding tools does navillo integrate with?",
      answer:
        "navillo currently supports Python environments and integrates natively with IDEs like VS Code and Cursor. Support for more JavaScript and AI copilots is coming soon.",
    },
    {
      question: "Is navillo free to use?",
      answer:
        "Yes — navillo is free for early adopters while in beta. We’ll announce flexible plans for students, small teams, and startups later this year.",
    },
    {
      question: "Who is navillo built for?",
      answer:
        "navillo is designed for developers who care about speed and safety — from student engineers to small teams.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleWaitlist = () => {
    window.open("https://tally.so/r/wa7EEZ", "_blank");
  };

  return (
    <>
      <Navbar />
      <div className="font-inter flex flex-col justify-center items-center text-center space-y-3 my-15 mb-30 mx-4 md:mx-20 lg:mx-40">
        <h1 className="text-5xl text-left font-medium w-full">
          Building the{" "}
          <span className="text-transparent bg-gradient-to-r from-[#7E7E7E] to-[#181818] inline-block bg-clip-text">
            quiet infrastructure
          </span>{" "}
          <br />
          that makes every innovation accessible <br /> to every builder.
        </h1>

        {/* Subtext & Button stacked directly under heading */}
        <div className="w-full flex flex-row items-start pt-2 gap-6 mb-10">
          <p className="text-left text-lg w-full md:w-3/4">
            The AI revolution is here. We believe the next era of technology
            will be <br /> built by small, fast teams — and we’re building for
            them first.
          </p>

          <button
            className="bg-gradient-to-r from-[#C45816] to-[#E37633] text-white py-3 px-12 text-medium rounded-lg flex items-center gap-2 hover:cursor-pointer"
            onClick={() => router.push("/pricing")}
          >
            Go to Pricing <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Promotional Video Placeholder */}
      <div className="font-inter bg-[#D9D9D9] border-2 border-[#000000] mb-45 rounded-3xl mx-4 md:mx-20 lg:mx-40 p-6 min-h-[750px] flex flex-col md:flex-row justify-center items-center text-center">
        <h1 className="text-6xl">
          Promotional video <br /> coming soon
        </h1>
      </div>

      {/* Flagship Product Section */}
      <div className="flex flex-col font-inter justify-between items-start text-left space-y-2 mx-4 md:mx-20 lg:mx-40 mt-50">
        <h1 className="text-[#C45816] text-lg">Flagship product</h1>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
          <h1 className="text-4xl font-medium font-inter mb-4 md:mb-0">
            Code faster, ship safer with navillo.
          </h1>

          <button
            className="font-inter bg-gradient-to-r from-[#43444E] to-[#232428] text-white py-3 px-6 rounded-lg flex items-center gap-2 text-base hover:cursor-pointer"
            onClick={() => router.push("/")}
          >
            See how it works <FaChevronRight />
          </button>
        </div>
      </div>
      

      {/* Features Section */}
      <div className="mx-4 md:mx-20 lg:mx-40 mt-10 space-y-8">
        {/* 1 */}
        <div>
          <div className="flex items-start w-full">
            <div className="bg-[#EDEDED] p-4 rounded-md flex items-center justify-center min-w-[60px] min-h-[60px]">
              <Image src="/puzzle.svg" alt="puzzle icon" width={70} height={70} className="scale-300" />
            </div>
            <p className="ml-auto text-right text-base md:text-lg w-full">
              Catch vulnerabilities before they break production — real <br />
              time flags for OWASP issues, insecure imports, and logic risks.
            </p>
          </div>
          <div className="border-b border-[#D9D9D9] mt-4"></div>
        </div>

        {/* 2 */}
        <div>
          <div className="flex items-start w-full">
            <div className="bg-[#EDEDED] p-4 rounded-md flex items-center justify-center min-w-[60px] min-h-[60px]">
              <Image
                src="/thunder_lightning.svg"
                alt="thunder lightning icon"
                width={70}
                height={70}
                className="scale-300"
              />
            </div>
            <p className="ml-auto text-right text-base md:text-lg w-full">
              Turn insecure code into secure code, instantly through AI-<br />
              powered rewrites that preserve logic while removing risks.
            </p>
          </div>
          <div className="border-b border-[#D9D9D9] mt-4"></div>
        </div>

        {/* 3 */}
        <div>
          <div className="flex items-start w-full">
            <div className="bg-[#EDEDED] p-4 rounded-md flex items-center justify-center min-w-[60px] min-h-[60px]">
              <Image
                src="/python_env.svg"
                alt="python IDE icon"
                width={70}
                height={70}
                className="scale-300"
              />
            </div>
            <p className="ml-auto text-right text-base md:text-lg w-full">
              Run, debug, and test inside navillo’s built-in Python IDE without <br />
              setup, switching windows, and no lost flow.
            </p>
          </div>
          <div className="border-b border-[#D9D9D9] mt-4"></div>
        </div>

        {/* 4 */}
        <div>
          <div className="flex items-start w-full">
            <div className="bg-[#EDEDED] p-4 rounded-md flex items-center justify-center min-w-[60px] min-h-[60px]">
              <Image src="/lock.svg" alt="lock icon" width={70} height={70} className="scale-300" />
            </div>
            <p className="w-full text-right text-base md:text-lg">
              navillo gets smarter with every fix — adapting to your team’s <br />
              stack and frameworks. Conditions apply.
            </p>
          </div>
          <div className="border-b border-[#D9D9D9] mt-4"></div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="font-inter mx-4 md:mx-20 lg:mx-40 mt-16">
        <h1 className="text-4xl font-medium mb-10">Frequently Asked Questions</h1>
        {faq.map((item, index) => (
          <div key={index} className="mb-6">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="font-semibold text-lg text-[#C45816]">{item.question}</h2>
              {openIndex === index ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </div>
            {openIndex === index && (
              <div className="mt-2">
                <p className="text-gray-700">{item.answer}</p>
              </div>
            )}
            {/* Divider line between FAQ items */}
            <div className="border-b border-[#D9D9D9] mt-4"></div>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center">
        <Image
          src="/navillologo.png"
          width={1000}
          height={1}
          alt="navillo logo"
          className="mx-auto mt-[-150]"
        />
        <button onClick={handleWaitlist} className="cursor-pointer mt-[-150] mb-15 bg-gradient-to-r from-[#C45816] to-[#E37633] text-white py-4 px-10 rounded-lg text-lg flex items-center gap-2">
          Join the waitlist <FaChevronRight />
        </button>
      </div>

      {/* Rest of your content remains unchanged */}
      <div className="font-inter bg-[#D9D9D9] border-2 border-[#000000] rounded-3xl mx-4 md:mx-20 lg:mx-40 p-6 min-h-[500px] flex flex-col md:flex-row justify-center items-center text-center">
        <h1 className="text-6xl">
            Mockup
        </h1>
      </div>
      
<div className="font-inter flex flex-col justify-between items-start text-left space-y-2 mx-4 md:mx-20 lg:mx-40 mt-16 mb-10">
  <p className="text-[#C45816]">Next-gen compliance for small teams</p>
  <h1 className="text-4xl font-medium">Automate and stay compliant without overhead.</h1>
  <div className="border-b w-full border-[#D9D9D9] mt-4 mb-4"></div>
  {/* Compliance Section */}
  <div className="flex flex-col md:flex-row justify-between w-full">
    {/* Left side heading */}
    <h1 className="text-left text-[#181818] font-light md:w-1/3">
      YOUR DATA IS HANDLED <br /> WITH CARE — AND BUILT <br /> TO STAY THAT WAY
    </h1>

    {/* Right side features */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-2/3">
      <div>
        <Image 
          src="/rocket.svg"
          alt="rocket icon"
          width={100}
          height={100}
        />
        <h1 className="text-xl font-medium">Secure by design</h1>
        <p>
          Every product we build follows a <br /> “security-first” design model.
        </p>
      </div>
      <div>
        <Image 
          src="/lock_soc2.svg"
          alt="lock soc2"
          width={100}
          height={100}
        />
        <h1 className="text-xl font-medium">Encrypted everywhere</h1>
        <p>
          Sensitive data, such as API keys and <br /> variables are encrypted
          using <br /> standard open-source libraries.
        </p>
      </div>
      <div>
        <Image 
          src="/manifying.svg"
          alt="manifying glass icon"
          width={100}
          height={100}
        />
        <h1 className="text-xl font-medium">Transparency over certifications</h1>
        <p className="text-sm text-[#181818] font-light">
          We don’t claim formal SOC-2 or ISO <br /> certifications, but the frameworks we <br /> use are designed around their <br /> principles.
        </p>
      </div>
      <div>
        <Image 
          src="/document.svg"
          alt="document icon"
          width={100}
          height={100}
        />
        <h1 className="text-xl font-medium">Policy templates for small teams</h1>
        <p className="text-sm text-[#181818] font-light">
          We’re developing a lightweight legal <br /> and documentation toolkit that helps <br /> early-stage teams set up clear <br /> internal policies.
        </p>
      </div>
    </div>
  </div>

  <div className="border-b border-[#D9D9D9] mt-8 mb-8 w-full"></div>

  {/* Technical Foundations Section */}
  <div className="flex flex-col md:flex-row justify-between w-full mt-6">
    {/* Left side heading */}
    <h1 className="text-left text-[#181818] font-light md:w-1/3">
      TECHNICAL FOUNDATIONS
    </h1>

    {/* Right side features */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-2/3">
      <div>
        <h1 className="text-xl font-medium">Isolated workspace environment.</h1>
        <p>
          Each project and dataset runs its own <br /> containerized
          environment.
        </p>
      </div>
      <div>
        <h1 className="text-xl font-medium">No shadow data.</h1>
        <p>
          No data is collected or <br /> retained from user sessions.
        </p>
      </div>
    </div>
  </div>
</div>
      <div className="border-b border-[#E37633] mt-20"></div>
      <div className="flex flex-col gap-y-6 mb-10 mt-20">
        <h1 className="items-center text-center justify-center text-5xl font-inter font-medium">
          Built for builders, students, and teams <br /> redefining what small
          means.
        </h1>
        <p className="items-center text-center justify-center ">
          From a high school engineering group to a growing ecosystem of secure,{" "}
          <br /> real-world products — navillo is where ambitious ideas get built
          right.
        </p>
        <div className="flex gap-4 mt-4 items-center justify-center">
          <button onClick={handleWaitlist} className="bg-gradient-to-r from-[#C45816] to-[#E37633] text-white py-3 px-6 rounded-lg flex items-center gap-2 hover:cursor-pointer">
            Join the waitlist <FaChevronRight />
          </button>
          <button
            onClick={() => router.push("/blog")}
            className="bg-gradient-to-r from-[#43444E] to-[#232428] text-white py-3 px-6 rounded-lg flex items-center gap-2 hover:cursor-pointer"
          >
            Explore our blog <FaChevronRight />
          </button>
        </div>
        <p className="items-center justify-center text-center mt-6 italic font-light font-inter">
          Proudly built by young engineers from Georgia and beyond.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Product;