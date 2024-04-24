import React from "react";

const IndexPopup: React.FC = () => {
  const openFullScreenPage = () => {
    chrome.tabs.create({ url: "/full-screen" }); // Ouvre la page plein écran dans un nouvel onglet
  };

  return (
    <div
      style={{
        padding: 16
      }}
    >
      <h1>
        Click below to open full screen
      </h1>
      <button onClick={openFullScreenPage}>Open Full Screen Page</button>
    </div>
  );
};

export default IndexPopup;