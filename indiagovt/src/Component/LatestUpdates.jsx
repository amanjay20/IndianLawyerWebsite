import React, { useEffect, useRef, useCallback } from "react";
import { MdTipsAndUpdates } from "react-icons/md";

const LatestUpdates = ({ height = "300px" }) => {
  const containerRef = useRef(null);
  const scrollInterval = useRef(null);
  const itemRefs = useRef([]);
  const scrollSpeed = 1; // Adjust scroll speed (lower is slower)

  const scrollStep = useCallback(() => {
    const container = containerRef.current;
    if (!container || !itemRefs.current[0]) return;

    const firstItemHeight = itemRefs.current[0]?.offsetHeight || 0;
    container.scrollTop += scrollSpeed;

    // Check if we've scrolled past the first set of items
    if (container.scrollTop >= firstItemHeight * items.length) {
      container.scrollTop = 0; // Reset scroll position
    }

    scrollInterval.current = requestAnimationFrame(scrollStep);
  }, [scrollSpeed]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || items.length <= 1) return;

    scrollInterval.current = requestAnimationFrame(scrollStep);

    return () => {
      if (scrollInterval.current) {
        cancelAnimationFrame(scrollInterval.current);
      }
    }; // Cleanup on unmount
  }, [scrollStep]);

  const items = [
    "New ODR Guidelines Issued (Apr 5)",
    "SC Verdict: Property Rights (Apr 4)",
    "IT Act Amendments Proposed (Apr 3)",
    "Legal Aid Portal Launched (Apr 2)",
    "HC Rules of Civil Procedure (Apr 1)",
    "Corporate Law Seminar (Mar 31)",
    "Env Law Research Published (Mar 30)",
    "Consumer Protection Act Updates Released (Apr 6)",
    "Lok Adalat Scheduled for Pending Cases (Apr 7)",
    "New Regulations for Foreign Investment (Apr 8)",
    "Government Clarifies Tax Filing Procedures (Apr 9)",
    "Digital Courts Initiative Expanded (Apr 10)",
    "Workshop on Mediation Techniques Held (Apr 11)",
    "Report on Juvenile Justice System Published (Apr 12)",
    "Amendments to Motor Vehicles Act Enforced (Apr 13)",
    "Cybersecurity Awareness Campaign Launched (Apr 14)",
    "Guidelines for Online Registration of FIRs (Apr 15)",
    "Special Courts for Commercial Disputes Established (Apr 16)",
    "Training Program for Public Prosecutors Conducted (Apr 17)",
    "Study on Impact of AI in Legal Sector Released (Apr 18)",
    "New Rules for Arbitration Proceedings Issued (Apr 19)",
    "Legal Literacy Camps Organized in Rural Areas (Apr 20)",
    "Supreme Court Hearing on Environmental Case Adjourned (Apr 21)",
    "Draft Policy on Data Privacy Released for Feedback (Apr 22)",
    "Seminar on Intellectual Property Rights Enforcement (Apr 23)",
    "Mobile App for Accessing Legal Information Launched (Apr 24)",
    "Review Committee Formed for Criminal Justice Reforms (Apr 25)",
  ];

  // Duplicate items for seamless scrolling
  const duplicatedItems = [...items, ...items];

  return (
    <div
      className={`bg-gray-100 p-3 rounded-md shadow-md overflow-hidden`}
      style={{ height: height }}
    >
       <div className="flex items-center mb-3">
          <span className="mr-2"><MdTipsAndUpdates /></span>
          <h2 className="text-lg font-semibold inline-block">Latest Legal Updates</h2>
        </div>
      <div
        ref={containerRef}
        className="overflow-y-hidden"
        style={{
          maxHeight: height,
          WebkitOverflowScrolling: "touch",
          "::-webkit-scrollbar": { display: "none" },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}
      >
        <ul className="list-disc pl-5">
          {duplicatedItems.map((item, index) => (
            <li
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className="py-1 text-sm text-gray-700 hover:text-[#D1C158] cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LatestUpdates;
