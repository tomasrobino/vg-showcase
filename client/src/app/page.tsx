import LargeDisplay from './LargeDisplay'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
        <h1>Trending</h1>
        <LargeDisplay/>
        <h1>New Releases</h1>
        <LargeDisplay/>
    </div>
  )
}