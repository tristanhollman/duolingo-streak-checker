export type ConfigDto = {
  userNames: string[];
};

export class Config {
  public readonly userNames: string[] = [];

  public constructor(config: ConfigDto) {
    this.userNames = config.userNames;
  }

  get hasUsers(): number {
    return this.userNames.length;
  }

  public addUserName(userName: string): boolean {
    if (userName && !this.userNames.includes(userName)) {
      this.userNames.push(userName);
      return true;
    }
    return false;
  }

  public removeUserName(userName: string): boolean {
    const index = this.userNames.indexOf(userName);
    if (index > -1) {
      this.userNames.splice(index, 1);
      return true;
    }
    return false;
  }
}
