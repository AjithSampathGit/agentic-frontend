import { useEffect, useState } from "react";

function App() {
  const [response, setResponse] = useState(null);
  const [sessionId] = useState(() => `sess_${Math.random().toString(36).slice(2)}`);

  useEffect(() => {
    const callAPI = async () => {
      const res = await fetch("https://agentic-backend-sood.onrender.com/intervene", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_id: "Test 123",
          step: "upload_docs",
          inactivity_minutes: 2
         }),
      });
      const data = await res.json();
      setResponse(data);
    };

    callAPI();
  }, [sessionId]);

  return (
    <div className="p-10 max-w-xl mx-auto space-y-6 font-sans">
      <h1 className="text-3xl font-bold">Welcome to XYZ Bank</h1>
      {response ? (
        <div className="bg-gray-100 p-4 rounded shadow">
          <p><strong>Action:</strong> {response.status}</p>
          <p>{response.message}</p>
          {response.appointment_link && (
            <a href={response.appointment_link} className="text-blue-500 underline mt-2 inline-block" target="_blank">
              Book Appointment
            </a>
          )}
        </div>
      ) : (
        <p>Loading recommendation...</p>
      )}
    </div>
  );
}

export default App;
