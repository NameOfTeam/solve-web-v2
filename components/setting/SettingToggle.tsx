import React from "react";

interface SettingToggleProps {
  checked: boolean;
  onChange?: () => void;
  disabled?: boolean;
}

const SettingToggle = ({
  checked,
  onChange,
  disabled = false,
}: SettingToggleProps) => {
  return (
    <button
      type="button"
      onClick={onChange}
      disabled={disabled}
      className={`w-10 h-[22px] border rounded-full relative ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : checked
          ? "border-secondary-700 bg-secondary-600 cursor-pointer"
          : "bg-container border-container-border cursor-pointer hover:bg-gray-100"
      }`}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full shadow-[0px_1px_6px_0px_rgba(0,0,0,0.15)] absolute top-0 ${
          checked ? "right-0" : "left-0"
        }`}
      />
    </button>
  );
};

export default SettingToggle;
