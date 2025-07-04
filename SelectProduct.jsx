import { Link } from "react-router-dom";
export default function SelectProduct() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Choose a Checking Product</h2>
      <Link to="/info" className="block mt-4 px-4 py-2 bg-blue-600 text-white rounded">Standard Checking</Link>
    </div>
  );
}
