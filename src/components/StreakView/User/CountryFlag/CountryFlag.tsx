import { useMemo } from "react";
import styles from "./CountryFlag.module.less";
import "/node_modules/flag-icons/css/flag-icons.min.css";

type CountryFlagProps = {
  countryCode?: string;
};
/**
 * Country flags implemented using the flag-icons library.
 */
export const CountryFlag = (props: CountryFlagProps) => {
  const countryCode = useMemo(
    () => manuallyCorrectCountryCode(props.countryCode),
    [props.countryCode],
  );

  if (!countryCode) {
    return null;
  }

  return <div className={`${styles.countryFlag} fi fi-${countryCode}`}></div>;
};

/**
 * The language code returned by the DuoLingo API is not always the same as the one used by the flag-icons library.
 */
const manuallyCorrectCountryCode = (languageCode?: string) => {
  switch (languageCode) {
    case "ja":
      return "jp";
    default:
      return languageCode;
  }
};
