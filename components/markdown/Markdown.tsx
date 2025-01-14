"use client";

import { FC, MouseEvent } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";
import { remarkSpoiler } from "@/utils/remarkSpoiler";
import Spoiler from "./Spoiler";

type ExtendedComponents = any & {
  spoiler: FC<{ children: React.ReactNode }>;
};

interface MarkdownProps {
  content: string;
}

interface CommonProps {
  children?: React.ReactNode | string;
}

interface LinkProps extends CommonProps {
  href?: string;
}

interface CodeProps extends CommonProps {
  className?: string;
}

interface ImageProps {
  src?: string;
  alt?: string;
}

const components = {
  h1: ({ children }: CommonProps) => (
    <h1 className="text-3xl font-bold mb-6 text-main-container">{children}</h1>
  ),
  h2: ({ children }: CommonProps) => (
    <h2 className="text-2xl font-bold mb-4 text-main-container">{children}</h2>
  ),
  h3: ({ children }: CommonProps) => (
    <h3 className="text-xl font-bold mb-3 text-main-container">{children}</h3>
  ),
  p: ({ children }: CommonProps) => (
    <p className="mb-2 leading-7 text-main-container">{children}</p>
  ),
  strong: ({ children }: CommonProps) => (
    <strong className="font-bold text-main-container">{children}</strong>
  ),
  em: ({ children }: CommonProps) => (
    <em className="italic text-main-container">{children}</em>
  ),
  ul: ({ children }: CommonProps) => (
    <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>
  ),
  ol: ({ children }: CommonProps) => (
    <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>
  ),
  li: ({ children }: CommonProps) => (
    <li className="text-main-container">{children}</li>
  ),
  a: ({ href, children }: LinkProps) => (
    <a
      href={href}
      className="text-main-container hover:text-primary-700 underline transition-colors duration-200"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children || href}
    </a>
  ),
  code: ({ className, children }: CodeProps) => {
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
  blockquote: ({ children }: CommonProps) => (
    <blockquote className="pl-4 border-l-4 border-primary-300 my-4 italic text-main-container bg-primary-0 py-2 rounded-r">
      {children}
    </blockquote>
  ),
  img: ({ src, alt }: ImageProps) => (
    <img
      src={src}
      alt={alt}
      className="max-w-full h-auto my-4 rounded-lg shadow-md animate-fade-in"
    />
  ),
  hr: () => <hr className="my-8 border-t border-bg-border" />,
  table: ({ children }: CommonProps) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full divide-y divide-bg-border">{children}</table>
    </div>
  ),
  thead: ({ children }: CommonProps) => (
    <thead className="bg-container-border">{children}</thead>
  ),
  th: ({ children }: CommonProps) => (
    <th className="px-6 py-3 text-left text-xs font-medium text-main-container uppercase tracking-wider">
      {children}
    </th>
  ),
  td: ({ children }: CommonProps) => (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-main-container border-b border-bg-border">
      {children}
    </td>
  ),
  spoiler: ({ children }: CommonProps) => {
    const handleClick = (e: MouseEvent<HTMLSpanElement>) => {
      const target = e.target as HTMLSpanElement;
      target.classList.toggle("text-black");
      target.classList.toggle("text-white");
    };

    return (
      <span
        className="bg-black text-black rounded px-2 cursor-pointer"
        onClick={handleClick}
      >
        {children}
      </span>
    );
  },
};

const Markdown: FC<MarkdownProps> = ({ content }) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw]}
    components={components}
  >
    {content}
  </ReactMarkdown>
);

export default Markdown;
