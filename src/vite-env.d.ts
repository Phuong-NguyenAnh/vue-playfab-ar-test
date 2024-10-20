/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly AR_PLAY_FAB_TITLE_ID: string
    readonly AR_GOOGLE_CLIENT_ID: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}