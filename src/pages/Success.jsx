export default function SuccessPopup({ show, onClose }) {
  return (
    <>
      {/* Background overlay */}
      {show && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          {/* Popup card */}
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full text-center transform transition-all duration-300 scale-100">
            <h2 className="text-green-600 text-xl font-bold">
              ✅ Message Sent!
            </h2>
            <p className="text-gray-600 mt-2">
              We’ve received your message. Our team will get back to you soon.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
