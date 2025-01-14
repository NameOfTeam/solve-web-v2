import { Node, Parent } from "unist";
import { visit } from "unist-util-visit";

// 기본 노드 인터페이스 확장
interface TextNode extends Node {
  type: "text";
  value: string;
}

interface SpoilerNode extends Node {
  type: "spoiler";
  value: string;
}

interface ParagraphNode extends Parent {
  type: "paragraph";
  children: (TextNode | SpoilerNode)[];
}

// Plugin 타입 정의
type RemarkPlugin = () => (tree: Node) => void;

export const remarkSpoiler: RemarkPlugin = () => {
  return (tree: Node) => {
    visit(
      tree,
      "text",
      (node: TextNode, index: number, parent: Parent | null) => {
        const spoilerRegex = /\|\|(.+?)\|\|/g;
        let match: RegExpExecArray | null;
        const children: (TextNode | SpoilerNode)[] = [];
        let lastIndex = 0;

        while ((match = spoilerRegex.exec(node.value)) !== null) {
          if (match.index > lastIndex) {
            children.push({
              type: "text",
              value: node.value.slice(lastIndex, match.index),
            });
          }

          children.push({
            type: "spoiler",
            value: match[1], // 스포일러 내부 텍스트
          });

          lastIndex = spoilerRegex.lastIndex;
        }

        if (lastIndex < node.value.length) {
          children.push({
            type: "text",
            value: node.value.slice(lastIndex),
          });
        }

        if (children.length > 0 && parent) {
          const paragraphNode: ParagraphNode = {
            type: "paragraph",
            children: children,
          };
          Object.assign(node, paragraphNode);
        }
      }
    );
  };
};
