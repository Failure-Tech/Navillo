"use client";

import React, { useState } from "react";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import Footer from "@/app/components/footer";
import { useRouter } from "next/navigation";

const Blog = () => {
  const router = useRouter();
  const [filter, setFilter] = useState("All");

  const data = [
    {
      image: "/welcome_navillo.png",
      section: "Company",
      date: "6/27/2025",
      name: "A hello and welcome from navillo",
      click: "/blog/pages/start",
      description:
        "From our roots as a small Gen-Z team in Forsyth to our vision of making technology safer and smarter for builders everywhere, this post sets the tone for everything to come.",
      author: "Arnav Maheshwari",
    },
    {
      image: "/vibecode_stack.png",
      section: "Technology",
      date: "8/23/2025",
      name: "Vibe Coding and the End of Stack Overflow",
      click: "/blog/pages/vibecoding",
      description:
        "A reflection on the rise of AI-assisted coding, cursor copilots, and why productivity is shifting from syntax mastery to problem-solving flow.",
      author: "Gautham Korrapati",
    },
    {
      image: "/navillo.png",
      section: "Company",
      date: "9/9/2025",
      name: "Building navillo: Making Code Secure by Default",
      click: "/blog/pages/navillo",
      description:
        "A behind-the-scenes look at how we’re designing an AI layer that guards every line of code, not just audits it.",
      author: "Gautham Korrapati",
    },
    {
      image: "/small_team_swe.png",
      section: "Technology",
      date: "9/17/2025",
      name: "Why Small Teams Deserve Enterprise-Grade Security",
      click: "/blog/pages/smallteamswe",
      description:
        "How cybersecurity has always been built for giants and why we’re rewriting that for builders who move fast, for cheap.",
      author: "Arnav Maheshwari",
    },
    {
      image: "/grind.png",
      section: "Company",
      date: "9/25/2025",
      name: "The Grind and Why navillo Exists",
      click: "/blog/pages/grind",
      description:
        "The founding story, from late-night Figma screens to the conviction that AI safety and fintech fairness belong together.",
      author: "Arnav Maheshwari",
    },
    {
      image: "/forsyth.png",
      section: "Company",
      date: "10/1/2025",
      name: "Why we started the Forsyth First program",
      click: "/blog/pages/forsythfirst",
      description:
        "Our mission is simple: to prove that you can build globally relevant technology from anywhere, starting right here from our humble beginnings in Forsyth County, Georgia.",
      author: "Arnav Maheshwari",
    },
  ];

  const filteredData =
    filter === "All" ? data : data.filter((post) => post.section === filter);

  const handleSocials = () => {
    window.open("https://x.com/navilloeng", "_blank");
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="flex items-start justify-center px-6 pt-10 font-inter">
        <div className="flex items-center gap-10 mx-auto">
          <div className="flex flex-col space-y-4 text-left">
            <h1 className="font-semibold text-[7rem] leading-[6.5rem]">Blog</h1>
            <p className="text-xl leading-snug text-[#333]">
              Thoughts from navillo on our journey, <br />
              experiments, and lessons in <br />
              AI, cyber, and fintech.
            </p>
          </div>

          <div>
            <Image
              alt="Ship logo"
              src="/navillo_labs_logo.png"
              height={275}
              width={275}
            />
          </div>
        </div>
      </div>

      {/* Featured Blog */}
      <div className="flex justify-center mt-20 font-inter">
        <div className="relative w-[80vw] h-[37vw] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/navillo_vision_blog_page.png"
            alt="Blog background"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between text-white bg-black/40 rounded-2xl">
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <button className="text-base font-medium flex items-center gap-2 bg-[#424143] text-white px-6 py-2.5 rounded-3xl hover:shadow-md transition-all duration-300 shadow">
                  Vision
                </button>
                <button className="text-base font-medium flex items-center gap-2 bg-[#424143] text-white px-6 py-2.5 rounded-3xl hover:shadow-md transition-all duration-300 shadow">
                  Feature
                </button>
                <div className="flex flex-col text-sm font-medium ml-6">
                  <p>September 9, 2025</p>
                </div>
                <div className="flex flex-col text-sm font-medium ml-6">
                  <p>8 min read</p>
                </div>
              </div>
            </div>
            <div>
              <button onClick={() => router.push("/blog/pages/navillo")} className="cursor-pointer font-medium flex items-center gap-3 bg-gradient-to-r from-[#373941] to-[#232428] text-white px-8 py-4 text-lg rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl">
                Read full case <FaChevronRight className="text-base" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex font-inter justify-center mt-16 font-normal text-xl gap-4 flex-wrap">
        {["All", "Technology", "Community", "Product Updates", "Company"].map(
          (cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`hover:cursor-pointer rounded-3xl border-2 px-6 py-2 transition-all duration-300 ${
                filter === cat
                  ? "border-[#C45816] bg-[#C45816] text-white"
                  : "border-[#767676] text-[#333]"
              }`}
            >
              {cat}
            </button>
          )
        )}
      </div>

      {/* Blog Grid */}
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 px-6 mt-12 font-inter mb-20 max-w-[1400px]">
          {[...filteredData].reverse().map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col w-[400px]"
            >
              <div className="relative w-full h-[400px]">
                <Image
                  src={post.image}
                  alt={post.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div
                className="flex hover:cursor-pointer flex-col px-6 pt-6 pb-8 text-left space-y-2"
                onClick={() => router.push(post.click)}
              >
                <button className="rounded-3xl border-2 px-4 py-1.5 border-[#767676] bg-[#E9E9E9] text-sm font-medium self-start mb-2">
                  {post.section}
                </button>
                <p className="text-sm text-gray-600">{post.date}</p>
                <h3 className="text-xl font-semibold text-[#1e1e1e] mb-2">
                  {post.name}
                </h3>
                <p className="text-sm text-[#333] leading-snug">
                  {post.description}
                </p>
                <p className="text-sm font-bold text-[#666]">{post.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="flex flex-col items-center text-center font-inter space-y-3 mb-10">
        <Image
          alt="3d rotate"
          src="/3d_rotate.png"
          width={520}
          height={590}
          className="rotate-345"
        />
        <h1 className="text-6xl font-medium font-inter">Stay in the loop.</h1>
        <p className="text-lg font-normal text-[#333] max-w-md">
          Keep up with the latest updates and news from navillo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button onClick={() => navigate("/product")} className="cursor-pointer font-inter font-medium flex items-center gap-3 bg-gradient-to-r from-[#C45816] to-[#d66119] text-white px-6 py-3 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 z-10 shadow-xl">
            See our tools
          </button>
          <button onClick={handleSocials} className="cursor-pointer font-inter font-medium flex items-center gap-3 bg-gradient-to-r from-[#373941] to-[#232428] text-white px-6 py-3 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 z-10 shadow-xl">
            Follow us
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;