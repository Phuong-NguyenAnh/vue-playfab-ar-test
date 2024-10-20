import type { Module } from "vuex";
import type { IState } from "..";
import { LoginState } from "./state";
import { actions } from "./action";
import { mutations } from "./mutations";

export const LoginModule: Module<LoginState, IState> = {
    namespaced: true,
    state: new LoginState(),
    mutations,
    actions,
    // getters
}