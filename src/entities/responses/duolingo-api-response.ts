export type DuolingoResponse = {
  users: UserDto[];
};

export type UserDto = {
  joinedClassroomIds: unknown[];
  streak: number;
  motivation: string;
  acquisitionSurveyReason: string;
  shouldForceConnectPhoneNumber: boolean;
  picture: string;
  learningLanguage: string;
  hasFacebookId: boolean;
  shakeToReportEnabled: null | boolean;
  liveOpsFeatures: unknown[];
  canUseModerationTools: boolean;
  id: number;
  betaStatus: string;
  hasGoogleId: boolean;
  privacySettings: string[];
  fromLanguage: string;
  hasRecentActivity15: boolean;
  _achievements: unknown[];
  observedClassroomIds: unknown[];
  username: string;
  bio: string;
  profileCountry: null | string;
  chinaUserModerationRecords: unknown[];
  globalAmbassadorStatus: unknown;
  currentCourseId: string;
  hasPhoneNumber: boolean;
  creationDate: number;
  achievements: unknown[];
  hasPlus: boolean;
  name: string;
  roles: string[];
  classroomLeaderboardsEnabled: boolean;
  emailVerified: boolean;
  courses: CourseDto[];
  totalXp: number;
  streakData: StreakDataDto;
};

export type CourseDto = {
  preload: boolean;
  placementTestAvailable: boolean;
  authorId: string;
  title: string;
  learningLanguage: string;
  xp: number;
  healthEnabled: boolean;
  fromLanguage: string;
  crowns: number;
  id: string;
};

export type StreakDataDto = {
  currentStreak: StreakInfoDto | null;
};

export type StreakInfoDto = {
  startDate: string;
  length: number;
  endDate: string;
};
