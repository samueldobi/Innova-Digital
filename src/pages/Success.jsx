export default function SuccessPopup({ show, onClose }) {
  return (
    <>
      {/* Background overlay */}
      {show && (
       <div className="fixed inset-0 bg-gradient-to-br from-black/60 via-orange-900/20 to-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      {/* Popup card */}
      <div className="relative bg-gradient-to-br from-white via-orange-50/30 to-red-50/30 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 max-w-md w-full mx-4 text-center transform transition-all duration-300 scale-100">
        
        {/* Glowing Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 rounded-3xl blur-xl"></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg mb-6">
            <div className="text-3xl text-white">✅</div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent mb-4">
            Message Sent!
          </h2>
          
          {/* Description */}
          <p className="text-white text-lg leading-relaxed mb-8">
            We've received your message. Our team will get back to you soon.
          </p>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25"
          >
            <span className="relative z-10">Close</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-3 h-3 bg-orange-400/40 rounded-full"></div>
        <div className="absolute bottom-6 left-6 w-2 h-2 bg-red-400/40 rounded-full"></div>
        
        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400/50 to-transparent blur-sm"></div>
      </div>
    </div>
      )}
    </>
  );
}
