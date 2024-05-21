/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Used to configure the CORS proxy endpoint, this is set in the github action during the build/deployment.
   */
  readonly VITE_CORS_PROXY_ENDPOINT: string;
  /**
   * Used to configure the account id for the new relic browser agent, this is set in the github action during the build/deployment.
   */
  readonly VITE_NEW_RELIC_ACCOUNT_ID: string;
  /**
   * Used to configure the application id for the new relic browser agent, this is set in the github action during the build/deployment.
   */
  readonly VITE_NEW_RELIC_APP_ID: string;
  /**
   * Used to configure the license key for the new relic browser agent, this is set in the github action during the build/deployment.
   */
  readonly VITE_NEW_RELIC_LICENSE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
