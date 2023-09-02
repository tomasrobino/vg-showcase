import './globals.css'
import styles from './page.module.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TopButton from './TopButton'
import SearchBar from './SearchBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.body}`}>
        <div className={styles.topBar}>
          <div className={styles.buttonDiv}>
            <TopButton {...{text: "Home", url: process.env.URL!, linkTo: ""}}></TopButton>
            <TopButton {...{text: "Browse", url: process.env.URL!, linkTo: "browse"}}></TopButton>
            <TopButton {...{text: "About", url: process.env.URL!, linkTo: "about"}}></TopButton>
          </div>
          <SearchBar/>
          <div className={styles.imageDiv}></div>
        </div>
        {children}
      </body>
    </html>
  )
}
