export interface TwitchStateType {
    user?: TwitchUserInfo,
    streamInfo?: TwitchStreamInfo,
    cheermotes?: TwitchCheermotes[],
}


export interface TwitchUserInfo {
    display_name: string,
    id: string,
    login: string,
    profile_image_url: string,
    is_moderator?: boolean,
}

export interface TwitchStreamInfo {
    id: string,
    user_id: string,
    user_login: string,
    user_name: string,
    game_id: string,
    type: string,
    title: string,
    viewer_count: string,
    started_at: string,
    language: string,
    thumbnail_url: string,
    tag_ids: string[],
    is_mature: boolean,
}


export interface TwitchCheermotes {
    prefix: string,
    type?: string,
    tiers: {
        color: string,
        min_bits: number,
        images: {
            dark: {
                animated: {
                    1: string,
                    1.5: string,
                    2: string,
                    3: string,
                    4: string,
                }
            },
            light: {
                animated: {
                    1: string,
                    1.5: string,
                    2: string,
                    3: string,
                    4: string,
                }
            }
        }
    }[],
}
