import { useState, useEffect } from "react";

function IndexPopup() {
  const [currentUrl, setCurrentUrl] = useState<string>(""); // Suppression de l'argument initialState

  useEffect(() => { // Correction de l'utilisation de useEffect
    getCurrentUrl();
  }, []); // Suppression du tableau de dépendances, car nous n'avons pas besoin de re-exécuter useEffect en fonction d'une dépendance

  const getCurrentUrl = async () => { // Ajout de async pour permettre l'utilisation de await
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true }); // Correction de la syntaxe
    setCurrentUrl(tab.url); // Correction de la syntaxe
  };

  return (
    <div
      style={{
        padding: 16
      }}
    >
      <h1>
        You're currently at {currentUrl}
      </h1>
      {/* L'élément input nécessite une fonction onChange pour mettre à jour la valeur */}
      <input onChange={(e) => setCurrentUrl(e.target.value)} value={currentUrl} /> 
      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
    </div>
  );
}

export default IndexPopup;
