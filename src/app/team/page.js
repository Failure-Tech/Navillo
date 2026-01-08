"use client";

import React from "react";
// import Navbar from "../components/navbar";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
// import Footer from "../components/footer";
import Image from "next/image";

const Team = () => {
  const team = [
    {
      name: "Umang Sharma",
      image: "/umang.png",
      description:
        "Umang Sharma is a student at Princeton Day School and is passionate about electrical and computer engineering and computer science. He is currently working on projects and learning about IoT devices, robotics, artificial intelligence, and machine learning algorithms, including deep learning and computer vision. He is deeply fascinated by the world of technology and constantly seek to stay updated with the latest advancements. Through his skills and expertise, Umang strives to make a positive impact by leveraging technology for the betterment of society. ",
    },
    {
      name: "Sunkalp Chandra",
      image: "/sunkalp.png",
      description:
        "Sunkalp Chandra is a motivated technologist with strong interests in software development, engineering, and computational biology. He has hands-on experience in machine learning, web development, and biomedical research, bringing both technical depth and intellectual curiosity to his work. Sunkalp is deeply interested in the design and development of affordable, impact-driven innovations to solve real-world problems and create accessible solutions that improve lives. ",
    },
    {
      name: "Arnav Maheshwari",
      image: "/arnav.jpg",
      description:
        "Sample description",
    },
    {
      name: "Gautham Korrapati",
      image: "/gautham.jpg",
      description:
        "Gautham Korrapati is a current junior at Academy of the Canyons, and is passionate about all-things robotics related. He has expertise with building machine learning neural networks, web development, and building minature circuts for various side projects. He brings the technical depth to this team, using his experience and knowledge to develop simulations, program the wheelchair, generating mapping, and much more. Gautham also has experience in research, publishing a paper in IEEE as well.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="flex items-start justify-center px-6 pt-10 font-inter mb-20">
        <div className="flex items-center gap-10 mx-auto">
          <div className="flex flex-col space-y-4 text-left">
            <h1 className="font-semibold text-[7rem] leading-[6.5rem]">
              Team
            </h1>
            <p className="text-xl leading-snug text-[#333]">
              The people building Navillo —
              engineers, <br /> designers, and
              problem-solvers.
            </p>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="w-full flex justify-center mt-20 mb-30 font-inter">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 px-6 max-w-[1600px]">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col w-[350px]"
            >
              <div className="relative w-full h-[380px]">
                <Image
                  src={member.image}
                  alt={member.name}
                //   layout="fill"
                  width={400}
                  height={400}
                  style={
                    {
                        objectFit: "cover",
                        layout: "fill"
                    }
                }
                />
              </div>

              <div className="flex flex-col px-6 pt-6 pb-8 text-left space-y-3">
                <h3 className="text-2xl font-semibold text-[#1e1e1e]">
                  {member.name}
                </h3>
                <p className="text-sm text-[#333] leading-snug">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Team;
