import { Tier } from "../../entities/models";
import leagueBronzeSvg from "../../assets/league-tier-backgrounds/bronze.svg?url";
import leagueSilverSvg from "../../assets/league-tier-backgrounds/silver.svg?url";
import leagueGoldSvg from "../../assets/league-tier-backgrounds/gold.svg?url";
import leagueSapphireSvg from "../../assets/league-tier-backgrounds/sapphire.svg?url";
import leagueRubySvg from "../../assets/league-tier-backgrounds/ruby.svg?url";
import leagueEmeraldSvg from "../../assets/league-tier-backgrounds/emerald.svg?url";
import leagueAmethystSvg from "../../assets/league-tier-backgrounds/amethyst.svg?url";
import leaguePearlSvg from "../../assets/league-tier-backgrounds/pearl.svg?url";
import leagueObsidianSvg from "../../assets/league-tier-backgrounds/obsidian.svg?url";
import leagueDiamondSvg from "../../assets/league-tier-backgrounds/diamond.svg?url";

export const getLeagueBackgroundImage = (
  currentLeaderboardTier?: number,
): string => {
  switch (Tier[currentLeaderboardTier ?? -1]) {
    case "BRONZE":
      return `url(${leagueBronzeSvg})`;
    case "SILVER":
      return `url(${leagueSilverSvg})`;
    case "GOLD":
      return `url(${leagueGoldSvg})`;
    case "SAPPHIRE":
      return `url(${leagueSapphireSvg})`;
    case "RUBY":
      return `url(${leagueRubySvg})`;
    case "EMERALD":
      return `url(${leagueEmeraldSvg})`;
    case "AMETHYST":
      return `url(${leagueAmethystSvg})`;
    case "PEARL":
      return `url(${leaguePearlSvg})`;
    case "OBSIDIAN":
      return `url(${leagueObsidianSvg})`;
    case "DIAMOND":
      return `url(${leagueDiamondSvg})`;
    default:
      return "";
  }
};
