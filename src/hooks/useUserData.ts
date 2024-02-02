import { useQuery } from "@tanstack/react-query";
import { fetchWithProxy } from "../utilities";

/**
 * Custom hook to fetch the user's information from Duolingo.
 * @param userName - The user's Duolingo username.
 * @returns An object with user information.
 */
export function useUserData(userName: string) {
  const { isPending, isError, data } = useQuery({
    queryKey: ["streakInfo", userName],
    queryFn: async () => {
      const response = await fetchWithProxy(
        `https://www.duolingo.com/2017-06-30/users?username=${userName}`,
      );
      const result = (await response.json()) as DuolingoResponse;
      return result;
    },
    refetchInterval: 1000 * 60 * 5, // 5 minutes
  });

  if (isError) console.error("Error fetching streak info", data);

  const isValid = !isError && data?.users?.length === 1;
  const user = isValid ? data.users[0] : null;

  return { isPending, isValid, user };
}

type DuolingoResponse = {
  users: User[];
};

export type User = {
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
  courses: Course[];
  totalXp: number;
  streakData: StreakData;
};

type Course = {
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

export type StreakData = {
  currentStreak: StreakInfo | null;
};

type StreakInfo = {
  startDate: string;
  length: number;
  endDate: string;
};
