export interface User {
  id: string;
  email: string;
  role: string;
  username: string;
  money: number;
  participatedContest: number;
  solvedCount: number;
  streak: number;
  maxStreak: number;
  isSolvedToday: boolean;
  rank: string;
  introduction?: string;
}

// localhost:8080/avatars/{userId}.webp
