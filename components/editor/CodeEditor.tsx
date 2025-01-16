"use client";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { vscodeDark } from "@uiw/codemirror-themes-all";
import type { Extension } from "@codemirror/state";
import { useCodeStore } from "@/stores/problem/useCodeStore";

type SupportedLanguage = "javascript" | "python";

interface CodeEditorProps {
  language?: SupportedLanguage;
}

const languageMap: Record<SupportedLanguage, Extension> = {
  javascript: javascript(),
  python: python(),
};

export const CodeEditor = ({ language = "javascript" }: CodeEditorProps) => {
  const { code, setCode } = useCodeStore();

  return (
    <CodeMirror
      value={code}
      height="100%"
      theme={vscodeDark}
      extensions={[languageMap[language]]}
      onChange={(e) => setCode(e)}
      style={{ height: "100%" }}
      basicSetup={{
        lineNumbers: true,
        highlightActiveLineGutter: true,
        highlightSpecialChars: true,
        foldGutter: true,
        drawSelection: true,
        dropCursor: false,
        allowMultipleSelections: true,
        indentOnInput: true,
        bracketMatching: true,
        closeBrackets: true,
        autocompletion: true,
        rectangularSelection: true,
        highlightActiveLine: true,
        highlightSelectionMatches: true,
        closeBracketsKeymap: true,
        defaultKeymap: true,
        historyKeymap: true,
        syntaxHighlighting: true,
        searchKeymap: false,
        foldKeymap: true,
      }}
    />
  );
};
