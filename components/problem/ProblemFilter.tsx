"use client";

import React from "react";
import Dropdown from "../ui/Dropdown";
import { useUserStore } from "@/stores/user/useUserStore";

const ProblemFilter = () => {
  const { user } = useUserStore();

  return (
    <div className="flex gap-x-3">
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
          { name: "Unrated", value: "UNRATED" },
          { name: "Rookie", value: "ROOKIE" },
          { name: "Moon 1", value: "MOON_1" },
          { name: "Moon 2", value: "MOON_2" },
          { name: "Moon 3", value: "MOON_3" },
          { name: "Moon 4", value: "MOON_4" },
          { name: "Moon 5", value: "MOON_5" },
          { name: "Planet 1", value: "PLANET_1" },
          { name: "Planet 2", value: "PLANET_2" },
          { name: "Planet 3", value: "PLANET_3" },
          { name: "Planet 4", value: "PLANET_4" },
          { name: "Planet 5", value: "PLANET_5" },
          { name: "Star 1", value: "STAR_1" },
          { name: "Star 2", value: "STAR_2" },
          { name: "Star 3", value: "STAR_3" },
          { name: "Star 4", value: "STAR_4" },
          { name: "Star 5", value: "STAR_5" },
          { name: "Comet 1", value: "COMET_1" },
          { name: "Comet 2", value: "COMET_2" },
          { name: "Comet 3", value: "COMET_3" },
          { name: "Comet 4", value: "COMET_4" },
          { name: "Comet 5", value: "COMET_5" },
          { name: "Nebular", value: "NEBULAR" },
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
