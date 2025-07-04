import { Link } from "react-router-dom";
export default function CustomerInfo() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Customer Information</h2>
      <form>
        <input type="text" placeholder="Full Name" className="block mb-2 p-2 border w-full"/>
        <input type="email" placeholder="Email" className="block mb-2 p-2 border w-full"/>
      </form>
      <Link to="/upload" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded">Next</Link>
    </div>
  );
}
