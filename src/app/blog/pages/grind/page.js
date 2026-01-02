import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Image from "next/image";

const Grind = () => {
    return (
        <>
            <Navbar />
            <div className="font-inter flex flex-col items-start px-6 sm:px-20 md:px-32 lg:px-48 my-10 space-y-6">
                {/* Tag Buttons */}
                <div className="flex space-x-3">
                    <button className="text-white rounded-3xl px-5 py-2 bg-[#181818] text-sm">Company</button>
                    <button className="text-white rounded-3xl px-5 py-2 bg-[#181818] text-sm">Feature</button>
                </div>

                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-left">
                    The Grind and Why navillo Exists
                </h1>

                {/* Meta info (date, read time, author) */}
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <p>September 25, 2025</p>
                    <span>•</span>
                    <p>1 min read</p>
                    <span>•</span>
                    <Image
                        src="/person1.jpg"
                        alt="author image"
                        width={30}
                        height={30}
                        className="rounded-full"
                    />
                    <p>Arnav Maheshwari</p>
                </div>
            </div>

            {/* Main Image */}
            <div className="px-6 sm:px-20 md:px-32 lg:px-48 mb-10">
                <Image
                    src="/grind.png"
                    alt="grind image"
                    width={1020}
                    height={510}
                    className="rounded-xl w-full"
                />
            </div>

            {/* Article Content */}
            <div className="font-inter text-left text-sm text-gray-800 space-y-6 px-6 sm:px-20 md:px-32 lg:px-48 mb-16 leading-relaxed">
                <h1 className="text-2xl font-semibold">From Idea to Execution</h1>
                <p className="text-lg">
                    navillo was born out of countless late nights spent questioning what to build and how to make it truly useful. The idea wasn&apos;t obvious at first—it came from a blend of frustration with repetitive research workflows and the excitement of what was possible using cutting-edge machine learning.
                </p>
                <p className="text-lg">
                    Many nights were spent sketching interfaces in Figma, building mockups, and refining the product experience. The goal was always clear: build something genuinely helpful for people in research and development—something that saves time, enhances clarity, and unlocks insights.
                </p>

                <h1 className="text-2xl font-semibold">Design and Development Grind</h1>
                <p className="text-lg">
                    Crafting the UI and flow wasn’t easy. We obsessed over details—every button, every layout choice. While some nights went into Figma and brainstorming sessions, others turned into deep dives into React, Next.js, Tailwind CSS, and optimizing performance across the stack.
                </p>
                <p className="text-lg">
                    We wanted the app to feel smooth, fast, and accessible to anyone, regardless of technical background. It wasn’t just a front—it needed to carry the weight of powerful AI capabilities under the hood.
                </p>

                <h1 className="text-2xl font-semibold">Built on Research, for Research</h1>
                <p className="text-lg">
                    What truly sets navillo apart is the engine that powers it. Inspired by the paper{" "}
                    <a
                        href="https://arxiv.org/abs/2507.19060"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        &quot;PurpCode: Reasoning for Safer Code Generation&quot;
                    </a>
                    , we’ve implemented a high-grade paper-to-application pipeline that merges LLM capabilities with real-time tools for exploring and interacting with complex documents and data.
                </p>
                <p className="text-lg">
                    Implementing this wasn’t plug-and-play. It took deep understanding, testing architectures, iterating through prompts, fine-tuning interfaces, and figuring out how to make academic-grade research work in a user-facing product.
                </p>

                <p className="text-lg">
                    In the end, navillo isn’t just a product—it’s the result of relentless iteration, obsession with detail, and a belief that the future of tools lies in making complex tasks simple and intuitive.
                </p>
            </div>

            <Footer />
        </>
    );
};

export default Grind;
