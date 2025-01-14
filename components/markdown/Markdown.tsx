"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";

const Markdown = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        // 헤딩 스타일링
        h1: ({ children }) => (
          <h1 className="text-3xl font-bold mb-6 text-main-container">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-2xl font-bold mb-4 text-main-container">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-xl font-bold mb-3 text-main-container">
            {children}
          </h3>
        ),

        // 텍스트 스타일링
        p: ({ children }) => (
          <p className="mb-4 leading-7 text-main-container">{children}</p>
        ),
        strong: ({ children }) => (
          <strong className="font-bold text-main-container">{children}</strong>
        ),
        em: ({ children }) => (
          <em className="italic text-main-container">{children}</em>
        ),

        // 리스트 스타일링
        ul: ({ children }) => (
          <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>
        ),
        li: ({ children }) => (
          <li className="text-main-container">{children}</li>
        ),

        // 링크 스타일링
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-main-container hover:text-primary-700 underline transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        ),

        // 코드 블록 스타일링
        code: ({ className, children }) => {
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <div className="mb-4 rounded-lg overflow-hidden bg-bg-border">
              <SyntaxHighlighter
                style={nord}
                language={match[1]}
                PreTag="div"
                className="!bg-bg-border"
              >
                {String(children).trim()}
              </SyntaxHighlighter>
            </div>
          ) : (
            <code className="px-2 py-1 bg-primary-100 rounded-md text-sm font-mono text-primary-800">
              {children}
            </code>
          );
        },

        // 인용구 스타일링
        blockquote: ({ children }) => (
          <blockquote className="pl-4 border-l-4 border-primary-300 my-4 italic text-main-container bg-primary-0 py-2 rounded-r">
            {children}
          </blockquote>
        ),

        // 이미지 스타일링
        img: ({ src, alt }) => (
          <img
            src={src}
            alt={alt}
            className="max-w-full h-auto my-4 rounded-lg shadow-md animate-fade-in"
          />
        ),

        // 구분선 스타일링
        hr: () => <hr className="my-8 border-t border-bg-border" />,

        // 테이블 스타일링
        table: ({ children }) => (
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full divide-y divide-bg-border">
              {children}
            </table>
          </div>
        ),
        thead: ({ children }) => (
          <thead className="bg-container-border">{children}</thead>
        ),
        th: ({ children }) => (
          <th className="px-6 py-3 text-left text-xs font-medium text-main-container uppercase tracking-wider">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="px-6 py-4 whitespace-nowrap text-sm text-main-container border-b border-bg-border">
            {children}
          </td>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

export default Markdown