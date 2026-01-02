import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Image from "next/image";

const navillo = () => {
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
          Building navillo: Making Code Secure by Default
        </h1>

        {/* Meta info */}
        <div className="flex items-center space-x-3 text-sm text-gray-600">
          <p>September 9, 2025</p>
          <span>•</span>
          <p>3 min read</p>
          <span>•</span>
          <Image
            src="/person2.jpg"
            alt="author image"
            width={30}
            height={30}
            className="rounded-full"
          />
          <p>Gautham Korrapati</p>
        </div>
      </div>

      {/* Main Image */}
      <div className="px-6 sm:px-20 md:px-32 lg:px-48 mb-10">
        <Image
          src="/navillo.png"
          alt="navillo image"
          width={1020}
          height={510}
          className="rounded-xl w-full"
        />
      </div>

      {/* Article Content */}
      <div className="font-inter text-left text-sm text-gray-800 space-y-6 px-6 sm:px-20 md:px-32 lg:px-48 mb-16 leading-relaxed">
        <h1 className="text-2xl font-semibold">It Started with a Simulation</h1>
        <p className="text-lg">
          Before we built navillo, we built something very different: a reinforcement learning simulation to test how agents could reason through ambiguous goals and reward structures. We wanted to understand not just if models could act—but if they could learn intent in uncertain environments.
        </p>
        <p className="text-lg">
          The simulation worked. But we quickly hit a wall: agents could &quot;succeed&quot; by cutting corners, bypassing systems, or finding shortcuts that a human team would never accept in a real-world product. That’s when we started thinking seriously about trust, security, and goal alignment in code generation.
        </p>

        <h1 className="text-2xl font-semibold">Then Came SOC 2</h1>
        <p className="text-lg">
          Around the same time, we began our own SOC 2 compliance prep for a separate product. The process exposed everything broken about how security is handled in fast-moving teams. Too many tools were reactive. Too many practices were bolted on at the end.
        </p>
        <p className="text-lg">
          We realized: what if security didn’t have to be an afterthought? What if it was built into every pull request, every architecture decision, every LLM-assisted block of code? That seed of a question changed everything.
        </p>

        <h1 className="text-2xl font-semibold">The Shift to Proactive Security</h1>
        <p className="text-lg">
          We didn’t want to just audit code. We wanted to build a system that could guide developers in real time—helping them write secure code by default, not by checklist. Something that could reason through what you&apos;re building, not just how.
        </p>
        <p className="text-lg">
          We named it navillo—a nod to time, intent, and precision. It&apos;s not another security scanner. It&apos;s an intelligent layer that understands purpose and flags misalignments before they ship.
        </p>

        <h1 className="text-2xl font-semibold">Grounded in Research</h1>
        <p className="text-lg">
          The core of navillo is built on insights from{" "}
          <a
            href="https://arxiv.org/abs/2507.19060"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            &quot;PurpCode: Reasoning for Safer Code Generation&quot;
          </a>. The paper pushed beyond syntax to explore how models can reason through purpose and safety constraints—exactly what our early experiments had struggled with.
        </p>
        <p className="text-lg">
          We turned those ideas into a real-world product. A model that doesn’t just autocomplete, but collaborates. One that understands the context of your codebase, the structure of your API, and the kind of security posture your team needs.
        </p>

        <h1 className="text-2xl font-semibold">Where We&apos;re Headed</h1>
        <p className="text-lg">
          navillo is still evolving. We’re rolling it out selectively, testing it with real teams in real-world security environments. But the vision is clear: to help developers build secure-by-default systems without breaking flow.
        </p>
        <p className="text-lg">
          Because the best security tools don’t just catch mistakes—they change how we build in the first place.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default navillo;
