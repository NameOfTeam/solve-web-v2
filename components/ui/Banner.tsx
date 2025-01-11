import React from "react";

const Banner = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full h-36 px-52 flex flex-col gap-[10px] bg-container-border justify-center">
      <p className="text-main-container font-[700] text-3xl">{title}</p>
      <p className="text-main-container font-[400] text-base">{description}</p>
    </div>
  );
};

export default Banner;
