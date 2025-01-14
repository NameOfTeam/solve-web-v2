export const parseCategory = (category: string) => {
  switch (category) {
    case "NOTICE":
      return "공지사항";
    case "QUESTION": 
      return "질문";
    case "SUGGESTION":
      return "수정 제안";
    case "INFORMATION":
      return "정보";
    default:
      return "자유"
  }
};
