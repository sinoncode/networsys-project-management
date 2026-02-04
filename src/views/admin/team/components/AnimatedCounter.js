import React, { useEffect, useState } from "react";

export default function AnimatedCounter({ value, duration = 1000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    // Prevent divide by zero
    if (!value) return;

    const stepTime = Math.max(10, Math.floor(duration / value));

    const interval = setInterval(() => {
      start += 1;
      setCount(start);

      if (start === value) {
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [value, duration]);

  return <>{count}</>;
}
