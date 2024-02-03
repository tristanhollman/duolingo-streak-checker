import { CourseDto, StreakDataDto, UserDto } from "../responses";

export class User {
  public readonly name: string;
  public readonly username: string;
  public readonly pictureUrl: string;
  public readonly streak: Streak;
  public readonly currentCourse?: CurrentCourse;

  public static fromResponse(response: UserDto): User {
    return new User(response);
  }

  private constructor(user: UserDto) {
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
