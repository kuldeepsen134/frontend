import React from "react";

const HelpPage = () => {
  return (
    <div className="container mx-auto" style={{ marginTop: "150px" }}>
      <h1 className="text-4xl font-bold mb-4">Help Desk</h1>

      <div className="">
        <div className="bg-white p-4 shadow">
          <h2 className="text-xl font-bold mb-2">Customer Support:
</h2>
          <p className="mb-4">
          For any inquiries related to our products or services, or if you require assistance with this servicw, our dedicated customer support team is here to help. You can reach out to us by:
          </p>
          <p>- Email: [support@domain.com](mailto:support@yourwebsite.com)
        </p>
        <span>- Phone: [+91 88373 22554]</span>
        </div>
      </div>
    </div>
  );
}
export default HelpPage