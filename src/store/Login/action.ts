import type { ActionTree } from "vuex";
import { LoginState } from "./state";
import type { IState } from "..";
import { requestAccessToken } from "./googleAuth";

const TITLE_ID = import.meta.env.AR_PLAY_FAB_TITLE_ID

let PlayFabClientSDK: any
async function checkPlayFabClientSDK() {
    PlayFabClientSDK = (window as any).PlayFabClientSDK
    while (!PlayFabClientSDK) {
        await new Promise(res => setTimeout(res, 100))
        PlayFabClientSDK = (window as any).PlayFabClientSDK
    }
    return PlayFabClientSDK
}

export const actions: ActionTree<LoginState, IState> = {
    async loginWIthGoogle(context) {
        requestAccessToken(async (tokenResponse) => {
            context.commit('updateGoogleToken', tokenResponse)
            const PlayFabClientSDK = await checkPlayFabClientSDK()
            PlayFabClientSDK.LoginWithGoogleAccount({
                TitleId: TITLE_ID,
                CreateAccount: true,
                AccessToken: tokenResponse.access_token
            }, (res: any, err: any) => {
                if (res) {
                    context.commit('updatePlayFab', res.data)
                }
                if (err) console.error(err)
            })
        })
    }
}

