import React from "react";

const Banner = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full bg-container-border flex justify-center">
      <div className="w-[72%] h-36 flex flex-col gap-[10px] justify-center">
        <p className="text-main-container font-[700] text-3xl">{title}</p>
        <p className="text-main-container font-[400] text-base">{description}</p>
      </div>
    </div>
  );
};

export default Banner;
