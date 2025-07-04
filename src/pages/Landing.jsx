import { Link } from "react-router-dom";
export default function Landing() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-2xl font-bold">Welcome to Demo Bank</h1>
      <Link to="/product" className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded">Open an Account</Link>
    </div>
  );
}
