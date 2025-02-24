export const formatLeftTime = (start: string) => {
  const now = new Date();
  const startDate = new Date(start);

  const timeDifference = startDate.getTime() - now.getTime();

  if (timeDifference <= 0) {
    return "진행중!";
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return `${days}일 ${hours}:${minutes}:${seconds}`;
};
