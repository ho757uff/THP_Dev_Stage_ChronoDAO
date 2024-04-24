import { useState, useEffect } from "react"

function IndexPopup() {
  const [currentUrl, setCurrentUrl] = useState<string>(initialState: "")
  
  const getCurrentUrl = () => {
    const [tab] = await chrome.tabs.query(queryInfo: { active: true, currentWindow: true })
    setCurrentUrl(value: tab.url)
  }

useEffect(effect: () : void => {
  getCurrentUrl()
}, deps: [currentUrl])

  return (
    <div
      style={{
        padding: 16
      }}>
      <h1>
        You're currently at {currentUrl}
      </h1>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
    </div>
  )
}

export default IndexPopup
