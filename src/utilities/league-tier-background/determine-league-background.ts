import { Tier } from "../../entities/models";
import leagueBronzeSvg from "../../assets/league-tier-backgrounds/bronze.svg";
import leagueSilverSvg from "../../assets/league-tier-backgrounds/silver.svg";
import leagueGoldSvg from "../../assets/league-tier-backgrounds/gold.svg";
import leagueSapphireSvg from "../../assets/league-tier-backgrounds/sapphire.svg";
import leagueRubySvg from "../../assets/league-tier-backgrounds/ruby.svg";
import leagueEmeraldSvg from "../../assets/league-tier-backgrounds/emerald.svg";
import leagueAmethystSvg from "../../assets/league-tier-backgrounds/amethyst.svg";
import leaguePearlSvg from "../../assets/league-tier-backgrounds/pearl.svg";
import leagueObsidianSvg from "../../assets/league-tier-backgrounds/obsidian.svg";
import leagueDiamondSvg from "../../assets/league-tier-backgrounds/diamond.svg";

export const getLeagueBackgroundImage = (
  currentLeaderboardTier?: number,
): string => {
  const result = getLeagueBackgroundImage_INNER(currentLeaderboardTier);
  console.log(result);
  return result;
};

const getLeagueBackgroundImage_INNER = (
  currentLeaderboardTier?: number,
): string => {
  console.log(currentLeaderboardTier, Tier[currentLeaderboardTier ?? -1]);
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
