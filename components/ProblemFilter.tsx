"use client";

import React from "react";
import Dropdown from "./Dropdown";
import { useUserStore } from "@/stores/user/useUserStore";

const ProblemFilter = () => {
  const { user } = useUserStore();

  return (
    <div className="flex gap-x-3 overflow-visible">
      {user && (
        <Dropdown
          data={[
            { name: "미해결한 문제", value: "UNSOLVED" },
            { name: "해결한 문제", value: "SOLVED" },
            { name: "풀이 중인 문제", value: "SOLVING" },
          ]}
          type="STATE"
          defaultValue="상태"
        />
      )}
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
  );
};

export default ProblemFilter;
