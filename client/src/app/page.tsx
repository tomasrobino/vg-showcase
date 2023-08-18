import LargeDisplay from './LargeDisplay'
import styles from './page.module.css'
import { getNewest, getTopRated } from './requests';


export default async function Home() {
  const topRated = await getTopRated();
  const newest = await getNewest();


  return (
    <div className={styles.page}>
      <p>{}</p>
      <h1>Trending</h1>
      <LargeDisplay {...{toDisplay: topRated?.data.results}}/>
      <h1>New Releases</h1>
      <LargeDisplay {...{toDisplay: newest?.data.results}}/>
    </div>
  )
}