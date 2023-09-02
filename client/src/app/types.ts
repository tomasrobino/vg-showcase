import { AxiosResponse } from "axios";

export type gameResponse = AxiosResponse<any, any> & {
    id:                 number;
    slug:               string;
    name:               string;
    released:           Date;
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
    esrb_rating:        EsrbRating;
    platforms:          Platform[];
    short_screenshots:  Array<{id: number, image: string}>
  }
  
  type EsrbRating = {
    id:   number;
    slug: string;
    name: string;
  }
  
  type Platform = {
    platform:     EsrbRating;
    released_at:  string;
    requirements: {
        minimum:     string;
        recommended: string;
    };
  }