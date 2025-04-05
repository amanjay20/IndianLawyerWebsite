// import React from "react";
// export default function Dashboard() {
//   const sections = [
//     {
//       title: "Downloadable Income Tax Returns forms by Income Tax Department",
//       description:
//         "Get various Income Tax Returns (ITR) forms provided by Income Tax Department, Department of Revenue. Users can download ITR form-1, ITR form-2, ITR form-3, ITR form-4, ITR form-5, etc. Forms to be submitted by Scientific Research organisations, Charitable and Religious organisations and Charitable or Religious institutions are also given.",
//     },
//     {
//       title: "Downloadable income tax challans by Income Tax Department",
//       description:
//         "Get various Income Tax (IT) challans provided by Income Tax Department, Department of Revenue. Users can download challans for depositing advance tax, self assessment tax, tax on regular assessment, surtax, TDS, TCS, securities transaction tax, estate duty, wealth-tax, gift-tax, interest-tax, banking cash transaction tax, etc.",
//     },
//     {
//       title: "Online Services of Income Tax Department",
//       description:
//         "You can avail all online services provided by the Income Tax Department, Ministry of Finance. You can apply online for a PAN Card, lodge grievance, file your Income Tax Return (ITR), apply for TAN, check TDS statement, e-pay your taxes, calculate your tax, locate TIN facilitation centres, etc.",
//     },
//     {
//       title: "Website of Income Tax Department",
//       description:
//         "The Income Tax Department is governed by the Central Board for Direct Taxes (CBDT) and is part of the Department of Revenue under the Ministry of Finance. Users can get details related to the department, its organisational setup, functions, tax law and rules, international taxation, etc.",
//     },
//     {
//       title: "Information of Tax Information Network of Income Tax Department",
//       description:
//         "Details about the Tax Information Network, which includes PAN, TAN, TDS, Form 16, tax return prepare scheme (TRPS), Aaykar Sampark Kendra (ASK), tax payers, etc.",
//     },
//   ];

//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row">
//       {/* Sidebar */}
//       <aside className="bg-white shadow-md w-full md:w-64 p-6">
//         <h2 className="text-xl font-bold text-blue-700 flex items-center gap-2">
//           ⚖️ Law & Justice
//         </h2>
//         <ul className="mt-4 space-y-2">
//           <li className="hover:text-blue-600 cursor-pointer">Judiciary</li>
//           <li className="hover:text-blue-600 cursor-pointer">Alternative Dispute Redressal (ADR)</li>
//           <li className="hover:text-blue-600 cursor-pointer">Enactment of Laws</li>
//           <li className="hover:text-blue-600 cursor-pointer">Institutions</li>
//           <li className="hover:text-blue-600 cursor-pointer">Law Commission of India</li>
//           <li className="hover:text-blue-600 cursor-pointer">Legal Aid</li>
//           <li className="hover:text-blue-600 cursor-pointer">Legal Profession</li>
//           <li className="hover:text-blue-600 cursor-pointer">Personal Law</li>
//         </ul>
//       </aside>

    
//       <div className="max-w-7xl mx-auto px-4 py-6">
//       {/* Breadcrumb */}
//       <p className="text-sm text-gray-500">
//         <span className="text-blue-600 cursor-pointer">Home</span> &raquo; Find information about your area tax assessment officer
//       </p>

//       {/* Main Content Section */}
//       <div className="space-y-6 mt-4">
//         {sections.map((section, index) => (
//           <div key={index} className="bg-gray-100 p-4 rounded-md">
//             <h2 className="text-lg font-semibold text-blue-700">{section.title}</h2>
//             {/* Buttons */}
//             <div className="flex items-center gap-2 mt-2">
//               <button className="flex items-center border p-1 px-2 text-sm bg-gray-200 rounded">
//                 📌 Suggest Tags
//               </button>
//               <button className="flex items-center border p-1 px-2 text-sm bg-gray-200 rounded">
//                 💬 Comment
//               </button>
//               <button className="flex items-center border p-1 px-2 text-sm bg-gray-200 rounded">
//                 🔗 Share This
//               </button>
//             </div>
//             <p className="text-sm text-gray-700 mt-2">{section.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// }

// import React from "react";

