"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const Demo = () => {
  return (
    <video width="973" height="535" controls preload="none">
      <source src="/backup_demo_vid.mp4" type="video/mp4" />
    </video>
  )
}

const handleNavigate = () => {
    window.open("https://tally.so/r/wa7EEZ", "_blank");
}

const Home = () => {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [currentBuilder, setCurrentBuilder] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const builders = [
    "stealth startups",
    "student founders",
    "two-person teams",
    "weekend hackers",
    "innovators"
  ];

  // Typing effect
  useEffect(() => {
    const currentWord = builders[currentBuilder];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentBuilder((prev) => (prev + 1) % builders.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentBuilder]);

  const scrollToProduct = () => {
    document.getElementById('product-section')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scroll-animate {
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        html {
          scroll-behavior: smooth;
        }

        .typing-cursor::after {
          content: '|';
          animation: blink 1s infinite;
          margin-left: 2px;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>

      <Navbar />

      {/* HERO Section */}
      <div className="relative flex flex-col items-center text-center px-4 overflow-hidden pt-8 pb-16">
        <Image 
          alt="Navy Hero Image"
          src="/8.svg"
          width={900}
          height={900}
          className="-mt-28 mb-0 opacity-95"
        />

        <div className="-mt-35 z-10 flex flex-col items-center relative space-y-6 max-w-5xl">
          <h1 className="font-inter font-semibold text-[#181818] text-6xl leading-tight">
            We create the tools that power <br /> tomorrow&apos;s{" "}
            <span className="inline-block min-w-[320px] text-left text-[#C45816] typing-cursor">
              {displayText}
            </span>
          </h1>

          <div className="relative flex items-center justify-center mt-3 mb-2">
            {/* <Image 
              alt="Arrow Icon"
              src="/11.svg"
              width={500}
              height={500}
              className="absolute -left-80 -top-4 rotate-180 opacity-40"
            /> */}

            <p className="font-inter text-xl text-[#333333] max-w-2xl relative z-10 px-4 leading-relaxed">
              navillo is a Gen-Z engineering team building AI, cyber, and finance
              products that give small teams the power of big companies.
            </p>
          </div>

          <div className="relative flex items-center justify-center space-x-6 mt-10 text-xl z-10">
            {/* <Image 
              alt="Key Icon"
              src="/10.svg"
              width={500}
              height={500}
              className="absolute -left-64 -top-24 -rotate-45 opacity-30"
            /> */}

            <button onClick={handleNavigate} className="font-inter font-medium flex items-center cursor-pointer gap-2 bg-gradient-to-r from-[#C45816] to-[#d66119] text-white px-8 py-3.5 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 z-10 shadow-xl">
              Join the waitlist <FaChevronRight className="text-sm" />
            </button>
            <button onClick={() => router.push("/blog")} className="font-inter font-medium flex items-center cursor-pointer gap-3 bg-gradient-to-r from-[#373941] to-[#232428] text-white px-8 py-3.5 rounded-lg hover:bg-[#4a4b54] hover:shadow-2xl hover:scale-105 transition-all duration-300 z-10 shadow-xl">
              See our work <FaChevronRight className="text-sm" />
            </button>

            {/* <Image 
              alt="Money Icon"
              src="/9.svg"
              width={500}
              height={500}
              className="absolute -right-64 -top-28 rotate-12 opacity-30"
            /> */}
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div id="product-section" className="mt-32 px-6 scroll-mt-24 scroll-animate">
        <div className="max-w-5xl mx-auto text-left space-y-5">
          <h1 className="font-inter text-[#C45816] text-xl font-medium uppercase tracking-wide">
            Introducing our first product
          </h1>
          <h1 className="font-inter font-medium text-5xl text-[#181818] leading-tight">
            Meet navillo. The AI layer that makes every <br /> line of code secure by default.
          </h1>

          <div className="pt-8">
            {/* <Image 
              alt="navillo Product Interface"
              src="/window.svg"
              width={973}
              height={535}
              className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
            /> */}
            <Demo />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-32 px-6 scroll-animate">
        <div className="flex flex-col lg:flex-row justify-center text-left gap-x-20 gap-y-5 max-w-6xl mx-auto">
          <div className="flex flex-col items-left text-left font-inter space-y-3 max-w-md hover:scale-105 transition-transform duration-500">
            <h1 className="text-4xl font-semibold text-[#181818]">Real-time Guardrails</h1>
            <p className="text-lg text-[#555555] leading-relaxed">
              Flags insecure code as it&apos;s generated, keeping <br /> developers safe without leaving their editor.
            </p>
            <Image 
              alt="Guardrails Image"
              src="/real_time_guardrails.png"
              width={461}
              height={260}
              className="rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
            />
          </div>

          <div className="flex flex-col items-left text-left font-inter space-y-3 max-w-md hover:scale-105 transition-transform duration-500">
            <h1 className="font-inter text-4xl font-semibold text-[#181818]">Instant Secure Rewrite</h1>
            <p className="font-inter text-lg text-[#555555] leading-relaxed">
              Generates a secure alternative instantly, reducing <br /> the time spent fixing vulnerabilities later.
            </p>
            <Image 
              alt="Instant Secure Rewrite Image"
              src="/instant_rewrite.png"
              width={461}
              height={260}
              className="rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-start text-left font-inter space-y-8 px-6 mt-36 max-w-5xl mx-auto scroll-animate">
        <h1 className="text-xl text-[#C45816] font-inter font-medium uppercase tracking-wide">
          It&apos;s time to code safe
        </h1>
        
        <h1 className="text-6xl font-inter font-medium text-[#181818] leading-tight">
          Debugging. Shipping apps. <br />
          Writing APIs. Building fintech. <br />
          Every line of code.
        </h1>

        <button onClick={handleNavigate} className="cursor-pointer flex font-inter font-medium items-center gap-3 bg-gradient-to-r from-[#C45816] to-[#d66119] text-white px-8 py-3.5 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl">
          Join the waitlist <FaChevronRight className="text-sm" />
        </button>
      </div>

      {/* Smart Coding Section */}
      <div className="px-6 py-32 flex flex-col items-center text-center font-inter scroll-animate">
        <h1 className="text-5xl font-semibold text-[#181818] mb-10">
          Smarter coding starts with safety
        </h1>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-10 max-w-6xl">
          <div className="bg-gradient-to-br from-[#F9F8F8] to-[#F2F1F1] p-10 rounded-4xl shadow-lg w-full sm:w-[340px] flex flex-col items-center text-center font-inter hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <Image alt="Write and run code" src="/window.svg" width={251} height={251} className="rounded-xl" />
            <p className="mt-7 text-[#181818] text-base leading-relaxed">
              <span className="font-medium text-lg">Write and run code, instantly</span>{" "}
              <button
                onClick={() => setExpanded1(!expanded1)}
                className="inline-flex items-center text-[#C45816] ml-2 hover:text-[#d66119] transition-all duration-300"
              >
                {expanded1 ? <FaChevronDown className="transition-transform duration-300" /> : <FaChevronRight className="transition-transform duration-300" />}
              </button>
              {expanded1 && (
                <span className="block mt-5 text-[#555555] font-normal text-sm leading-relaxed">
                  An in-browser Python environment with AI and security built in — no setup required.
                </span>
              )}
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#F9F8F8] to-[#F2F1F1] p-10 rounded-4xl shadow-lg w-full sm:w-[340px] flex flex-col items-center text-center font-inter hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <Image alt="Copy-paste" src="/window.svg" width={251} height={251} className="rounded-xl" />
            <p className="mt-7 text-[#181818] text-base leading-relaxed">
              <span className="font-semibold text-lg">Copy-paste without guessing</span>{" "}
              <button
                onClick={() => setExpanded2(!expanded2)}
                className="inline-flex items-center text-[#C45816] ml-2 hover:text-[#d66119] transition-all duration-300"
              >
                {expanded2 ? <FaChevronDown className="transition-transform duration-300" /> : <FaChevronRight className="transition-transform duration-300" />}
              </button>
              {expanded2 && (
                <span className="block mt-5 text-[#555555] font-normal text-sm leading-relaxed">
                  A library of pre-audited code snippets for APIs, auth, and data handling, safe by default.
                </span>
              )}
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#F9F8F8] to-[#F2F1F1] p-10 rounded-4xl shadow-lg w-full sm:w-[340px] flex flex-col items-center text-center font-inter hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <Image alt="Support" src="/window.svg" width={251} height={251} className="rounded-xl" />
            <p className="mt-7 text-[#181818] text-base leading-relaxed">
              <span className="font-semibold text-lg">Support you can trust</span>{" "}
              <button
                onClick={() => setExpanded3(!expanded3)}
                className="inline-flex items-center text-[#C45816] ml-2 hover:text-[#d66119] transition-all duration-300"
              >
                {expanded3 ? <FaChevronDown className="transition-transform duration-300" /> : <FaChevronRight className="transition-transform duration-300" />}
              </button>
              {expanded3 && (
                <span className="block mt-5 text-[#555555] font-normal text-sm leading-relaxed">
                  A custom model tuned for security and finance, delivering safer code than competing LLMs.
                </span>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Plugins Section - Completely Revamped */}
      <div className="px-6 py-32 bg-gradient-to-b -mt-10 from-white via-gray-50 to-white scroll-animate">
        <div className="max-w-7xl mx-auto relative flex justify-center items-center">
          
          {/* ICONS CONTAINER */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Left Stack */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-[400px] w-[200px]">
              <div className="absolute left-0 top-0 hover:scale-110 transition-transform duration-300">
                <Image alt="Github" src="/github.svg" height={80} width={80} />
              </div>
              <div className="absolute left-10 top-[140px] hover:scale-110 transition-transform duration-300 z-10">
                <Image alt="Cursor" src="/cursor_logo.png" height={80} width={80} />
              </div>
              <div className="absolute left-0 bottom-0 hover:scale-110 transition-transform duration-300">
                <Image alt="VS Code" src="/Visual_Studio_Code.png" height={80} width={80} />
              </div>
            </div>

            {/* Right Stack */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[400px] w-[200px]">
              <div className="absolute right-0 top-8 hover:scale-110 transition-transform duration-300">
                <Image alt="Javascript" src="/javascript.png" height={80} width={80} />
              </div>
              <div className="absolute right-10 top-[200px] hover:scale-110 transition-transform duration-300 z-10">
                <Image alt="Python" src="/Python.png" height={80} width={80} />
              </div>
              <div className="absolute right-10 top-[360px] hover:scale-110 transition-transform duration-300 z-10">
                <Image alt="HTML" src="/html.png" height={80} width={80} />
              </div>
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="text-center z-10 max-w-4xl">
            <h1 className="font-inter text-lg text-[#C45816] font-semibold mb-4 uppercase tracking-wide">
              Your favorite plugins
            </h1>
            <h2 className="font-inter text-5xl font-semibold text-[#181818] leading-tight mb-6">
              navillo lives where you code, <br /> upgrading the tools you <br /> already use
            </h2>
            <p className="font-inter text-xl text-[#555555] mt-8 max-w-3xl mx-auto leading-relaxed">
              navillo integrates directly with editors like Cursor and <br /> Copilot, enhancing the plugins you already use with <br /> seamless, real-time security.
            </p>
          </div>

        </div>
      </div>


      {/* People Section */}
      <div className="flex justify-center items-center px-6 py-10 font-inter scroll-animate">
        <div className="flex gap-8 items-center">
          <div className="flex flex-col gap-5">
            <Image 
              alt="Person"
              width={80}
              height={118}
              src="/person.jpg"
              className="rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            />
            <Image 
              alt="Person"
              width={80}
              height={118}
              src="/person1.jpg"
              className="rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            />
          </div>

          <div className="flex flex-col gap-5">
            <Image 
              alt="Person"
              width={80}
              height={118}
              src="/person2.jpg"
              className="rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            />
            <Image 
              alt="Person"
              width={80}
              height={118}
              src="/person3.jpg"
              className="rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            />
            <Image 
              alt="Person"
              width={80}
              height={118}
              src="/person4.jpg"
              className="rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            />
          </div>

          <div className="flex flex-col font-semibold font-inter items-center text-center space-y-8 px-12">
            <h1 className="text-4xl leading-tight">
              Leveling the playing field <br /> for students, startups, and <br /> small teams.
            </h1>
            <button onClick={() => router.push("/product")} className="cursor-pointer flex items-center gap-3 bg-gradient-to-r from-[#C45816] to-[#d66119] text-white px-8 py-3.5 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-base font-medium shadow-xl">
              See our vision <FaChevronRight className="text-sm" />
            </button>
          </div>

          <div className="flex flex-col gap-5">
            <Image 
              alt="Person"
              width={80}
              height={118}
              src="/person5.jpg"
              className="rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            />
            <Image 
              alt="Person"
              width={80}
              height={118}
              src="/person6.jpg"
              className="rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            />
            <Image 
              alt="Person"
              width={80}
              height={118}
              src="/person7.jpg"
              className="rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            />
          </div>

          <div className="flex flex-col gap-5">
            <Image 
              alt="Person"
              width={80}
              height={118}
              src="/person8.jpg"
              className="rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            />
            <Image 
              alt="Person"
              width={80}
              height={118}
              src="/person9.jpg"
              className="rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Affiliations Section */}
      <div className="flex flex-col items-center justify-center space-y-5 py-5 font-inter bg-gradient-to-b overflow-hidden from-gray-50 to-white scroll-animate">
        {/* <h2 className="text-3xl font-semibold text-[#181818] mb-6">Backed by the best</h2> */}
        
        <div className="flex flex-row items-center justify-center gap-16">
          <Image 
            alt="Pear AI"
            src="/pear_ai.png"
            width={400}
            height={400}
            className="hover:scale-110 transition-transform duration-300 opacity-80 hover:opacity-100"
          />
          <Image 
            alt="FR8"
            src="/fr8.png"
            width={400}
            height={400}
            className="hover:scale-110 transition-transform duration-300 opacity-80 hover:opacity-100"
          />
          <Image 
            alt="Partner"
            src="/cursor.png"
            width={400}
            height={400}
            className="hover:scale-110 transition-transform duration-300 opacity-80 hover:opacity-100"
          />
        </div>

        <div className="flex flex-row items-center justify-center gap-16">
          <Image 
            alt="Harvard University"
            src="/harvard_uni.png"
            width={400}
            height={400}
            className="hover:scale-110 transition-transform duration-300 opacity-80 hover:opacity-100"
          />
          <Image 
            alt="Carnegie Mellon"
            src="/carnegie_mellon.png"
            width={400}
            height={400}
            className="hover:scale-110 transition-transform duration-300 opacity-80 hover:opacity-100"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#1E1E1E] to-[#0f0f0f] text-white px-6 py-16 mt-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-5">
              <div className="flex items-center space-x-2">
                <Image 
                  src="/navillo_labs_logo.png"
                  alt="navillo logo"
                  width={50}
                  height={50}
                />
              </div>
              <p className="font-inter text-sm text-gray-400 leading-relaxed">
                Building the future of secure development tools for the next generation.
              </p>
            </div>

            <div>
              <h3 className="font-inter font-medium mb-5 text-lg">Product</h3>
              <ul className="space-y-3 font-inter text-sm">
                <li><a href="#" className="text-gray-400 hover:text-[#C45816] transition-colors duration-300">navillo</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#C45816] transition-colors duration-300">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#C45816] transition-colors duration-300">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#C45816] transition-colors duration-300">Documentation</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-inter font-semibold mb-5 text-lg">Company</h3>
              <ul className="space-y-3 font-inter text-sm">
                <li><a href="#" className="text-gray-400 hover:text-[#C45816] transition-colors duration-300">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#C45816] transition-colors duration-300">Vision</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#C45816] transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#C45816] transition-colors duration-300">Careers</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-inter font-semibold mb-5 text-lg">Legal</h3>
              <ul className="space-y-3 font-inter text-sm">
                <li><a href="#" className="text-gray-400 hover:text-[#C45816] transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#C45816] transition-colors duration-300">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#C45816] transition-colors duration-300">Security</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#C45816] transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-10 text-center">
            <p className="font-inter text-sm text-gray-500">
              © 2025 navillo Labs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;