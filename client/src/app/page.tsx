import LargeDisplay from './LargeDisplay'
import styles from './page.module.css'
import { getTopRated } from './displayRequests';
import { gameResponse } from './types';



export default async function Home() {
  const topRated: gameResponse[] = await getTopRated() as gameResponse[];
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