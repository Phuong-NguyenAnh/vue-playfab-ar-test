import { GoogleTokenResponseDefaultValue, type IGoogleTokenResponse } from "./interfaces/IGoogle"
import { PlayFabDefaultValue, type IPlayFab } from "./interfaces/IPlayFab"

export class LoginState {
    googleToken: IGoogleTokenResponse = GoogleTokenResponseDefaultValue
    playfab: IPlayFab = PlayFabDefaultValue
}