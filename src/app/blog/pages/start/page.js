import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Image from "next/image";

const Start = () => {
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
                    A hello and welcome from navillo
                </h1>

                {/* Meta info (date, read time, author) */}
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <p>June 27, 2025</p>
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
                    src="/welcome_navillo.png"
                    alt="welcome image"
                    width={1020}
                    height={510}
                    className="rounded-xl w-full"
                />
            </div>

            {/* Article Content */}
            <div className="font-inter text-left text-sm text-gray-800 space-y-6 px-6 sm:px-20 md:px-32 lg:px-48 mb-16 leading-relaxed">
                <h1 className="text-2xl font-semibold">Welcome to navillo</h1>
                <p className="text-lg">
                    We&apos;re a small R&D firm with big ambitions—on a mission to build tools that solve the hardest problems in AI, security, and finance. We believe innovation doesn’t come from following trends. It comes from rethinking systems, asking deeper questions, and shipping with care.
                </p>
                <p className="text-lg">
                    navillo was started by a group of builders who wanted to do things differently. We don’t just write code—we build systems, explore research, and chase ideas worth grinding for. The goal? To take the breakthroughs happening in papers, labs, and open-source—and turn them into real-world, user-first products.
                </p>

                <h1 className="text-2xl font-semibold">What We’re About</h1>
                <p className="text-lg">
                    We’re part product studio, part research team. Whether we’re prototyping fintech safety layers, building autonomous agents for analysts, or designing interfaces that make LLMs usable by default—our goal is the same: bring clarity to complexity.
                </p>
                <p className="text-lg">
                    Our work blends R&D with product rigor. Everything we build is grounded in real technical depth, whether it’s based on a research paper, a problem we’ve felt firsthand, or something one of our collaborators dreamed up on a whiteboard at 2AM.
                </p>

                <h1 className="text-2xl font-semibold">Why We Exist</h1>
                <p className="text-lg">
                    The world is changing fast, but too much of the new tech is being built without thought for its impact—or without tools that make it safe and usable for everyone. navillo exists to shift that. We want to build technology that doesn’t just move fast, but moves in the right direction.
                </p>
                <p className="text-lg">
                    We’re here to work on the hard stuff. Not the next To-Do app—but the infrastructure that will support the next generation of builders, researchers, and companies pushing what’s possible.
                </p>

                <p className="text-lg">
                    Whether you&apos;re a researcher, developer, startup, or just curious—thanks for being here. We’re excited for what’s ahead.
                </p>
            </div>

            <Footer />
        </>
    );
};

export default Start;
