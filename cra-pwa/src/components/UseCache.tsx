import React, { useState, useEffect } from "react";

import styles from "./UseCache.module.css";

export const UseCache: React.FunctionComponent = () => {
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `[Cache ${isEnabled ? "Enabled" : "Disabled"}]`;
  });

  const toggleCache = () => {
    setIsEnabled(!isEnabled);

    // caches.delete()
  }

  return (
      <button className={styles.button} onClick={toggleCache}>Toggle Cache</button>
  );
}

export default UseCache;
