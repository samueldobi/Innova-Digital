import React, { useState } from "react";
import SuccessPopup from "../pages/Success";
const Form = () => {
    const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
   const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://lemonchiffon-magpie-532997.hostingersite.com/mailer/submitform.php",
        {
          method: "POST",
          body: new FormData(e.target),
        }
      );

      // Check if server response is OK
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let result;
      try {
        result = await response.json();
      } catch {
        throw new Error("Server did not return valid JSON");
      }

      if (result.status === "success") {
        setShowSuccess(true);
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was a problem submitting the form.");
    }
    
  };
  return (
    <div>
        <form
            onSubmit={handleSubmit}
            className="bg-white text-gray-900 rounded-xl p-8 shadow-lg max-w-xl mx-auto mb-12"
            >
            <div className="mb-4">
                <input
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
                />
            </div>

            <div className="mb-4">
                <input
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
                />
            </div>

            <div className="mb-4">
                <textarea
                name="message"
                value={formData.message}
                placeholder="Your Message"
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition duration-300"
            >
                Send Message
            </button>
            <SuccessPopup show={showSuccess} onClose={() => setShowSuccess(false)} />
            </form>

    </div>
  )
}

export default Form