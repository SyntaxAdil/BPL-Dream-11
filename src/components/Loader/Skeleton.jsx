import React from "react";

const Skeleton = () => (
  <>
    <header className="grid grid-cols-1 md:grid-cols-2 gap-5 px-4 items-center sticky top-12 md:top-25 py-6 bg-white z-15 border-b border-base-300 mt-20">
      {/* Left side skeleton */}
      <div>
        <div className="skeleton h-6 w-48"></div>
      </div>

      {/* Right side skeleton */}
      <div className="md:ms-auto">
        <div className="flex gap-2">
          <div className="skeleton h-10 w-28 rounded-md"></div>
          <div className="skeleton h-10 w-32 rounded-md"></div>
        </div>
      </div>
    </header>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-64 rounded-2xl bg-gray-100 animate-pulse" />
      ))}
    </div>
  </>
);

export default Skeleton;
