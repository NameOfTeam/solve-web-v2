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
    case "KOTLIN":
      return "Kotlin";
    case "CPP":
      return "C++";
    case "CSHARP":
      return "C#";
    case "SWIFT":
      return "Swift";
  }
};
