import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Image from "next/image";

const vibecode = () => {
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
          Vibe Coding and the End of Stack Overflow
        </h1>

        {/* Meta info */}
        <div className="flex items-center space-x-3 text-sm text-gray-600">
          <p>August 23, 2025</p>
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
          src="/vibecode_stack.png"
          alt="vibecode stack image"
          width={1020}
          height={510}
          className="rounded-xl w-full"
        />
      </div>

      {/* Article Content */}
      <div className="font-inter text-left text-sm text-gray-800 space-y-6 px-6 sm:px-20 md:px-32 lg:px-48 mb-16 leading-relaxed">
        <h1 className="text-2xl font-semibold">From Stack Overflow to Self-Solving Code</h1>
        <p className="text-lg">
          There was a time when being a great developer meant knowing exactly what to Google. You’d search a cryptic error message, open five Stack Overflow tabs, copy a solution, and pray it worked. That era is ending.
        </p>
        <p className="text-lg">
          Today’s developers are moving into a new rhythm—what we call &quot;vibe coding.&quot; It’s a workflow powered by intuition, AI suggestions, and seamless context-awareness. Instead of digging through forums, you build in flow. The tool reads your intent, predicts your path, and offers relevant blocks before you even ask.
        </p>

        <h1 className="text-2xl font-semibold">How navillo Enables Flow</h1>
        <p className="text-lg">
          navillo isn’t just about automation—it’s about unlocking the human side of coding. By integrating multimodal agents into the editor, we eliminate the micro-decisions that derail progress. Whether you’re sketching logic in Figma, debugging APIs, or switching between language models, navillo keeps you in the zone.
        </p>
        <p className="text-lg">
          We’ve focused on reducing mental tax: fewer copy-paste moments, fewer “where did I leave that tab” moments. It’s not just faster—it’s smoother. And for the first time, developers can experience that elusive feeling of coding as a creative medium, not a troubleshooting chore.
        </p>

        <h1 className="text-2xl font-semibold">Built with Purpose, Backed by Research</h1>
        <p className="text-lg">
          This isn’t a happy accident. Our foundation was built on the research paper{" "}
          <a
            href="https://arxiv.org/abs/2507.19060"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            &quot;PurpCode: Reasoning for Safer Code Generation&quot;
          </a>, which deeply explores how AI models can reason through security constraints and code purpose—not just syntax.
        </p>
        <p className="text-lg">
          We took that core idea and ran with it. Instead of just outputting code, our models now understand what you’re building, why it matters, and how to build it securely. It’s not autocomplete—it’s auto-alignment with your goals.
        </p>

        <p className="text-lg">
          The result? Developers who ship faster, safer, and with far less stress. Because when the tools support your vibe, you don&apos;t need Stack Overflow to hold your hand—you just build.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default vibecode;
