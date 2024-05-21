export type DuolingoLeaderboardResponse = {
  num_wins: number;
  stats: {
    last_win_contest_end: string | null;
    num_wins: number;
    number_one_finishes: number;
    number_two_finishes: number;
    streak_in_tier: number;
    top_three_finishes: number;
  };
  streak_in_tier: number;
  tier: number;
  top_three_finishes: number;
};
