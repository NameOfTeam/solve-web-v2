export interface PrivacySettings {
  id: string;
  profile: {
    showProfile: boolean;
    showTier: boolean;
    showActivity: boolean;
    showLanguage: boolean;
    showStreak: boolean;
    showSolvedProblem: boolean;
    showSolvedProblemsDetail: boolean;
    showAccessory: boolean;
  };
  name: {
    name: string;
    showName: boolean;
  };
  gender: {
    gender: string;
    showGender: boolean;
  };
  birth: {
    birth: Date;
    showBirth: boolean;
  };
  link: string[];
}

export interface DisplaySettings {
  showTierIcon: "SHOWALL" | "HIDEALL" | "SHOWSOLVEDPROBLEM";
}
