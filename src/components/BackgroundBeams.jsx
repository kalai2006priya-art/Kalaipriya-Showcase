import React from 'react';

export default function BackgroundBeams() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Delicate dot grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black_80%)]" />

      {/* Top right purple ambient glow */}
      <div className="absolute -top-[15%] right-[5%] w-[500px] h-[500px] rounded-full bg-purple-600/8 blur-[120px]" />

      {/* Mid left cyan ambient glow */}
      <div className="absolute top-[35%] -left-[10%] w-[450px] h-[450px] rounded-full bg-cyan-600/6 blur-[120px]" />

      {/* Bottom center indigo ambient glow */}
      <div className="absolute -bottom-[10%] left-[30%] w-[450px] h-[450px] rounded-full bg-indigo-600/7 blur-[130px]" />
    </div>
  );
}