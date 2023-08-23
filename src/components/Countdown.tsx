import React, { useEffect, useRef, useState } from "react";

interface CountdownProps {
  targetTimestamp: number;
  onTimerExpired: () => void;
}

function Countdown({ targetTimestamp, onTimerExpired }: CountdownProps) {
  const calculateTimeRemaining = () => {
    const currentTime = new Date().getTime();
    const timeRemaining = targetTimestamp - currentTime;
    return timeRemaining > 0 ? timeRemaining : 0;
  };

  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const targetTimestampRef = useRef(targetTimestamp);

  useEffect(() => {
    targetTimestampRef.current = targetTimestamp;
    const remainingTime = calculateTimeRemaining();
    setTimeRemaining(remainingTime);
  }, [targetTimestamp]);

  useEffect(() => {
    if (timeRemaining === null) return;

    const timer = setInterval(() => {
      const remainingTime = calculateTimeRemaining();
      setTimeRemaining(remainingTime);

      if (remainingTime <= 0) {
        onTimerExpired();
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeRemaining]);

  const formatTime = (milliseconds: number) => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  if (timeRemaining === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>{formatTime(timeRemaining)}</p>
    </div>
  );
}

export default Countdown;
