import React, { useEffect, useRef } from "react";
import { exploreItems } from "../data/explore";
import ExploreCard from "./ExploreCard";

const ExploreSection = () => {
  const scrollRef = useRef(null);

  const items = [...exploreItems].reverse();
  const loopItems = [...items, ...items, ...items];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const third = container.scrollWidth / 3;
    container.scrollLeft = third;

    let isAdjusting = false;

    const handleScroll = () => {
      if (isAdjusting) return;

      const { scrollLeft, scrollWidth } = container;
      const third = scrollWidth / 3;

      if (scrollLeft <= third * 0.2) {
        isAdjusting = true;
        container.scrollLeft = scrollLeft + third;
        isAdjusting = false;
      }

      if (scrollLeft >= third * 1.8) {
        isAdjusting = true;
        container.scrollLeft = scrollLeft - third;
        isAdjusting = false;
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="eksplore" className="pt-10 pb-20">
      <div className="container mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-title text-brand-dark font-bold mb-4">
            Eksplorasi Konten
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Temukan beragam konten inspiratif dan edukatif dari HIMATIKA.
          </p>
        </div>
          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="
              flex gap-6 px-4 py-4
              overflow-x-scroll
              snap-none
              [&::-webkit-scrollbar]:hidden
            "
          >
            {loopItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="shrink-0 w-[310px] h-[350px]"
              >
                <ExploreCard item={item} />
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default ExploreSection;
