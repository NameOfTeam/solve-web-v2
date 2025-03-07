import ProfileBox from "@/components/profile/ProfileBox";
import ProfileNavigation from "@/components/profile/ProfileTabs";
import React from "react";

const ProfileLayout = () => {
  return (
    <div>
      <div className="w-full pt-72 pb-12 flex justify-center">
        <div className="flex w-3/4 gap-4">
          <ProfileBox />
          <div className="w-full flex flex-col ">
            <ProfileNavigation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
