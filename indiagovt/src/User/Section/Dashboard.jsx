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

import React from "react";

const Sidebar = ({ title, items }) => (
  <div className="w-64 bg-gray-100 p-4 border-r border-gray-300 h-1/2 hidden md:block">
    <h2 className="text-lg font-bold mb-4">{title}</h2>
    <ul>
      {items.map((item, index) => (
        <li key={index} className="mb-2 text-gray-700 cursor-pointer hover:text-blue-500">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const  Dashboard = () => {
  return (
    <div className="flex min-h-1/2 bg-gray-50">
      {/* Left Sidebar */}
      <Sidebar
        title="Law & Justice"
        items={["Judiciary", "ADR", "Enactment of Laws", "Institutions", "Legal Aid"]}
      />
      
      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Law & Justice</h1>
        <p className="text-gray-700">
          The Constitution of India guarantees protection of life and personal liberty to all. It provides safeguards...
        </p>
        <div className="mt-6 p-4 bg-white shadow-md rounded-md">
          <h2 className="text-lg font-semibold">Services</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Check status of complaints with National Commission for Women</li>
            <li>PMO Grievance Portal</li>
            <li>Check details of missing children</li>
          </ul>
        </div>
      </div>
      <div>
      {/* Right Sidebar */}
      <Sidebar
        title="Most Viewed"
        items={["Ministry of Law & Justice", "Lastest Cases", "High Court Websites"]}
      />
        <Sidebar
        title="What's News"
        items={["Cases News","Law Manual", "High Court Websites"]}
      /></div>
    </div>
  );
};

export default Dashboard;
