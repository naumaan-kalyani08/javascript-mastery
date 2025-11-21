import React from "react";
import { X } from "lucide-react";

const OfferPopup = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            🎉 Welcome Offer!
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            Welcome to JavaScript Mastery! Start your coding journey today.
          </p>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-lg mb-4">
            <p className="text-sm mb-2">Get 20% off your first course!</p>
            <p className="text-2xl font-bold">Use Code: WELCOME20</p>
          </div>
          <p className="text-sm text-gray-600">
            Limited time offer. Valid for new learners only. Start learning
            JavaScript today and build amazing projects.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-900 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Maybe Later
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Explore Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferPopup;
