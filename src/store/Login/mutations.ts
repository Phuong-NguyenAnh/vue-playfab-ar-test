import type { MutationTree } from "vuex";
import type { LoginState } from "./state";
import type { IPlayFab } from "./interfaces/IPlayFab";
import type { IGoogleTokenResponse } from "./interfaces/IGoogle";
export const mutations: MutationTree<LoginState> = {
    updateGoogleToken(state, token: IGoogleTokenResponse) {
        state.googleToken = token;
    },
    updatePlayFab(state, data: IPlayFab) {
        state.playfab = data;
    }
}