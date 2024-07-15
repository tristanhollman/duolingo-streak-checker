import { CourseDto, StreakDataDto, UserDto } from "../responses";

export class User {
  public readonly name: string;
  public readonly username: string;
  public readonly pictureUrl: string;
  public readonly streak: Streak;
  public readonly currentCourse?: CurrentCourse;
  public readonly currentLeaderboardTier?: Tier;

  public static fromResponse(
    response: UserDto,
    leaderboardInfo?: LeaderBoardInfo,
  ): User {
    return new User(response, leaderboardInfo);
  }

  private constructor(user: UserDto, leaderboardInfo?: LeaderBoardInfo) {
    this.name = user.name;
    this.username = user.username;
    this.pictureUrl = user.picture.replace("//", "https://") + "/xxlarge";
    this.streak = Streak.fromResponse(user.streakData);
    const currentCourse = user.courses.find(
      (c) => c.id === user.currentCourseId,
    );
    if (currentCourse) {
      this.currentCourse = CurrentCourse.fromResponse(currentCourse);
    }
    if (leaderboardInfo !== undefined && this.streak.days > 0) {
      this.currentLeaderboardTier = mapLeaderboardTier(leaderboardInfo);
    }
  }
}

class Streak {
  public readonly days: number = 0;
  public readonly startDate?: string;
  public readonly endDate?: string;

  public static fromResponse(response: StreakDataDto): Streak {
    if (!response.currentStreak) {
      return new Streak(0);
    }
    return new Streak(
      response.currentStreak.length,
      response.currentStreak.startDate,
      response.currentStreak.endDate,
    );
  }

  private constructor(days: number, startDate?: string, endDate?: string) {
    this.days = days;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  /**
   * Returns whether the user did a lesson today.
   */
  public didALessonToday(): boolean {
    if (this.endDate) {
      return (
        new Date(this.endDate).getTime() >= new Date().setHours(0, 0, 0, 0)
      );
    }
    return false;
  }
}

class CurrentCourse {
  public readonly title: string;
  public readonly languageCode: string;

  public static fromResponse(response: CourseDto): CurrentCourse {
    return new CurrentCourse(response);
  }

  private constructor(course: CourseDto) {
    this.title = course.title;
    this.languageCode = course.learningLanguage;
  }
}

const mapLeaderboardTier = (leaderBoardInfo: LeaderBoardInfo): Tier => {
  let tier = Math.min(leaderBoardInfo.tier, Tier.DIAMOND);

  if (tier >= Tier.DIAMOND) {
    switch (leaderBoardInfo.numWins ?? 0) {
      case 1:
        tier = Tier.DIAMOND_TOURNAMENT_1;
        break;
      case 2:
        tier = Tier.DIAMOND_TOURNAMENT_2;
        break;
      case 3:
        tier = Tier.DIAMOND_TOURNAMENT_3;
        break;
      case 0:
      default:
        tier = Tier.DIAMOND;
        break;
    }
  }

  return tier;
};

export enum Tier {
  BRONZE = 0,
  SILVER = 1,
  GOLD = 2,
  SAPPHIRE = 3,
  RUBY = 4,
  EMERALD = 5,
  AMETHYST = 6,
  PEARL = 7,
  OBSIDIAN = 8,
  DIAMOND = 9,
  DIAMOND_TOURNAMENT_1 = 10,
  DIAMOND_TOURNAMENT_2 = 11,
  DIAMOND_TOURNAMENT_3 = 12,
}

export type LeaderBoardInfo = {
  tier: number;
  numWins: number;
};
