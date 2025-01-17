export const languageParser = (language: string) => {
  switch (language) {
    case "PYTHON":
      return "Python";
    case "C":
      return "C";
    case "NODE_JS":
      return "Node.js";
    case "JAVA":
      return "Java";
  }
};
