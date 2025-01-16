import { useState } from "react";

const Spoiler = ({ content }: { content: string }) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <span
      onClick={() => setRevealed(!revealed)}
      style={{
        cursor: "pointer",
        backgroundColor: revealed ? "transparent" : "black",
        color: revealed ? "inherit" : "black",
        borderRadius: "3px",
        padding: "0 4px",
      }}
    >
      {revealed ? content : "Spoiler"}
    </span> 
  );
};

export default Spoiler