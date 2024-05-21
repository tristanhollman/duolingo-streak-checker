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
  switch (Tier[currentLeaderboardTier ?? -1]) {
    case "BRONZE":
      return `url(${new URL(leagueBronzeSvg, import.meta.url).href}`;
    case "SILVER":
      return `url(${new URL(leagueSilverSvg, import.meta.url).href}`;
    case "GOLD":
      return `url(${new URL(leagueGoldSvg, import.meta.url).href}`;
    case "SAPPHIRE":
      return `url(${new URL(leagueSapphireSvg, import.meta.url).href}`;
    case "RUBY":
      return `url(${new URL(leagueRubySvg, import.meta.url).href}`;
    case "EMERALD":
      return `url(${new URL(leagueEmeraldSvg, import.meta.url).href}`;
    case "AMETHYST":
      return `url(${new URL(leagueAmethystSvg, import.meta.url).href}`;
    case "PEARL":
      return `url(${new URL(leaguePearlSvg, import.meta.url).href}`;
    case "OBSIDIAN":
      return `url(${new URL(leagueObsidianSvg, import.meta.url).href}`;
    case "DIAMOND":
      return `url(${new URL(leagueDiamondSvg, import.meta.url).href}`;
    default:
      return "";
  }
};
