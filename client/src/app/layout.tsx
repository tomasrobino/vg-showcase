import './globals.css'
import styles from './page.module.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TopButton from './TopButton'
import SearchBar from './SearchBar'
import SideBar from './SideBar'
import { Box } from '@mui/material'
import ThemeRegistry from './ThemeRegistry'

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
            <ThemeRegistry options={{key: "mui"}}>
                <body className={`${inter.className} ${styles.body}`}>
                    <Box className={styles.topBar} sx={{
                        boxShadow: 3,
                        bgcolor: "primary.main"
                    }}>
                        <div className={styles.buttonDiv}>
                            <TopButton {...{text: "Home", url: process.env.URL!, linkTo: ""}}></TopButton>
                            <TopButton {...{text: "Browse", url: process.env.URL!, linkTo: "browse"}}></TopButton>
                            <TopButton {...{text: "About", url: process.env.URL!, linkTo: "about"}}></TopButton>
                        </div>
                        <SearchBar/>
                        <div className={styles.imageDiv}></div>
                    </Box>
                    <div className={styles.sideBarAndMain}>
                        <SideBar/>
                        {children}
                    </div>
                </body>
            </ThemeRegistry>
        </html>
    )
}
