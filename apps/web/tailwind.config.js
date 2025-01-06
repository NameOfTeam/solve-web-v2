const sharedConfig = require("tailwind-config/tailwind.config");

module.exports = {
  presets: [sharedConfig],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // 로컬 경로
    "../../packages/ui/**/*.{js,ts,jsx,tsx}", // 공통 UI 패키지
  ],
};
