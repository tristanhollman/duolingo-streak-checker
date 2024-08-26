import styles from "./CountryFlag.module.less";
import flags from "../../../../assets/flags.svg";

type CountryFlagProps = {
  countryCode?: string;
};
/**
 * Country flags implemented using the flag-icons library.
 */
export const CountryFlag = (props: CountryFlagProps) => {
  if (!props.countryCode) {
    return null;
  }

  return (
    <svg
      className={styles.countryFlag}
      viewBox={`0 ${flagHeightMap[props.countryCode]} 82 66`}
      style={{ width: "50px" }}
    >
      <image height="3168" href={flags} width="82"></image>
    </svg>
  );
};

const flagHeightMap: { [key: string]: number } = {
  en: 0,
  es: 66,
  fr: 132,
  de: 198,
  ja: 264,
  it: 330,
  ko: 396,
  zh: 462,
  ru: 528,
  pt: 594,
  tr: 660,
  nl: 726,
  sv: 792,
  ga: 858,
  el: 924,
  he: 990,
  pl: 1056,
  no: 1122,
  vi: 1188,
  da: 1254,
  hv: 1320,
  ro: 1386,
  sw: 1452,
  eo: 1518,
  hu: 1584,
  cy: 1650,
  uk: 1716,
  kl: 1782,
  cs: 1848,
  hi: 1914,
  id: 1980,
  ha: 2046,
  nv: 2112,
  ar: 2178,
  ca: 2244,
  th: 2310,
  gn: 2376,
  ambassador: 2442, // Exists but not used
  duolingo: 2508, // Exists but not used
  troubleshooting: 2574, // Exists but not used
  teachers: 2640, // Exists but not used
  la: 2706,
  gd: 2772,
  fi: 2838,
  Yiddish: 2904,
  ht: 2970, // Haitian Creole
  unkown: 3036, // Unknown
  zu: 3102, // Zulu
};
