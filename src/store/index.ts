import { createStore } from "vuex";
import type { LoginState } from "./Login/state";
import { LoginModule } from "./Login";

export interface IState {
    Login: LoginState
}

const store = createStore<IState>({
    modules: {
        Login: LoginModule
    }
})

export default store;