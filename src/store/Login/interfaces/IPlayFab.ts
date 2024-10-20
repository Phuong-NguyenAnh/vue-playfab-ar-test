export interface IPlayFab {
    SessionTicket: string
    PlayFabId: string
    NewlyCreated: boolean
    SettingsForUser: SettingsForUser
    LastLoginTime: string
    EntityToken: EntityToken
    TreatmentAssignment: TreatmentAssignment
}

export interface SettingsForUser {
    NeedsAttribution: boolean
    GatherDeviceInfo: boolean
    GatherFocusInfo: boolean
}

export interface EntityToken {
    EntityToken: string
    TokenExpiration: string
    Entity: Entity
}

export interface Entity {
    Id: string
    Type: string
    TypeString: string
}

export interface TreatmentAssignment {
    Variants: any[]
    Variables: any[]
}

export const PlayFabDefaultValue: IPlayFab = {
    SessionTicket: "",
    PlayFabId: "",
    NewlyCreated: false,
    SettingsForUser: {
        NeedsAttribution: false,
        GatherDeviceInfo: true,
        GatherFocusInfo: true
    },
    LastLoginTime: "",
    EntityToken: {
        EntityToken: "",
        TokenExpiration: "",
        Entity: {
            Id: "",
            Type: "title_player_account",
            TypeString: "title_player_account"
        }
    },
    TreatmentAssignment: {
        Variants: [],
        Variables: []
    }
}