import { useState } from "react";
import { FaCheck, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AddAIPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    toolName: "",
    companyName: "",
    description: "",
    email: "",
    phoneNumber: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.toolName || !formData.companyName || !formData.description || !formData.email || !formData.phoneNumber) {
      setMessage("All fields are required!");
      return;
    }

    setLoading(true);
    setMessage("");

    // Create email content
    const subject = encodeURIComponent("New AI Tool Submission");
    const body = encodeURIComponent(
      `AI Tool Name: ${formData.toolName}\nCompany Name: ${formData.companyName}\nDescription: ${formData.description}\nContact Email: ${formData.email}\nPhone Number: ${formData.phoneNumber}`
    );

    // Open default email client
    window.location.href = `mailto:aisandhai@gmail.com?subject=${subject}&body=${body}`;

    setLoading(false);
    setMessage("Email client opened. Please send the email manually.");
  };

  return (
    <div className="flex flex-col items-center h-screen p-6">
      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="self-start flex items-center text-gray-600 hover:text-[#D32F2F] mb-4">
        <FaArrowLeft className="mr-2" /> Back
      </button>

      <h1 className="text-3xl font-bold text-[#D32F2F] mt-2">Submit Your AI Tool</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 mt-6 shadow-md rounded-lg">
        <label className="block mb-2 font-semibold">AI Tool Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3939]"
          value={formData.toolName}
          onChange={(e) => setFormData({ ...formData, toolName: e.target.value })}
          required
        />

        <label className="block mt-4 mb-2 font-semibold">Company Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3939]"
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          required
        />

        <label className="block mt-4 mb-2 font-semibold">Description</label>
        <textarea
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3939]"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />

        <label className="block mt-4 mb-2 font-semibold">Email to Contact</label>
        <input
          type="email"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3939]"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />

        <label className="block mt-4 mb-2 font-semibold">Number to Contact</label>
        <input
          type="tel"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3939]"
          value={formData.phoneNumber}
          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#FF3939] text-white p-3 mt-4 rounded-lg hover:bg-[#D32F2F] transition-all"
          disabled={loading}
        >
          {loading ? "Submitting..." : <><FaCheck className="inline-block mr-2" /> Submit AI Tool</>}
        </button>

        {/* Status Message */}
        {message && <p className="mt-4 text-center text-lg text-[#D32F2F]">{message}</p>}
      </form>
    </div>
  );
};

export default AddAIPage;
