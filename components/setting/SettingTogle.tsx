import React from "react";

const SettingTogle = ({ checked,  }: { checked: boolean }) => {


  return (
    <div
      className={`w-10 h-[22px] border rounded-full relative ${
        checked
          ? "border-secondary-700 bg-secondary-600"
          : "bg-container border-container-border"
      }`}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full shadow-[0px_1px_6px_0px_rgba(0,0,0,0.15)] absolute ${
          checked ? "right-0" : "left-0"
        }`}
      />
    </div>
  );
};

export default SettingTogle;
