import React from "react";

const PrivacyPage = () => {
  return (
   <>
    <div className="container mx-auto py-8 ">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>

      <p className="mb-4">
        This privacy policy applies to the use of our website and services
        (collectively referred to as the {"Service"}) provided by Your Company
      </p>

      <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>

      <p className="mb-4">
        We may collect personal information from you when you voluntarily provide
        it to us through forms, surveys, or other means. This information may
        include your name, email address, and any other information you choose to
        provide.
      </p>

      <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>

      <p className="mb-4">
        We may use the information we collect from you for the following purposes:
      </p>

      <ul className="list-disc ml-8 mb-4">
        <li>To provide and maintain the Service</li>
        <li>To improve customer service</li>
        <li>To personalize your experience on our website</li>
        <li>To send periodic emails regarding your account or the Service</li>
      </ul>

      <h2 className="text-2xl font-bold ">Third-Party Disclosure</h2>

      <p className="mb-4">
        We do not sell, trade, or otherwise transfer your personal information to
        outside parties. This does not include trusted third parties who assist us
        in operating our website, conducting our business, or servicing you, as
        long as those parties agree to keep this information confidential.
      </p>
    </div>


   </>
  )
}
export default PrivacyPage