import { AxiosResponse } from 'axios';
import LargeDisplay from './LargeDisplay'
import styles from './page.module.css'
import { getNewest, getTopRated } from './requests';

export type toDisplayInfo = AxiosResponse<any, any> & {
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

export default async function Home() {
  const topRated: toDisplayInfo[] = await getTopRated() as toDisplayInfo[];
  //const newest: AxiosResponse<any, any> = await getNewest() as AxiosResponse<any, any>;


  return (
    <div className={styles.page}>
      <h1>Trending</h1>
      <LargeDisplay {...{
        toDisplayInfo: topRated
      }}/>
      <h1>New Releases</h1>
    </div>
  )
}