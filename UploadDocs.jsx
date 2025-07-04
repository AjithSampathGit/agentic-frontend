import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export default function UploadDocs({ customerId }) {
  const [file, setFile] = useState(null);
  const [aiResponse, setAIResponse] = useState(null);
  const [inactivity, setInactivity] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setInactivity(i => i + 1), 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (inactivity >= 1) {
      detectDropOff();
    }
  }, [inactivity]);

  const detectDropOff = async () => {
    try {
      const res = await axios.post(`${apiBaseUrl}/intervene`, {
        customer_id: customerId,
        step: "upload_docs",
        inactivity_minutes: inactivity,
      });
      setAIResponse(res.data.message);
    } catch {
      setAIResponse("AI helper is unavailable.");
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setInactivity(0);
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Upload Your Documents</h1>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      {aiResponse && (
        <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
          <p><strong>AI Help:</strong> {aiResponse}</p>
        </div>
      )}
      <Link to="/terms" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded">Continue</Link>
    </div>
  );
}