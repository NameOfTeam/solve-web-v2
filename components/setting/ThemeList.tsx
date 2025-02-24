import useGetThemeList from "@/hooks/theme/useGetThemeList";
import React, { useState } from "react";

const ThemeList = ({ query }: { query?: string }) => {
  const [page, setPage] = useState<number>(0);

  const themes = useGetThemeList(page, 15, query);

  return (
    <div className=" grid grid-cols-3 grid-rows-3 gap-4">
      {themes.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-4 px-5 py-4 rounded-lg border-container-border border"
        >
          <div className=" w-full h-24 bg-red-100 rounded-lg" />
          <div className=" flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <p>{item.name}</p>
              <p className="text-base font-normal">{item.description}</p>
            </div>
            {item.has ? (
              <div>
                <p className="text-base font-normal text-white">착용하기</p>
              </div>
            ) : item.isPurchasable ? (
              <div>
                <p className="text-base font-normal text-white">
                  구매하러 가기 →
                </p>
              </div>
            ) : (
              <div>
                <p className="text-base font-normal text-white">구매 불가 ✕</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThemeList;
