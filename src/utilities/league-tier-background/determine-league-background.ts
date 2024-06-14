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
  useUrl = false,
): string => {
  switch (Tier[currentLeaderboardTier ?? -1]) {
    case "BRONZE":
      return useUrl ? createUrl(leagueBronzeSvg) : leagueBronzeSvg;
    case "SILVER":
      return useUrl ? createUrl(leagueSilverSvg) : leagueSilverSvg;
    case "GOLD":
      return useUrl ? createUrl(leagueGoldSvg) : leagueGoldSvg;
    case "SAPPHIRE":
      return useUrl ? createUrl(leagueSapphireSvg) : leagueSapphireSvg;
    case "RUBY":
      return useUrl ? createUrl(leagueRubySvg) : leagueRubySvg;
    case "EMERALD":
      return useUrl ? createUrl(leagueEmeraldSvg) : leagueEmeraldSvg;
    case "AMETHYST":
      return useUrl ? createUrl(leagueAmethystSvg) : leagueAmethystSvg;
    case "PEARL":
      return useUrl ? createUrl(leaguePearlSvg) : leaguePearlSvg;
    case "OBSIDIAN":
      return useUrl ? createUrl(leagueObsidianSvg) : leagueObsidianSvg;
    case "DIAMOND":
      return useUrl ? createUrl(leagueDiamondSvg) : leagueDiamondSvg;
    default:
      return "";
  }
};

const createUrl = (input: string) =>
  `url(${new URL(input, import.meta.url).href}`;
