export default function Footer() {
  return (
    <footer className="bg-white py-8 px-10 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">LLMOps Services</h3>
          <p className="text-gray-600">
            Build, Manage And Monitor GenAI And AI Agents Workflows
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Subscribe To Our Newsletter
          </h3>
          <form
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              // Add email validation or API integration here
              alert("Thank you for subscribing!");
            }}
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
