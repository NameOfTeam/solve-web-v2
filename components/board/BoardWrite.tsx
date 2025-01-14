"use client";

import React, { useEffect, useState } from "react";
import Dropdown from "../ui/Dropdown";
import { useForm } from "react-hook-form";
import { BoardForm } from "@/types/board/boardForm";
import { useCategoryStore } from "@/stores/board/useCategoryStore";
import Markdown from "../markdown/Markdown";


const BoardWrite = () => {
  const [isPreview, setIsPreview] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setValue,
    watch,
  } = useForm<BoardForm>({
    mode: "onChange",
    defaultValues: {
      title: "",
      content: "",
      category: "FREE",
      problemId: "",
    },
  });

  const { category } = useCategoryStore();
  const content = watch("content");

  useEffect(() => {
    setValue("category", category);
  }, [category]);

  const testContent = `
# 제목

- 리스트 항목 1
- 리스트 항목 2

**굵은 텍스트**

\`\`\`js
console.log("코드 블록");
\`\`\`
`;

  return (
    <form
      className="w-full h-full overflow-visible flex flex-col gap-y-8"
      onSubmit={handleSubmit((e) => console.log(e))}
    >
      <div className="w-full h-full flex flex-col gap-y-2 overflow-visible">
        <div className="w-full flex items-center justify-between overflow-visible">
          <input
            type="text"
            className="max-w-[640px] w-full bg-transparent border-b border-bg-border py-2 text-[26px] outline-none text-main-container placeholder:text-bg-border"
            placeholder="제목*"
            {...register("title", {
              required: "제목은 필수입니다.",
              minLength: {
                value: 1,
                message: "제목을 한 글자 이상 입력해주세요.",
              },
            })}
          />
          <Dropdown
            defaultValue="자유"
            type="CATEGORY"
            data={[
              { name: "자유", value: "FREE" },
              { name: "질문", value: "QUESTION" },
              { name: "정보", value: "INFORMATION" },
              { name: "수정 제안", value: "SUGGESTION" },
            ]}
          />
        </div>
        <div className="relative max-w-40">
          <span className="absolute left-0 top-1/2 -translate-y-1/2 text-lg text-main-container">
            #
          </span>
          <input
            type="text"
            className="w-full bg-transparent border-b border-bg-border py-2 text-lg outline-none text-main-container placeholder:text-bg-border pl-6"
            {...register("problemId")}
          />
        </div>
      </div>

      <div className="w-full flex flex-col">
        <div className="flex items-center justify-end gap-2 mb-2">
          <button onClick={() => setIsPreview((prev) => !prev)}>교체</button>
        </div>

        <div className="w-full h-[480px] border border-bg-border">
          {isPreview ? (
            <div className="w-full h-full overflow-auto p-6 prose prose-slate max-w-none bg-container text-main-container">
              <Markdown content={content} />
            </div>
          ) : (
            <textarea
              className="w-full h-full resize-none p-6 outline-none bg-container text-main-container"
              placeholder="마크다운 형식으로 작성해주세요."
              {...register("content", {
                required: "본문은 필수입니다.",
                minLength: {
                  value: 1,
                  message: "본문을 한 글자 이상 입력해주세요.",
                },
              })}
            />
          )}
        </div>
      </div>

      <button
        disabled={!isValid || isSubmitting}
        className="self-end w-full max-w-28 h-12 text-lg text-main-container bg-primary-600 disabled:bg-bg-border disabled:cursor-not-allowed rounded-lg cursor-pointer"
      >
        게시
      </button>
    </form>
  );
};

export default BoardWrite;
