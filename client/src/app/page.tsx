import { AxiosResponse } from 'axios';
import LargeDisplay from './LargeDisplay'
import styles from './page.module.css'
import { getNewest, getTopRated } from './requests';


export default async function Home() {
  const topRated: AxiosResponse<any, any>[] = await getTopRated() as AxiosResponse<any, any>[];
  const newest: AxiosResponse<any, any> = await getNewest() as AxiosResponse<any, any>;

  return (
    <div className={styles.page}>
      <p>{}</p>
      <h1>Trending</h1>
      <LargeDisplay {...{toDisplay: topRated.map((value) => {
        return value.data.results;
      })}}/>
      <h1>New Releases</h1>
    </div>
  )
}