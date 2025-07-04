import { Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import SelectProduct from "./pages/SelectProduct";
import CustomerInfo from "./pages/CustomerInfo";
import UploadDocs from "./pages/UploadDocs";
import Terms from "./pages/Terms";
import FundAccount from "./pages/FundAccount";
import ThankYou from "./pages/ThankYou";

function App() {
  const customerId = "DEMO123";
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/product" element={<SelectProduct />} />
        <Route path="/info" element={<CustomerInfo />} />
        <Route path="/upload" element={<UploadDocs customerId={customerId} />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/fund" element={<FundAccount />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </div>
  );
}

export default App;
