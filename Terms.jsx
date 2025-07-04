import { Link } from "react-router-dom";
export default function Terms() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Terms & Conditions</h2>
      <p className="mb-4">Please accept our terms to continue.</p>
      <Link to="/fund" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded">Accept and Continue</Link>
    </div>
  );
}