// const Sidebar = ({ title, items }) => (
//   <div className="w-64 bg-gray-100 p-4 border-r border-gray-300 h-1/2 hidden md:block">
//     <h2 className="text-lg font-bold mb-4">{title}</h2>
//     <ul>
//       {items.map((item, index) => (
//         <li key={index} className="mb-2 text-gray-700 cursor-pointer hover:text-blue-500">
//           {item}
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const  Dashboard = () => {
//   return (
//     <div className="flex min-h-1/2 bg-gray-50 mx-auto px-4">
//       {/* Left Sidebar */}
//       <Sidebar
//         title="Law & Justice"
//         items={["Judiciary", "ADR", "Enactment of Laws", "Institutions", "Legal Aid"]}
//       />
      
//       {/* Main Content */}
//       <div className="flex-1 p-6 overflow-auto">
//         <h1 className="text-2xl font-bold mb-4">Law & Justice</h1>
//         <p className="text-gray-700">
//           The Constitution of India guarantees protection of life and personal liberty to all. It provides safeguards...
//         </p>
//         <div className="mt-6 p-4 bg-white shadow-md rounded-md">
//           <h2 className="text-lg font-semibold">Services</h2>
//           <ul className="list-disc pl-6 text-gray-600">
//             <li>Check status of complaints with National Commission for Women</li>
//             <li>PMO Grievance Portal</li>
//             <li>Check details of missing children</li>
//           </ul>
//         </div>
//       </div>
//       <div>
//       {/* Right Sidebar */}
//       <Sidebar
//         title="Most Viewed"
//         items={["Ministry of Law & Justice", "Lastest Cases", "High Court Websites"]}
//       />
//         <Sidebar
//         title="What's News"
//         items={["Cases News","Law Manual", "High Court Websites"]}
//       /></div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import { FaBalanceScale, FaGavel, FaBookOpen } from "react-icons/fa"; // Import law-related icons
import WhatLaws from "../../Component/WhatLaws";
import LatestUpdates from "../../Component/LatestUpdates";
import WhatNews from "../../Component/WhatNews";

const Dashboard = () => {
  return (
    <div className="h-auto bg-gray-50 py-6 px-4 sm:px-6 lg:px-8 lg:mb-11">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[1fr_3fr_1fr] gap-6">
        {/* Left Sidebar */}
        <WhatLaws height="300px" />

        {/* Main Content */}
        <div className="bg-white shadow-md rounded-md p-6 overflow-auto">
          <h1 className="text-2xl font-semibold mb-4">Why Choose Us ?</h1>
          <div className="lg:flex items-center mb-4">
            <div className="w-auto pr-4 flex justify-center lg:justify-start">
              <div className="bg-amber-100 rounded-full p-6 shadow-md flex items-center justify-center w-24 h-24 md:w-32 md:h-32">
                <FaBalanceScale className="text-amber-700 text-3xl md:text-4xl" />
              </div>
            </div>
            <p className="text-gray-700 text-sm mt-4 lg:mt-0">
              In Advocate Umesh Pandey leadership we are group of Senior Advocates/ Lawyers practicing at Bhopal/ Jabalpur and in all district / High Court / Supreme Court of India, for Criminal, Civil, Accidental, Family – marriage or Divorce, Consumer forum, Railway Tribunal, cooperative Registration /Namantaran of Properties, Registered Will deeds personal and industrial Agreements, Tribunal, NGT (National Green Tribunal), service cases, Banking/DRT (Debt recovery tribunal) and Company laws cases experts, providing JUSTICE earliest and affordable.
            </p>
          </div>

          <div className="mt-6 bg-gray-100 rounded-md">
            <div className="flex border-b border-gray-200">
              <button className="px-4 py-2 text-sm font-semibold text-[#89620E] focus:outline-none border-b-2 border-amber-500">Services</button>
              <button className="px-4 py-2 text-sm font-semibold text-gray-600 focus:outline-none">Schemes</button>
              <button className="px-4 py-2 text-sm font-semibold text-gray-600 focus:outline-none">Open Data</button>
            </div>
            <ul className="list-disc pl-6 text-gray-600 py-4 text-sm">
              <li>Apply for Legal Aid for Women Victims of Dowry Practice, Uttar Pradesh</li>
              <li>Application for Complaint about Atrocities, Uttar Pradesh</li>
              <li>Application for Birth Certificate by Brihanmumbai Municipal Corporation, Maharashtra</li>
              <li>Check status of your registered complaints with National Commission for Women</li>
              <li>PMO Grievance Portal</li>
              <li>Check details of missing children of Delhi and neighbouring states</li>
            </ul>
          </div>
          {/* Add more main content here */}
        </div>

        {/* Right Sidebars */}
        <div className="grid grid-cols-1 gap-4">
          <LatestUpdates height="300px" />
          <WhatNews height="300px" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;