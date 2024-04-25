// THP_Dev_Stage_ChronoDAO/chrono-dao-assets-tracker/popup.tsx
import React, { useState, useEffect } from "react";

function IndexPopup() {
  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    getCurrentUrl();
  }, []);

  const getCurrentUrl = async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    setCurrentUrl(tab.url);
  };

  return (
    <div style={{ padding: 16 }}>
      <h1>You're currently at {currentUrl}</h1>
      <input
        onChange={(e) => setCurrentUrl(e.target.value)}
        value={currentUrl}
        placeholder="Enter a URL" // Ajout d'un texte de placeholder
      />
      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
    </div>
  );
}

export default IndexPopup;
