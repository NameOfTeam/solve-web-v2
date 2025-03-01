import solveAxios from "@/libs/axios/solveAxios";

export const saveCode = async (
  problemId: string,
  code: string,
  language: string
) => {
  try {
    await solveAxios.post(
      `/problems/${problemId}/code?language=${language}`,
      {
        code
      }
    );
    return true;
  } catch {
    return false;
  }
};
