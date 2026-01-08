"use client";

import React, { useState } from "react";
// import Navbar from "@/app/components/navbar";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
// import Footer from "../components/footer";
import { useRouter } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import Image from "next/image";

const Product = () => {
  const router = useRouter();

  const faq = [
    {
      question: "What problem does Navillo solve?",
      answer:
        "Navillo addresses one of the biggest barriers faced by people with disabilities: safe, affordable, and independent daily transportation. It enables users to move through hospitals, airports, and pedestrian spaces without relying on caregivers or manual navigation.",
    },
    {
      question: "How does Navillo navigate safely on its own?",
      answer:
        "Navillo uses a combination of depth cameras, LiDAR, wheel encoders, and inertial sensors to understand its surroundings in real time. Advanced robotics software plans safe paths, avoids obstacles, and adapts instantly to people and changing environments.",
    },
    {
      question: "Do I need to know how to use complex controls or technology?",
      answer:
        "No. Navillo is designed with minimalistic controls. Users simply select a destination or direction, and Navillo handles navigation, obstacle avoidance, and arrival automatically.",
    },
    {
      question: "Where can Navillo be used?",
      answer:
        "Navillo is designed for pedestrian environments such as hospitals, airports, campuses, and indoor public spaces. Over time, support will expand to broader urban and community settings.",
    },
    {
      question: "Is Navillo affordable compared to other powered wheelchairs?",
      answer:
        "Yes. Navillo is built using cost-efficient hardware and open robotics software, allowing it to deliver advanced autonomy at a fraction of the cost of existing solutions, which often exceed $10,000.",
    },
    {
      question: "Is Navillo safe for elderly or visually impaired users?",
      answer:
        "Safety is central to Navillo’s design. The system continuously monitors its surroundings, slows or stops near obstacles, and prioritizes smooth, predictable motion to ensure comfort and trust for elderly and visually impaired users.",
    },
    {
      question: "Does Navillo replace caregivers or medical staff?",
      answer:
        "No. Navillo is designed to assist, not replace, caregivers. It reduces the need for constant physical guidance, allowing staff and family members to focus on care, not transportation.",
    },
    {
      question: "How does Navillo improve over time?",
      answer:
        "Navillo’s software learns from real-world operation and testing environments, improving navigation accuracy and reliability while adapting to new spaces and layouts.",
    },
    {
      question: "Who is Navillo built for?",
      answer:
        "Navillo is built for people with mobility or visual impairments, the elderly, and institutions like hospitals and airports that want to provide safe, independent mobility at scale.",
    },
    {
      question: "Is Navillo available today?",
      answer:
        "Navillo is currently in development and pilot testing. Early deployments are focused on hospitals and controlled public environments before expanding to wider consumer use.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="font-inter flex flex-col justify-center items-center text-center space-y-3 my-15 mb-30 mx-4 md:mx-20 lg:mx-40">
        <h1 className="text-5xl text-left font-medium w-full">
          Building the{" "}
          <span className="text-transparent bg-gradient-to-r from-[#7E7E7E] to-[#181818] inline-block bg-clip-text">
            assistive technology
          </span>{" "}
          <br />
          that makes transporation accessibly <br /> to everyone.
        </h1>

        {/* Subtext & Button stacked directly under heading */}
        <div className="w-full flex flex-row items-start pt-2 gap-6 mb-10">
          <p className="text-left text-lg w-full md:w-3/4">
            The era of assistive technology is here. We believe in equality, and that everyone has a right <br />
            to do what they love without being inhibited by health issuees outside of their domain and that they <br/>
            cannot control.
          </p>
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

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
          <h1 className="text-4xl font-medium font-inter mb-4 md:mb-0">
            Soon launching in hospitals in India.
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
              Navigation the world without any fear <br />
              Real-time object detection to avoid obstacles.
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
              Turn dependence into something incredible with autonomous navigation<br />
              landing you anywhere you want, at the click of a button.
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
              Navillo learns as you move with curriculum learning <br />
              adapting to specific environments, learning from mistakes.
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
              Powered by accessible components and low-powered micro-controllers <br />
              automatic mapping with RTAB-SLAM and moving with A*.
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
      
<div className="font-inter flex flex-col justify-between items-start text-left space-y-2 mx-4 md:mx-20 lg:mx-40 mt-16 mb-10">
  <h1 className="text-4xl font-medium">Automate and stay compliant without overhead.</h1>
  <div className="border-b w-full border-[#D9D9D9] mt-4 mb-4"></div>
  {/* Compliance Section */}
  <div className="flex flex-col md:flex-row justify-between w-full">
    {/* Left side heading */}
    <h1 className="text-left text-[#181818] font-light md:w-1/3">
      YOUR SAFETY IS OUR PRIORITY <br /> EMPHASIZE CARE — AND BUILT <br /> TO STAY THAT WAY
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
        <h1 className="text-xl font-medium">Break away from mobility barriers</h1>
        <p className="text-sm text-[#181818] font-light">
          Navillo restores independence by autonomously 
          navigating real-world pedestrian environments, safely transporting users <br />
          without relying on others.
        </p>
      </div>
      <div>
        <Image 
          src="/lock_soc2.svg"
          alt="lock soc2"
          width={100}
          height={100}
        />
        <h1 className="text-xl font-medium">Autonomously navigate anywhere you want</h1>
        <p className="text-sm text-[#181818] font-light">
          Navillo transforms a wheelchair into a mobility system, following user directions  
          while removing physical and cognitive loads of navigation.
        </p>
      </div>
      <div>
        <Image 
          src="/manifying.svg"
          alt="manifying glass icon"
          width={100}
          height={100}
        />
        <h1 className="text-xl font-medium">Why Navillo?</h1>
        <p className="text-sm text-[#181818] font-light">
          Because mobility should not depend on sight, strength, or wealth. 
          Navillo gives people back their time, independence, and access to opportunity — 
          starting with transportation, the foundation of modern life.
        </p>
      </div>
      <div>
        <Image 
          src="/document.svg"
          alt="document icon"
          width={100}
          height={100}
        />
        <h1 className="text-xl font-medium">Easily accessible by design, affordable for everyone</h1>
        <p className="text-sm text-[#181818] font-light">
          {/* Navillo solves the largest barrier faced by people with disabilities: <br/>
          affordable, reliable daily transportation that works in chaotic, human-centered spaces. */}
          By leveraging proven robotics software and low-cost hardware, Navillo delivers advanced 
          autonomy at a fraction of the cost of existing mobility solutions.
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
        <h1 className="text-xl font-medium">Core infrastructure.</h1>
        <p className="text-sm text-[#181818] font-light">
          Every part of the wheelchair is designed to be <br/> easily generalized, in a containerized
          environment.
        </p>
      </div>
      <div>
        <h1 className="text-xl font-medium">Safety first.</h1>
        <p className="text-sm text-[#181818] font-light">
          We prioritize user safety before we implement anything else, <br /> ensuring everyone&apos;s health is 
          not at risk.
        </p>
      </div>
    </div>
  </div>
</div>
      <div className="border-b border-[#E37633] mt-20"></div>
      <div className="flex flex-col gap-y-6 mb-10 mt-20">
        <h1 className="items-center text-center justify-center text-5xl font-inter font-medium">
          Built for the disabled, the elderly, and for researchers <br /> redefining what accessible
          means.
        </h1>
        <p className="items-center text-center justify-center ">
          From a high school engineering group to a growing ecosystem of safe,{" "}
          <br /> innovative real-world products — navillo is powerful wheelchair designed
          for everyone.
        </p>
        <div className="flex gap-4 mt-4 items-center justify-center">
          {/* <button onClick={handleWaitlist} className="bg-gradient-to-r from-[#C45816] to-[#E37633] text-white py-3 px-6 rounded-lg flex items-center gap-2 hover:cursor-pointer">
            Join the waitlist <FaChevronRight />
          </button> */}
          <button
            onClick={() => router.push("/blog")}
            className="bg-gradient-to-r from-[#43444E] to-[#232428] text-white py-3 px-6 rounded-lg flex items-center gap-2 hover:cursor-pointer"
          >
            Explore our blog <FaChevronRight />
          </button>
        </div>
        <p className="items-center justify-center text-center mt-6 italic font-light font-inter">
          Proudly built by young engineers from New Jersey, Georgia, and beyond.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Product;