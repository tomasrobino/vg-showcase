import { AxiosResponse } from 'axios';
import LargeDisplay from './LargeDisplay'
import styles from './page.module.css'
import { getNewest, getTopRated } from './requests';


export default async function Home() {
  const topRated: AxiosResponse<any, any>[] = await getTopRated() as AxiosResponse<any, any>[];
  const newest: AxiosResponse<any, any> = await getNewest() as AxiosResponse<any, any>;
  console.log(await topRated[0].data.results[0]);

  return (
    <div className={styles.page}>
      <p>{}</p>
      <h1>Trending</h1>
      <LargeDisplay {...{toDisplay: topRated[0].data.results}}/>
      <h1>New Releases</h1>
      <LargeDisplay {...{toDisplay: newest?.data.results}}/>
    </div>
  )
}