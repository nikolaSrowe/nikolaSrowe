import React from "react";

const DeviceMockup = ({ deviceType, image, bgColor, title }) => {
  switch (deviceType) {
    case "laptop":
      return (
        <div className="device-mockup laptop">
          <div className="device-frame" style={{ backgroundColor: "#333" }}>
            <div className="device-screen" style={{ backgroundColor: bgColor || "#fff" }}>
              <img src={image} alt={title} className="device-content" />
            </div>
          </div>
          <div className="device-base"></div>
        </div>
      );
    case "mobile":
      return (
        <div className="device-mockup mobile">
          <div className="device-frame" style={{ backgroundColor: "#333" }}>
            <div className="device-notch"></div>
            <div className="device-screen" style={{ backgroundColor: bgColor || "#fff" }}>
              <img src={image} alt={title} className="device-content" />
            </div>
          </div>
        </div>
      );
    case "tablet":
    default:
      return (
        <div className="device-mockup tablet">
          <div className="device-frame" style={{ backgroundColor: "#333" }}>
            <div className="device-screen" style={{ backgroundColor: bgColor || "#fff" }}>
              <img src={image} alt={title} className="device-content" />
            </div>
          </div>
        </div>
      );
  }
};

export default DeviceMockup;