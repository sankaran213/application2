import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        background:
          "radial-gradient(circle, #5CBBFF 0%,#0094FF 31%, #FFFFFF 100%)",
      }}
    >
      <h1 className="text-3xl font-bold mb-8 text-gray-900">GENAI UNIPLANE</h1>
      <Link
        to="/login"
        className="bg-white px-8 py-3 rounded-full text-gray-900 font-medium shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-gray-50"
      >
        Login/Register
      </Link>
    </div>
  );
}
