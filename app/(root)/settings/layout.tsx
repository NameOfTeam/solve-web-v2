import SettingNav from "@/components/setting/SettingNav";
import Banner from "@/components/ui/Banner";
import { PropsWithChildren } from "react";

const SettingsLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full">
      <Banner title="설정" description="Solve를 커스텀해 보세요." />
      <div className="flex flex-col gap-8 py-9 px-52">
        <SettingNav />
        {children}
      </div>
    </div>
  );
};

export default SettingsLayout;
