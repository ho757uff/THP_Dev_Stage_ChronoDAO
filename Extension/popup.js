// popup.js
function OpenURL() {
  chrome.tabs.create({ url: "https://votre-site.com" });
}

document.getElementById("openBtn").addEventListener("click", OpenURL);
