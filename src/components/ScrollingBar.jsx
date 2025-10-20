import React from "react";


function ScrollingBar() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-blue-900 text-white py-3">
      <div className="scroll-track overflow-hidden">
        <div className="scroll-content">
          <span className="mx-6 text-lg">📱 Smartphone</span>
          <span className="mx-6 text-lg">🎧 Buds</span>
          <span className="mx-6 text-lg">🔊 Bluetooth</span>
          <span className="mx-6 text-lg">💻 Laptop</span>
          <span className="mx-6 text-lg">⌚ Smartwatch</span>
          <span className="mx-6 text-lg">🎮 Gamepad</span>
        </div>
        {/* Duplicate for seamless looping */}
        <div className="scroll-content overflow-hidden">
          <span className="mx-6 text-lg">📱 Smartphone</span>
          <span className="mx-6 text-lg">🎧 Buds</span>
          <span className="mx-6 text-lg">🔊 Bluetooth</span>
          <span className="mx-6 text-lg">💻 Laptop</span>
          <span className="mx-6 text-lg">⌚ Smartwatch</span>
          <span className="mx-6 text-lg">🎮 Gamepad</span>
        </div>
      </div>
    </div>
  );
}

export default ScrollingBar;
