"use client";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import React from "react";
import Image from "next/image";

import { IoCheckmark } from "react-icons/io5";
import { HiOutlineXMark } from "react-icons/hi2";

export const plans = [
  {
    link: "https://buy.stripe.com/test_8x214f3a2ghVdVzfD43F603",
    priceId: "price_1SFjE31Hwiygz4x1ZnMAgJ4B",
    price: 9,
    duration: "/onetime"
  },
  {
    link: "https://buy.stripe.com/test_eVq00bh0SghV3gVgH83F604",
    priceId: "price_1SFjKA1Hwiygz4x1snwn6rfu",
    price: 20,
    duration: "/onetime"
  }
]

const Pricing = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-y-6 mb-15 mt-20">
        <h1 className="text-6xl font-semibold flex items-center justify-center text-center gap-2">
          Get started 
          <Image
            src="/navillo_labs_logo.png"
            width={71}
            height={80}
            alt="navillo Labs Logo"
            className="rotate-345 scale-100"
          />
          <span className="text-6xl font-semibold text-[#C45816]">
            for free.
          </span>
        </h1>
        <p className="text-xl text-center font-normal">
          Whether you&apos;re building for fun or for scale, navillo keeps every line
          of <br /> code secure by default.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="font-inter flex flex-col md:flex-row items-stretch justify-center gap-10 mt-10 mb-45 px-6 md:px-20">
        {/* Starter Card */}
        <div className="border-2 border-[#E37633] rounded-3xl p-6 flex flex-col justify-between w-full md:w-[400px] lg:w-[450px] h-full min-h-[600px] bg-white shadow-sm">
          <div>
            <h1 className="text-lg">Starter</h1>
            <h2 className="text-4xl font-medium mt-2 mb-5">Free</h2>
            <button className="w-full mb-5 bg-gradient-to-r from-[#43444E] to-[#232428] text-white py-3 px-6 rounded-xl text-center justify-center flex items-center gap-2 hover:cursor-pointer">
              <a
                href="https://tally.so/r/wa7EEZ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the waitlist
              </a>
            </button>
            <p className="mt-4">Every core feature included.</p>
            <div className="border-b border-[#D9D9D9] mt-4"></div>
            <div className="flex flex-col gap-y-3 mt-4">
              <div className="flex items-center gap-2">
                <IoCheckmark />
                <p>AI-powered security guardrails</p>
              </div>
              <div className="flex items-center gap-2">
                <IoCheckmark />
                <p>Feedback on common vulnerabilities</p>
              </div>
              <div className="flex items-center gap-2">
                <IoCheckmark />
                <p>Access to base LLM for code rewrite</p>
              </div>
              <div className="flex items-center gap-2">
                <IoCheckmark />
                <p>Local-only environment for full data</p>
              </div>
            </div>
          </div>
          <div className="mt-auto mb-2"></div>
        </div>

        {/* Pro Card */}
        <div className="border-2 border-[#E37633] rounded-xl p-6 flex flex-col justify-between w-full md:w-[280px] lg:w-[450px] h-full min-h-[600px] bg-white shadow-sm">
          <div>
            <h1 className="text-lg">Pro</h1>
            <h2 className="text-4xl font-medium mt-2 mb-5 flex items-end gap-1">
              $9 <span className="font-normal text-xl">/ lifetime</span>
            </h2>
            <button className="mb-5 bg-gradient-to-r from-[#43444E] to-[#232428] text-white py-3 px-6 rounded-3xl text-center justify-center flex items-center gap-5 w-full hover:cursor-pointer">
              <a href={plans[0].link} target="_blank" rel="noopener noreferrer">
                Subscribe
              </a>
            </button>
            <p className="mt-4">Every core feature included.</p>
            <div className="border-b border-[#D9D9D9] mt-4"></div>
            <h3 className="mt-4 font-medium">Everything in the starter, and...</h3>
            <div className="flex flex-col gap-y-3 mt-4">
              <div className="flex items-center gap-2">
                <IoCheckmark />
                <p>Real-time secure rewrite across multiple files</p>
              </div>
              <div className="flex items-center gap-2">
                <IoCheckmark />
                <p>Access to improved navillo LLM</p>
              </div>
              <div className="flex items-center gap-2">
                <IoCheckmark />
                <p>Encrypted cloud sync for multi-device development</p>
              </div>
            </div>
          </div>
          <div className="mt-auto mb-2"></div>
        </div>

        {/* Advanced Card */}
        <div className="border-2 border-[#E37633] rounded-xl p-6 flex flex-col justify-between w-full md:w-[280px] lg:w-[450px] h-full min-h-[600px] bg-white shadow-sm">
          <div>
            <h1 className="text-lg">Advanced</h1>
            <h2 className="text-4xl font-medium mt-2 mb-5 flex items-end gap-1">
              $20 <span className="text-xl font-normal">/ lifetime</span>
            </h2>
            <button className="mb-5 bg-gradient-to-r from-[#C45816] to-[#d66119] mt-5 text-white py-3 px-6 rounded-3xl text-center justify-center w-full flex items-center gap-2 hover:cursor-pointer">
            <a href={plans[1].link} target="_blank" rel="noopener noreferrer">
              Level up
            </a>
            </button>
            <p className="mt-4">Every core feature included.</p>
            <div className="border-b border-[#D9D9D9] mt-4"></div>
            <h3 className="mt-4 font-medium">
              Everything in the pro, and even more...
            </h3>
            <div className="flex flex-col gap-y-3 mt-4">
              <div className="flex items-center gap-2">
                <IoCheckmark />
                <p>
                  Full compliance toolkit and early access to SOC-2 automation tools
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoCheckmark />
                <p>Project-level analytics and AI-generated security reports</p>
              </div>
              <div className="flex items-center gap-2">
                <IoCheckmark />
                <p>Priority access to new navillo models and beta features</p>
              </div>
            </div>
          </div>
          <div className="mt-auto mb-2"></div>
        </div>
      </div>
      <div className="w-full flex flex-col font-inter px-6 md:px-20 mt-10 mb-20">
        {/* Header Row: Plans */}
        <div className="grid grid-cols-[1.2fr_repeat(3,1fr)] gap-x-12 w-full mb-12 items-start">
          <div></div>

          {/* Starter */}
          <div className="flex flex-col items-start text-left">
            <h1 className="text-2xl font-medium">Starter</h1>
            <p className="text-lg text-gray-700">Free</p>
            <button className="mb-5 bg-gradient-to-r from-[#43444E] to-[#232428] text-white mt-4 py-3 px-6 rounded-xl w-full flex items-center justify-center hover:cursor-pointer">
              <a href="https://tally.so/r/wa7EEZ" target="_blank" rel="noopener noreferrer">
                Join the waitlist
              </a>
            </button>
          </div>

          {/* Pro */}
          <div className="flex flex-col items-start text-left">
            <h1 className="text-2xl font-medium">Pro</h1>
            <p className="text-lg text-gray-700">$9 / lifetime</p>
            <button className="mb-5 bg-gradient-to-r from-[#43444E] to-[#232428] text-white mt-4 py-3 px-6 rounded-xl w-full flex items-center justify-center hover:cursor-pointer">
              <a href={plans[0].link} target="_blank" rel="noopener noreferrer">Subscribe</a>
            </button>
          </div>

          {/* Advanced */}
          <div className="flex flex-col items-start text-left">
            <h1 className="text-2xl font-medium">Advanced</h1>
            <p className="text-lg text-gray-700">$20 / lifetime</p>
            <button className="mb-5 bg-gradient-to-r from-[#C45816] to-[#E37633] text-white mt-4 py-3 px-6 rounded-xl w-full flex items-center justify-center hover:cursor-pointer">
              <a href={plans[1].link} target="_blank" rel="noopener noreferrer">Level up</a>
            </button>
          </div>
        </div>

        {/* Feature Sections */}
        {[
          {
            title: "Build Better",
            rows: [
              ["Real-time Guardrails", ["Check", "Check", "Check"]],
              ["AI Rewrite Engine", ["Check", "Check", "Enhanced"]],
              ["Execution Sandbox", ["X", "Local", "Cloud-based"]],
              ["Performance Metrics", ["X", "Check", "Advanced"]],
            ],
          },
          {
            title: "Your Coding Flow",
            rows: [
              ["navillo Access", ["Core", "navillo+", "navillo-X"]],
              ["Prompt Customization", ["X", "Basic", "Persistent Memory"]],
              ["Daily Usage Limit", ["25/day", "100/day", "Unlimited"]],
              ["Project History", ["X", "X", "Check"]],
              ["API Key Access", ["X", "Check", "Extended"]],
            ],
          },
          {
            title: "Community and Growth",
            rows: [
              ["Community Hub", ["Check", "Priority", "Multi-device Access"]],
              ["Response Priority", ["X", "X", "Fast-Track"]],
              ["Early Features", ["X", "Check", "Early Beta Access"]],
              ["Onboarding", ["Self-Serve", "Guided", "Custom Setup"]],
            ],
          },
        ].map((section, sIdx) => (
          <div key={sIdx} className={`flex flex-col w-full gap-8 ${sIdx > 0 ? "mt-20" : ""}`}>
            <h1 className="text-2xl font-medium text-left">{section.title}</h1>

            {section.rows.map(([feature, plans], idx) => (
              <React.Fragment key={idx}>
                <div className="grid grid-cols-[1.2fr_repeat(3,1fr)] gap-x-12 items-start">
                  <div className="text-left">
                    <h2 className="text-xl font-semibold">{feature}</h2>
                  </div>

                  {plans.map((val, i) => (
                    <div key={i} className="flex items-center text-black text-xl">
                      {val === "X" ? (
                        <HiOutlineXMark className="text-black text-xl" />
                      ) : val === "Check" ? (
                        <IoCheckmark className="text-black text-xl" />
                      ) : (
                        <p className="flex items-center gap-1">
                          <IoCheckmark className="text-black text-xl" /> {val}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                <div className="border-b border-[#D9D9D9] w-full"></div>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
        <div className="relative flex items-center justify-center bg-transparent mt-35 mb-20 mx-auto w-3/4 h-[500px] rounded-3xl">
          {/* Background Image */}
          <Image
            src="/pricing_hs.png" // replace with your background image path
            alt="Coming Soon Background"
            fill
            className="object-cover rounded-3xl"
          />

          {/* Overlay for darkening if needed */}
          <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 space-y-4">
            <h1 className="text-2xl md:text-3xl font-medium">Coming soon</h1>
            <h1 className="text-5xl md:text-6xl font-medium">
              Free for students. Six months on us.
            </h1>
            <p className="text-lg md:text-xl font-normal max-w-2xl">
              We&apos;re building navillo in high school — and we&apos;re keeping it that way. <br />
              Every verified high school student gets full access to navillo Pro for 6 <br />
              months, completely free.
            </p>
          </div>
        </div>
      <Footer />
    </>
  );
};

export default Pricing;