"use-client"

import { Button, Typography } from "@mui/material"
import styles from "./sideBar.module.css"

export default function SideBar() {
    return (
        <div className={styles.sideBar}>
            <Typography className={styles.title}>New Releases</Typography>
            <div className={styles.group}>
                <Button className={styles.element}>Last 30 Days</Button>
                <Button className={styles.element}>This week</Button>
                <Button className={styles.element}>Next week</Button>
                <Button className={styles.element}>Release calendar</Button>
            </div>

            <Typography className={styles.title}>Top</Typography>
            <div className={styles.group}>
                <Button className={styles.element}>Best of the year</Button>
                <Button className={styles.element}>All time top 250</Button>
            </div>

            <Button className={styles.title}>Genre</Button>
            <div className={styles.group}>
                <Button className={styles.element}>Action</Button>
                <Button className={styles.element}>Strategy</Button>
                <Button className={styles.element}>RPG</Button>
                <Button className={styles.element}>Shooter</Button>
                <Button className={styles.element}>Adventure</Button>
                <Button className={styles.element}>Puzzle</Button>
                <Button className={styles.element}>Racing</Button>
                <Button className={styles.element}>Sports</Button>
            </div>

            <Button className={styles.title}>Platforms</Button>
            <div className={styles.group}>
                <Button className={styles.element}>PC</Button>
                <Button className={styles.element}>PlayStation 4</Button>
                <Button className={styles.element}>Xbox One</Button>
                <Button className={styles.element}>Nintendo Switch</Button>
                <Button className={styles.element}>iOS</Button>
                <Button className={styles.element}>Android</Button>
            </div>
        </div>
    )
}