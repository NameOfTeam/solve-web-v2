import Banner from "@/components/Banner";
import Search from "@/components/Search";
import Dropdown from "@/components/Dropdown";
import React, { Suspense } from "react";
import ReactQueryProviders from "@/components/ReactQueryProviders";
import ProblemList from "@/components/ProblemList";

const Problem = () => {
  return (
    <div className="w-full h-full overflow-visible">
      <Banner title="문제" description="취향에 맞는 문제를 풀어볼 수 있어요." />
      <div className="h-exceptBanner px-52 overflow-visible">
        <div className="w-full h-full py-9 overflow-visible">
          <div className="flex flex-col gap-y-3 overflow-visible">
            <div className="w-[520px]">
              <Search />
            </div>
            <div className="flex gap-x-3 overflow-visible">
              <Dropdown
                data={[
                  { name: "미해결한 문제", value: "UNSOLVED" },
                  { name: "해결한 문제", value: "SOLVED" },
                  { name: "풀이 중인 문제", value: "SOLVING" },
                ]}
                type="STATE"
                defaultValue="상태"
              />
              <Dropdown
                defaultValue="난이도"
                data={[
                  { name: "루키", value: "ROOKIE" },
                  { name: "문 1", value: "MOON_1" },
                  { name: "문 2", value: "MOON_2" },
                  { name: "문 3", value: "MOON_3" },
                  { name: "문 4", value: "MOON_4" },
                  { name: "문 5", value: "MOON_5" },
                  { name: "행성 1", value: "PLANET_1" },
                  { name: "행성 2", value: "PLANET_2" },
                  { name: "행성 3", value: "PLANET_3" },
                  { name: "행성 4", value: "PLANET_4" },
                  { name: "행성 5", value: "PLANET_5" },
                  { name: "항성 1", value: "STAR_1" },
                  { name: "항성 2", value: "STAR_2" },
                  { name: "항성 3", value: "STAR_3" },
                  { name: "항성 4", value: "STAR_4" },
                  { name: "항성 5", value: "STAR_5" },
                  { name: "혜성 1", value: "COMET_1" },
                  { name: "혜성 2", value: "COMET_2" },
                  { name: "혜성 3", value: "COMET_3" },
                  { name: "혜성 4", value: "COMET_4" },
                  { name: "혜성 5", value: "COMET_5" },
                  { name: "성운", value: "NEBULAR" },
                ]}
                type="TIER"
              />
              <Dropdown
                defaultValue="최신순"
                data={[
                  { name: "최신순", value: "LATEST" },
                  { name: "정답률 높은 문제", value: "CORRECT_RATE_DESC" },
                  { name: "정답률 낮은 문제", value: "CORRECT_RATE_ASC" },
                ]}
                type="FILTER"
              />
            </div>
          </div>
          <ReactQueryProviders>
            <Suspense fallback={<p>로딩중...</p>}>
              <ProblemList />
            </Suspense>
          </ReactQueryProviders>
        </div>
      </div>
    </div>
  );
};

export default Problem;
