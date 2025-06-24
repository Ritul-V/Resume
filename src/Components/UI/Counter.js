import { useState, useEffect } from "react";

const Counter = ({ targetNumber, speed = 300 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let currentCount = 0;
    const interval = setInterval(() => {
      if (currentCount < targetNumber) {
        currentCount++;
        setCount(currentCount);
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [targetNumber, speed]);

  return <span className="display-3 fw-medium col-4 text-end">{count}+</span>;
};

export default Counter;
