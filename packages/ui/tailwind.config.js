/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "../../apps/**/**/*.{js,ts,jsx,tsx}", // Turborepo에서 공유할 앱 경로
    "./**/*.{js,ts,jsx,tsx}", // 현재 패키지 내부의 컴포넌트
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

