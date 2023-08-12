import styles from './page.module.css'
import TopButton from '../TopButton'

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.topBar}>
        <TopButton {...{text: "Home"}}></TopButton>
        <TopButton {...{text: "About"}}></TopButton>
      </div>
    </main>
  )
}