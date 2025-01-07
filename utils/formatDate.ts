export const formatDate = (date: string) => {
  const dateArray = date.split("T")[0].split("-");
  return `${dateArray[0]}년 ${dateArray[1]}월 ${dateArray[2]}일`;
};