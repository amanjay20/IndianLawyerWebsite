import React, { useEffect, useRef, useCallback } from "react";
import { GiNewspaper } from "react-icons/gi";

const WhatNews = ({ height = "300px" }) => {
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
    "Website of Intellectual Property Appellate Board",
    "Download E-Book of Ministry of Law & Justice",
    "Website of Manipur Information Commission",
    "Website of Gujarat State Legal Services Authority",
    "Website of Himachal Pradesh Legal Services Authority",
    "Latest Legal Updates",
    "Government Gazette Notifications",
    "Website of National Company Law Tribunal (NCLT)",
"Official Portal of the Income Tax Department",
"Website of the Competition Commission of India",
"Access to Bare Acts of Indian Legislation",
"Website of the National Human Rights Commission",
"Information on Consumer Rights and Forums",
"Website of the Central Bureau of Investigation (CBI)",
"Details on Passport Application and Rules",
"Website of the Election Commission of India",
"Information on Banking Regulations and Guidelines",
"Website of the Insurance Regulatory and Development Authority of India (IRDAI)",
"Access to Judgments of Various High Courts",
"Website of the Goods and Services Tax (GST) Portal",
"Information on Labour Laws and Regulations",
"Website of the Ministry of Corporate Affairs",
"Details on Intellectual Property Rights (Patents, Trademarks, Copyrights)",
"Website of the Reserve Bank of India (RBI)",
"Information on Land Records and Registration",
"Website of the National Green Tribunal (NGT)",
"Access to Notifications and Circulars from Government Departments",
"Website of the National Commission for Women",
"Information on Right to Information (RTI) Act",
"Website of the Department of Telecommunications",
"Details on Environmental Laws and Regulations",
"Website of the Ministry of Finance",
  ];

  // Duplicate items for seamless scrolling
  const duplicatedItems = [...items, ...items];

  return (
    <div
      className={`bg-gray-100 p-4 rounded-md shadow-md overflow-hidden`}
      style={{ height: height }}
    >
        <div className="flex items-center mb-3">
                  <span className="mr-2"><GiNewspaper /></span>
                  <h2 className="text-lg font-semibold inline-block">What's News</h2>
                </div>
      {/* <h2 className="text-lg font-semibold mb-3">What's News</h2> */}
      <div
        ref={containerRef}
        className="overflow-y-auto scroll-smooth hide-scrollbar py-1"
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

export default WhatNews;