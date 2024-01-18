import { AxiosResponse } from "axios";

type MetacriticPlatformsEntity = {
    metascore: number;
    url: string;
}

type PlatformOrEsrbRating = {
    id: number;
    slug: string;
    name: string;
}


type Platform = {
    platform:     PlatformOrEsrbRating;
    released_at:  string;
    requirements: {
        minimum:     string;
        recommended: string;
    };
}

export type gameResponse = AxiosResponse<any, any> & {
    id:                 number;
    slug:               string;
    name:               string;
    released:           string;
    tba:                boolean;
    background_image:   string;
    rating:             number;
    rating_top:         number;
    ratings:            {};
    ratings_count:      number;
    reviews_text_count: string;
    added:              number;
    added_by_status:    {};
    metacritic:         number;
    playtime:           number;
    suggestions_count:  number;
    updated:            Date;
    esrb_rating:        PlatformOrEsrbRating;
    platforms:          Platform[];
    short_screenshots:  Array<{id: number, image: string}>
}

export type gameDetails = {
    id: number;
    slug: string;
    name: string;
    name_original: string;
    description: string;
    metacritic: number;
    metacritic_platforms?: (MetacriticPlatformsEntity)[] | null;
    released: string;
    tba: boolean;
    updated: string;
    background_image: string;
    background_image_additional: string;
    website: string;
    rating: number;
    rating_top: number;
    ratings: ({id: number, title: string, count: number, percent: number})[];
    reactions: {};
    added: number;
    added_by_status: {};
    playtime: number;
    screenshots_count: number;
    movies_count: number;
    creators_count: number;
    achievements_count: number;
    parent_achievements_count: string;
    reddit_url: string;
    reddit_name: string;
    reddit_description: string;
    reddit_logo: string;
    reddit_count: number;
    twitch_count: string;
    youtube_count: string;
    reviews_text_count: string;
    ratings_count: number;
    suggestions_count: number;
    alternative_names?: (string)[] | null;
    metacritic_url: string;
    parents_count: number;
    additions_count: number;
    game_series_count: number;
    esrb_rating: PlatformOrEsrbRating;
    platforms?: (Platform)[] | null;
}

export type platformsResponse = {
    id:               number;
    name:             string;
    slug:             string;
    games_count:      number;
    image_background: string;
    image:            string;
    year_start:       number;
    year_end:         number;
}
