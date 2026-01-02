import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Image from "next/image";

const ForsythFirst = () => {
    return (
        <>
            <Navbar />
            <div className="font-inter flex flex-col items-start px-6 sm:px-20 md:px-32 lg:px-48 my-10 space-y-6">
                {/* Tag Buttons */}
                <div className="flex space-x-3">
                    <button className="text-white rounded-3xl px-5 py-2 bg-[#181818] text-sm">Company</button>
                    <button className="text-white rounded-3xl px-5 py-2 bg-[#181818] text-sm">Program</button>
                </div>

                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-left">
                    Why We Started the Forsyth First Program
                </h1>

                {/* Meta info */}
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <p>October 1, 2025</p>
                    <span>•</span>
                    <p>2 min read</p>
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
                    src="/forsyth.png"
                    alt="forsyth first image"
                    width={1020}
                    height={510}
                    className="rounded-xl w-full"
                />
            </div>

            {/* Article Content */}
            <div className="font-inter text-left text-sm text-gray-800 space-y-6 px-6 sm:px-20 md:px-32 lg:px-48 mb-16 leading-relaxed">
                <h1 className="text-2xl font-semibold">What is Forsyth First?</h1>
                <p className="text-lg">
                    <strong>Forsyth First</strong> is our way of empowering developers—not just with tools, but with time, space, and guidance to build what matters.
                </p>
                <p className="text-lg">
                    It’s a build sprint meets workshop, designed to help small teams and solo developers go from zero to shipping with <strong>navillo</strong>—our secure-by-default coding assistant—at the center of the process.
                </p>

                <h1 className="text-2xl font-semibold">Why We Started It</h1>
                <p className="text-lg">
                    We saw a gap. Too many developers are expected to &quot;just know&quot; how to integrate AI tooling into their workflows. Security is often left for later, and most hackathons prioritize speed over sustainability or robustness.
                </p>
                <p className="text-lg">
                    Forsyth First flips that script. It gives developers early access to navillo, technical guidance, and a protected environment to experiment with fast iteration and secure practices—without the pressure of “getting it perfect.”
                </p>

                <h1 className="text-2xl font-semibold">How It Works</h1>
                <p className="text-lg">
                    Each Forsyth First cohort begins with a hands-on workshop. We walk through how navillo works under the hood, best practices for integrating it into modern web stacks, and show real examples of security-first features in action.
                </p>
                <p className="text-lg">
                    Then, teams enter the sprint phase—spending 48 hours building a project of their choice using navillo. Throughout the sprint, our engineers and researchers are available for feedback, debugging, and deep dives into navillo’s capabilities.
                </p>

                <h1 className="text-2xl font-semibold">navillo at the Core</h1>
                <p className="text-lg">
                    The real power of Forsyth First is getting to see how navillo works in a real-world, creative environment. Developers learn not just how to write secure code—but how to build with flow, stay in the zone, and let navillo handle the grunt work.
                </p>
                <p className="text-lg">
                    From autocompleting secure API patterns to flagging bad habits early, navillo becomes a silent partner in the room. And by the end of the sprint, participants walk away not only with a demo—but a deeper understanding of what secure-by-default development feels like.
                </p>

                <h1 className="text-2xl font-semibold">What’s Next</h1>
                <p className="text-lg">
                    Forsyth First isn’t a one-off. We’re scaling it to more campuses, communities, and companies. Our goal is to make secure development intuitive, accessible, and exciting—especially for those building in small teams or on their own.
                </p>
                <p className="text-lg">
                    Because we believe that giving smart people the right tools and a focused runway leads to breakthroughs—not just projects.
                </p>
            </div>

            <Footer />
        </>
    );
};

export default ForsythFirst;
