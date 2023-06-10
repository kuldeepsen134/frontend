import React from "react";

const HelpPage = () => {
  return (
    <div className="container mx-auto" style={{ marginTop: "150px" }}>
      <h1 className="text-4xl font-bold mb-4">Help Desk</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow">
          <h2 className="text-xl font-bold mb-2">Frequently Asked Questions</h2>
          <p className="mb-4">
            Find answers to commonly asked questions in our FAQ section.
          </p>
          <a
            href="#"
            className="inline-block bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
          >
            Visit FAQ
          </a>
        </div>

        <div className="bg-white p-4 shadow">
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p className="mb-4">
            Have a specific question or need assistance? Contact our support team.
          </p>
          <a
            href="#"
            className="inline-block bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
export default HelpPage