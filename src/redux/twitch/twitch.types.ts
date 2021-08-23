export interface TwitchStateType {
    user?: TwitchUserInfo | undefined,
    streamInfo?: TwitchStreamInfo | undefined,
}


export interface TwitchUserInfo {
    display_name: string,
    id: string,
    login: string,
    profile_image_url: string,
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
