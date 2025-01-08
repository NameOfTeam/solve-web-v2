import Banner from "@/components/Banner";
import Search from "@/components/Search";
import Dropdown from "@/components/Dropdown";
import React from "react";

const Problem = () => {
  return (
    <div className="w-full h-full overflow-visible">
      <Banner title="문제" description="취향에 맞는 문제를 풀어볼 수 있어요." />
      <div className="px-52 overflow-visible">
        <div className="w-full py-9 overflow-visible">
          <div className="flex flex-col gap-y-3 overflow-visible">
            <div className="w-[520px]">
              <Search />
            </div>
            <div className="flex gap-x-3 overflow-visible">
              <Dropdown
                data={[
                  { name: "최신순", value: "recent" },
                  { name: "정답률 높은 문제", value: "highSolved" },
                  { name: "정답률 낮은 문제", value: "lowSolved" },
                ]}
                type="SELECT"
                defaultValue="최신순"
              />
              <Dropdown
                defaultValue="루키"
                data={[
                  { name: "루키", value: "rookie" },
                  { name: "문 1", value: "moon1" },
                  { name: "문 2", value: "moon2" },
                  { name: "문 3", value: "moon3" },
                  { name: "문 4", value: "moon4" },
                  { name: "문 5", value: "moon5" },
                  { name: "행성 1", value: "planet1" },
                  { name: "행성 2", value: "planet2" },
                  { name: "행성 3", value: "planet3" },
                  { name: "행성 4", value: "planet4" },
                  { name: "행성 5", value: "planet5" },
                  { name: "항성 1", value: "star1" },
                  { name: "항성 2", value: "star2" },
                  { name: "항성 3", value: "star3" },
                  { name: "항성 4", value: "star4" },
                  { name: "항성 5", value: "star5" },
                  { name: "혜성 1", value: "comet1" },
                  { name: "혜성 2", value: "comet2" },
                  { name: "혜성 3", value: "comet3" },
                  { name: "혜성 4", value: "comet4" },
                  { name: "혜성 5", value: "comet5" },
                  { name: "성운", value: "nebular" },
                ]}
                type="SELECT"
              />
              <Dropdown
                defaultValue="최신순"
                data={[
                  { name: "최신순", value: "recent" },
                  { name: "정답률 높은 문제", value: "highSolved" },
                  { name: "정답률 낮은 문제", value: "lowSolved" },
                ]}
                type="SELECT"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
