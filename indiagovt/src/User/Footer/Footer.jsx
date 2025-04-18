import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black  text-white py-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-3 text-sm text-white border-b border-gray-400 pb-4">
          {[
            "About us", "Contact us", "Feedback", "Visitor Summary",
            "Help", "Link to Us", "Newsletter", "Tell a Friend",
            "Website Policy", "Sitemap"
          ].map((link, index) => (
            <a key={index} href="#" className="hover:text-yellow-400">{link}</a>
          ))}
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Information Related To */}
          <div>
            <h2 className="font-bold text-lg mb-2">Information Related To</h2>
            <div className="grid grid-cols-2 gap-1 text-sm text-white/80">
              {[
                "Agriculture", "Commerce", "Defence", "Environment & Forest",
                "Food & Public Distribution", "Governance & Administration",
                "Housing", "Industries", "Information & Broadcasting", "Law & Justice",
                "Rural", "Social Development", "Travel & Tourism",
                "Art & Culture", "Communication", "Education",
                "Finance & Taxes", "Foreign Affairs", "Health & Family Welfare",
                "Home Affairs & Enforcement", "Infrastructure",
                "Labour & Employment", "Power & Energy", "Science & Technology",
                "Transport", "Youth & Sports"
              ].map((item, index) => (
                <span key={index} className="hover:text-yellow-400 cursor-pointer">{item}</span>
              ))}
            </div>
          </div>

          {/* About the Government */}
          <div>
            <h2 className="font-bold text-lg mb-2">About the Government</h2>
            <div className="text-sm text-white/80 flex flex-col space-y-1">
              {[
                "Constitution of India", "Government Directory", "Indian Parliament",
                "Publications", "Who's Who", "President of India", "Vice-President of India",
                "Prime Minister of India", "Cabinet Ministers", "Chiefs of Armed Forces",
                "Members of Parliament"
              ].map((item, index) => (
                <span key={index} className="hover:text-yellow-400 cursor-pointer">{item}</span>
              ))}
            </div>
          </div>

          {/* Right Side: Logos and Information */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center rounded-full">
                  🌐
                </div>
                <span className="text-yellow-400 font-semibold">Open Data Portal</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center rounded-full">
                  📢
                </div>
                <span className="text-yellow-400 font-semibold">Press Information Bureau</span>
              </div>
            </div>

            <div className="text-white/80 text-sm text-center md:text-right">
              <p>
                This Portal is a <span className="text-yellow-400">Mission Mode Project</span> under the{" "}
                <span className="text-yellow-400">National E-Governance Plan</span>, and is owned,
                designed, and developed by{" "}
                <span className="text-yellow-400">National Informatics Centre (NIC), Ministry of Electronics & Information Technology</span>, Government of India.
              </p>
              <p className="mt-2">Last reviewed and updated on <span className="text-yellow-400">12 Aug, 2021</span></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
