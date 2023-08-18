import LargeDisplay from './LargeDisplay'
import styles from './page.module.css'
import { getNewest, getTopRated } from './requests';


export default function Home() {
  return (
    <div className={styles.page}>
      <p></p>
      <h1>Trending</h1>
      <LargeDisplay/>
      <h1>New Releases</h1>
      <LargeDisplay/>
    </div>
  )
}