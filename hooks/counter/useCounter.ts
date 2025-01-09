import { useState, useEffect } from "react";

export const useCounter = (date: string) => {
  const [timeLeft, setTimeLeft] = useState<string | null>(null);

  useEffect(() => {
    const updateLeftTime = () => {
      const now = new Date();
      const diff = new Date(date).getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft(null);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft(`${days}일 ${hours}시간 ${minutes}분 ${seconds}초`);
      }
    };

    updateLeftTime();
    const interval = setInterval(updateLeftTime, 250);

    return () => clearInterval(interval);
  }, [date]);

  return timeLeft;
};
