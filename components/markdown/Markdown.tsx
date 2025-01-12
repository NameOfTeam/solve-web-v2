"use client";

import { useState } from "react";
import { Editable, Slate, withReact } from "slate-react";
import { createEditor } from "slate";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

const MarkdownEditor = () => {
  const [editor] = useState(() => withReact(createEditor()));
  // Render the Slate context.
  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable />
    </Slate>
  );
};

export default MarkdownEditor;
