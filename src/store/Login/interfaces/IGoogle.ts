export interface IGoogleTokenResponse {
    access_token: string
    token_type: string
    expires_in: number
    scope: string
    authuser: string
    prompt: string
}

export const GoogleTokenResponseDefaultValue: IGoogleTokenResponse = {
    "access_token": "",
    "token_type": "Bearer",
    "expires_in": 0,
    "scope": "email profile https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/userinfo.email",
    "authuser": "0",
    "prompt": "none"
}