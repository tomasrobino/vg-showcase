"use client"

import { Button, Typography } from "@mui/material"
import styles from "./sideBar.module.css"
import { useRouter } from "next/navigation"

export default function SideBar() {
    const router = useRouter();

    function handleClick(route: string) {
        router.push(`results?page=1&${route}`);
    }

    return (
        <div className={styles.sideBar}>
            <Typography className={styles.title}>New Releases</Typography>
            <div className={styles.group}>
                <Button className={styles.element} onClick={() => {
                    const today = new Date();
                    const monthAgo = new Date(today.getTime() - 2629800000);
                    handleClick(`dates=${monthAgo.getFullYear()}-${("0"+monthAgo.getMonth()).slice(-2)}-${("0"+monthAgo.getDate()).slice(-2)},${today.getFullYear()}-${("0"+today.getMonth()).slice(-2)}-${("0"+today.getDate()).slice(-2)}&ordering=released`);
                }}>Last 30 Days</Button>
                <Button className={styles.element} onClick={() => {handleClick("new/past")}}>This week</Button>
                <Button className={styles.element} onClick={() => {handleClick("new/next")}}>Next week</Button>
                <Button className={styles.element} onClick={() => {handleClick("new/calendar")}}>Release calendar</Button>
            </div>

            <Typography className={styles.title}>Top</Typography>
            <div className={styles.group}>
                <Button className={styles.element} onClick={() => {handleClick("top/year")}}>Best of the year</Button>
                <Button className={styles.element} onClick={() => {handleClick("top/top250")}}>All time top 250</Button>
            </div>

            <Button className={styles.title} onClick={() => {handleClick("genre")}}>Genres</Button>
            <div className={styles.group}>
                <Button className={styles.element} onClick={() => {handleClick("genre/action")}}>Action</Button>
                <Button className={styles.element} onClick={() => {handleClick("genre/strategy")}}>Strategy</Button>
                <Button className={styles.element} onClick={() => {handleClick("genre/rpg")}}>RPG</Button>
                <Button className={styles.element} onClick={() => {handleClick("genre/shooter")}}>Shooter</Button>
                <Button className={styles.element} onClick={() => {handleClick("genre/adventure")}}>Adventure</Button>
                <Button className={styles.element} onClick={() => {handleClick("genre/puzzle")}}>Puzzle</Button>
                <Button className={styles.element} onClick={() => {handleClick("genre/racing")}}>Racing</Button>
                <Button className={styles.element} onClick={() => {handleClick("genre/sports")}}>Sports</Button>
            </div>

            <Button className={styles.title}>Platforms</Button>
            <div className={styles.group}>
                <Button className={styles.element} onClick={() => {handleClick("platform/pc")}}>PC</Button>
                <Button className={styles.element} onClick={() => {handleClick("platform/playstation4")}}>PlayStation 4</Button>
                <Button className={styles.element} onClick={() => {handleClick("platform/xboxone")}}>Xbox One</Button>
                <Button className={styles.element} onClick={() => {handleClick("platform/switch")}}>Nintendo Switch</Button>
                <Button className={styles.element} onClick={() => {handleClick("platform/ios")}}>iOS</Button>
                <Button className={styles.element} onClick={() => {handleClick("platform/android")}}>Android</Button>
            </div>
        </div>
    )
}