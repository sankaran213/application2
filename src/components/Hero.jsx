export default function Hero() {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between px-6 py-12 max-w-7xl mx-auto"
      style={{
        backgroundImage: `url('public/Rectangle.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          GenAI Uniplane offers a single plane of glass view to build, manage,
          and monitor GenAI and AI Agents workflows
        </h1>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600">
          Get Started Now
        </button>
      </div>
      <div className="md:w-1/2">
        <img
          src=""
          alt="Dashboard Preview"
          className="w-full rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
}
