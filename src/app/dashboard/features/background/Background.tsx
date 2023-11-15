import React from "react";

export default function Background() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="fixed top-0 left-0 min-w-full min-h-full object-cover z-[-1]"
    >
      <source src="/assets/VideoBackground/outside-rain.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
