import { Link } from "react-router-dom";
export default function FundAccount() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Fund Your Account</h2>
      <input type="text" placeholder="Routing Number" className="block mb-2 p-2 border w-full" />
      <Link to="/thankyou" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded">Submit</Link>
    </div>
  );
}
