import React, { useState, useEffect } from "react";

import styles from "./UseCache.module.css";

export const UseCache: React.FunctionComponent = () => {
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `[Cache ${isEnabled ? "Enabled" : "Disabled"}]`;

    if (!isEnabled) {
      console.debug("Cache disabled...");

      dispatchEvent(new Event("clear"));
      // window.location.reload(true);
    }
  });

  const toggleCache = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <button className={styles.button} onClick={toggleCache}>
      Toggle Cache
    </button>
  );
};

export default UseCache;
