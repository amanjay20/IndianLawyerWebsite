import React, { useEffect, useRef, useCallback } from "react";
import { VscLaw } from "react-icons/vsc";

const WhatLaws = ({ title = "Key Indian Laws", items = [
    "The Constitution of India",
    "The Indian Penal Code, 1860",
    "The Code of Criminal Procedure, 1973",
    "The Indian Contract Act, 1872",
    "The Specific Relief Act, 1963",
    "The Hindu Marriage Act, 1955",
    "The Muslim Personal Law (Shariat) Application Act, 1937",
    "The Negotiable Instruments Act, 1881",
    "The Companies Act, 2013",
    "The Consumer Protection Act, 2019",
    "The Information Technology Act, 2000",
    "The Right to Information Act, 2005",
    "The Motor Vehicles Act, 1988",
    "The Goods and Services Tax (GST) Acts, 2017",
] }) => {
  const containerRef = useRef(null);
  const scrollInterval = useRef(null);
  const itemRefs = useRef([]);
  const scrollSpeed = 1; // Adjust scroll speed (lower is slower)

  const scrollStep = useCallback(() => {
    const container = containerRef.current;
    if (!container || !itemRefs.current[0]) return;

    const firstItemHeight = itemRefs.current[0]?.offsetHeight || 0;
    container.scrollTop += scrollSpeed;

    // Check if we've scrolled past the first item
    if (container.scrollTop >= firstItemHeight) {
      const firstItem = container.firstChild;
      if (firstItem) {
        container.removeChild(firstItem);
        container.appendChild(firstItem);
        container.scrollTop = container.scrollTop - firstItemHeight;
      }
    }

    scrollInterval.current = requestAnimationFrame(scrollStep);
  }, [scrollSpeed]);

  useEffect(() => {
    if (items.length <= 1) return;

    scrollInterval.current = requestAnimationFrame(scrollStep);

    return () => {
      if (scrollInterval.current) {
        cancelAnimationFrame(scrollInterval.current);
      }
    }; // Cleanup on unmount
  }, [items, scrollStep]);

  return (
    <div className={`bg-gray-100 p-4 rounded-md shadow-md overflow-hidden`}>
       <div className="flex items-center mb-3">
    <span className="mr-2"><VscLaw /></span>
    <h2 className="text-lg font-semibold inline-block">{title}</h2>
  </div>
      <div ref={containerRef} className="overflow-y-hidden">
        <ul className="list-disc pl-5">
          {items.map((item, index) => (
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

export default WhatLaws;
