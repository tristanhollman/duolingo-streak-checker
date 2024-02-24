/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Used to configure the CORS proxy endpoint, this is set in the github action during the build/deployment.
   */
  readonly VITE_CORS_PROXY_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
