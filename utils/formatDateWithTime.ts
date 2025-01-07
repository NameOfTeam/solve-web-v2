export const formatDateWithTime = (date: string) => {
  const timeArray = date.split("T")[1].split(":");
  const dateArray = date.split("T")[0].split("-");
  return `${dateArray[0]}년 ${dateArray[1]}월 ${dateArray[2]}일 ${timeArray[0]}:${timeArray[1]}`;
};
