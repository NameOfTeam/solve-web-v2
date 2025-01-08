export const formatLeftTime = (start: string) => {
  const now = new Date();
  const startDate = new Date(start);

  const timeDifference = Number(startDate) - Number(now);

  if (timeDifference <= 0) {
    return "진행중!";
  }

  const days = Math.floor(timeDifference / (100 * 60 * 60 * 24));
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return `${hours}시간 ${minutes}분 ${seconds}초`;
}