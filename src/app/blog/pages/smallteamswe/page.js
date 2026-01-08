import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Image from "next/image";

const Smallteamswe = () => {
    return (
        <>
            <Navbar />
            <div className="font-inter flex flex-col items-start px-6 sm:px-20 md:px-32 lg:px-48 my-10 space-y-6">
                {/* Tag Buttons */}
                <div className="flex space-x-3">
                    <button className="text-white rounded-3xl px-5 py-2 bg-[#181818] text-sm">Technology</button>
                    <button className="text-white rounded-3xl px-5 py-2 bg-[#181818] text-sm">Feature</button>
                </div>

                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-left">
                    Why Small Teams Deserve Enterprise-Grade Security
                </h1>

                {/* Meta info (date, read time, author) */}
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <p>September 17, 2025</p>
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
                    src="/small_team_swe.png"
                    alt="small team image"
                    width={1020}
                    height={510}
                    className="rounded-xl w-full"
                />
            </div>

            {/* Article Content */}
            <div className="font-inter text-left text-sm text-gray-800 space-y-6 px-6 sm:px-20 md:px-32 lg:px-48 mb-16 leading-relaxed">
                <h1 className="text-2xl font-semibold">Small Teams, Big Stakes</h1>
                <p className="text-lg">
                    Startups and small engineering teams move fast—but that speed often comes at a cost. Time is scarce, security feels like a “later” problem, and engineers are expected to be full-stack, DevOps, and compliance officers all at once.
                </p>
                <p className="text-lg">
                    That’s why we built <strong>navillo</strong>: to give small teams access to the kind of secure-by-default, intelligent development tooling that was once reserved for giant enterprises with dedicated security orgs.
                </p>

                <h1 className="text-2xl font-semibold">Security That Doesn’t Slow You Down</h1>
                <p className="text-lg">
                    With navillo, secure development isn’t a separate step—it’s baked into your flow. Instead of running security audits post-deploy or juggling checklists, navillo operates in the background of your editor, suggesting safer patterns and flagging risky implementations in real time.
                </p>
                <p className="text-lg">
                    No need for external scanners, third-party consultants, or endless context switching. navillo is the teammate who reads your code as you write it and keeps you out of trouble—without slowing you down.
                </p>

                <h1 className="text-2xl font-semibold">One Engineer, Powered by Ten</h1>
                <p className="text-lg">
                    Small teams don’t have the luxury of specialization. But with navillo, a single developer can ship like a full-stack squad. From understanding security implications of API routes to suggesting more robust patterns, navillo helps you write better code—not just faster, but smarter.
                </p>
                <p className="text-lg">
                    It’s like having a senior engineer, security lead, and code reviewer all in one place, available on every line you write.
                </p>

                <h1 className="text-2xl font-semibold">Why Enterprise-Grade Matters—Especially for You</h1>
                <p className="text-lg">
                    Big companies have buffers—compliance teams, red team audits, and budget for incidents. Small teams don’t. One misconfigured endpoint, one overlooked vulnerability, one insecure dependency can mean broken trust or lost deals.
                </p>
                <p className="text-lg">
                    navillo brings those enterprise protections into the hands of lean builders. So you can ship faster *and* more confidently.
                </p>

                <h1 className="text-2xl font-semibold">Build with Confidence</h1>
                <p className="text-lg">
                    We believe small teams deserve better. Not watered-down tools. Not late-stage patches. Real-time, proactive, research-backed security baked into your workflow. That’s what navillo delivers—and we’re just getting started.
                </p>
                <p className="text-lg">
                    Because great software doesn’t just ship quickly. It ships securely, intuitively, and with confidence.
                </p>
            </div>

            <Footer />
        </>
    );
};

export default Smallteamswe;
