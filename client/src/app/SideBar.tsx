"use client"

import { Button, Typography } from "@mui/material"
import styles from "./sideBar.module.css"
import { useRouter } from "next/navigation"

export default function SideBar() {
    const router = useRouter();

    function handleClick(route: string) {
        router.push(`results?page=1&${route}`);
    }

    function handleGenre(genre: string) {
        router.push(`results?page=1&genres=${genre}&ordering=released`);
    }

    function handlePlatform(platform: string) {
        router.push(`results?page=1&platforms=${platform}&ordering=released`);
    }

    return (
        <div className={styles.sideBar}>
            <Typography className={styles.title} sx={{
                fontSize: 20
            }}>New Releases</Typography>
            <div className={styles.group}>
                <Button className={styles.element} onClick={() => {
                    let today = new Date();
                    let monthAgo = new Date(today.getTime() - 2629800000);
                    router.push(`results?page=1&dates=${monthAgo.getFullYear()}-${("0"+(monthAgo.getMonth()+1)).slice(-2)}-${("0"+monthAgo.getDate()).slice(-2)},${today.getFullYear()}-${("0"+(today.getMonth()+1)).slice(-2)}-${("0"+today.getDate()).slice(-2)}&ordering=released`);
                }}>Last 30 Days</Button>
                <Button className={styles.element} onClick={() => {
                    let today = new Date();
                    let weekAgo = new Date(today.getTime() - 604800000);
                    router.push(`results?page=1&dates=${weekAgo.getFullYear()}-${("0"+(weekAgo.getMonth()+1)).slice(-2)}-${("0"+weekAgo.getDate()).slice(-2)},${today.getFullYear()}-${("0"+(today.getMonth()+1)).slice(-2)}-${("0"+today.getDate()).slice(-2)}&ordering=released`);
                }}>This week</Button>
                <Button className={styles.element} onClick={() => {
                    let today = new Date();
                    let nextWeek = new Date(today.getTime() + 604800000);
                    router.push(`results?page=1&dates=${today.getFullYear()}-${("0"+(today.getMonth()+1)).slice(-2)}-${("0"+today.getDate()).slice(-2)},${nextWeek.getFullYear()}-${("0"+(nextWeek.getMonth()+1)).slice(-2)}-${("0"+nextWeek.getDate()).slice(-2)}&ordering=released`);
                }}>Next week</Button>
            </div>

            <Typography className={styles.title} sx={{
                fontSize: 20
            }}>Top</Typography>
            <div className={styles.group}>
                <Button className={styles.element} onClick={() => {
                    let today = new Date();
                    router.push(`results?page=1&dates=${today.getFullYear()}-01-01,${today.getFullYear()}-${("0"+(today.getMonth()+1)).slice(-2)}-${("0"+today.getDate()).slice(-2)}&ordering=released`);
                }}>Best of the year</Button>
                <Button className={styles.element} onClick={() => {handleClick("top/top250")}}>All time top 250</Button>
            </div>

            <Button className={styles.title} onClick={() => {router.push("genres")}} sx={{
                fontSize: 20,
                paddingLeft: 0
            }}>Genres</Button>
            <div className={styles.group}>
                <Button className={styles.element} onClick={() => {handleGenre("action")}}>Action</Button>
                <Button className={styles.element} onClick={() => {handleGenre("strategy")}}>Strategy</Button>
                <Button className={styles.element} onClick={() => {handleGenre("rpg")}}>RPG</Button>
                <Button className={styles.element} onClick={() => {handleGenre("shooter")}}>Shooter</Button>
                <Button className={styles.element} onClick={() => {handleGenre("adventure")}}>Adventure</Button>
                <Button className={styles.element} onClick={() => {handleGenre("puzzle")}}>Puzzle</Button>
                <Button className={styles.element} onClick={() => {handleGenre("racing")}}>Racing</Button>
                <Button className={styles.element} onClick={() => {handleGenre("sports")}}>Sports</Button>
            </div>

            <Button className={styles.title} onClick={() => {router.push("platforms?page=1")}} sx={{
                fontSize: 20,
                paddingLeft: 0
            }}>Platforms</Button>
            <div className={styles.group}>
                <Button className={styles.element} onClick={() => {handlePlatform("4")}}>PC</Button>
                <Button className={styles.element} onClick={() => {handlePlatform("187")}}>PlayStation 5</Button>
                <Button className={styles.element} onClick={() => {handlePlatform("1")}}>Xbox One</Button>
                <Button className={styles.element} onClick={() => {handlePlatform("7")}}>Nintendo Switch</Button>
                <Button className={styles.element} onClick={() => {handlePlatform("3")}}>iOS</Button>
                <Button className={styles.element} onClick={() => {handlePlatform("21")}}>Android</Button>
            </div>
        </div>
    )
}