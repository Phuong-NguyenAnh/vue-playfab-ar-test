import type { IGoogleTokenResponse } from "@/store/Login/interfaces/IGoogle";

let google: any = undefined;
let googleClient: any = undefined;
// let access_token: string = '';

const client_id = import.meta.env.AR_GOOGLE_CLIENT_ID;
async function checkGoogleLib() {
    google = (window as any).google
    while (!google) {
        await new Promise(res => setTimeout(res, 100))
        google = (window as any).google
    }
    return google
}

async function initClient() {
    const google = await checkGoogleLib();
    if (!googleClient) {
        googleClient = google.accounts.oauth2.initTokenClient({
            client_id,
            scope: "https://www.googleapis.com/auth/userinfo.profile",
            callback: (tokenResponse: IGoogleTokenResponse) => {
                // access_token = tokenResponse.access_token
                Callback?.(tokenResponse)
            }
        });
    }
    return googleClient;
}
type TCallback = (at: IGoogleTokenResponse) => void
let Callback: TCallback;
export async function requestAccessToken(callback: TCallback) {
    Callback = callback;
    const googleClient = await initClient();
    googleClient.requestAccessToken();
}