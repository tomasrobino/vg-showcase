"use client"

import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { gameResponse } from "../types"
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./results.module.css"
import theme from "../theme";
import CardImage from "./CardImage";


export default function Results(props: {results: gameResponse[]}) {
    const router = useRouter();

    function handleClick(slug: string) {
        router.replace("../game/"+slug);
    }

    function handleMouseEnter() {
        //setShownImg(0);
    }

    const cards = [];
    console.log(props.results[0].short_screenshots);
    for (let i = 0; i < props.results.length; i++) {
        let screenshots = props.results[i].short_screenshots.map(e => e.image);

        let platforms: Array<String> = [];
        if (props.results[i].platforms !== null) {
            platforms = props.results[i].platforms.map(e => e.platform.name);
        } else platforms.push("Unknown");
        

        if (platforms.length > 5) {
            while (platforms.length > 5) {
                platforms.pop();
            }
            platforms.push("etc.")
        }

        let released;
        let date;
        if(props.results[i].released !== null) {
            released = props.results[i].released.split("-");
            released[3] = released[0];
            released[0] = released[2];
            released[2] = released[3];
            released.pop();
            date = released.join("/");
        } else {
            date = "Unknown"
        }

        cards.push(
            <Card key={"card"+i} className={styles.card} sx={{
                backgroundColor: "secondary.light"
            }}>
                {props.results[i].short_screenshots.length !== 0 ?
                    <CardImage screenshots={props.results[i].short_screenshots}/>
                    :
                    <div style={{ width: "100%", height: "200px", backgroundColor: "black" }}></div>
                }

                <CardActionArea
                    onClick={() => handleClick(props.results[i].slug)}
                    onMouseEnter={handleMouseEnter}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "start",
                        height: "300px"
                    }}
                >
                    <CardContent style={{
                        width: "100%"
                    }}>
                        <Typography sx={{
                            fontSize: "25px",
                            fontWeight: "bold",
                            minHeight: "90px"
                        }}>
                            {props.results[i].name}
                        </Typography>
                        <div style={{ display: "flex", justifyContent: "space-between", borderBottom: `1px solid ${theme.palette.secondary.dark}` }}>
                            <Typography className={styles.dataText} sx={{
                                color: "secondary.dark"
                            }}>ESRB Rating:</Typography>
                            <Typography className={styles.dataText}>{props.results[i].esrb_rating ? props.results[i].esrb_rating.name : "Unknown"}</Typography>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", borderBottom: `1px solid ${theme.palette.secondary.dark}` }}>
                            <Typography className={styles.dataText} sx={{
                                color: "secondary.dark"
                            }}>Release date:</Typography>
                            <Typography className={styles.dataText}>{date}</Typography>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", borderBottom: `1px solid ${theme.palette.secondary.dark}` }}>
                            <Typography className={styles.dataText} sx={{
                                color: "secondary.dark"
                            }}>Platforms:</Typography>
                            <Typography className={styles.dataText}>{platforms.join(", ")}</Typography>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }

    return(
        cards
    )
}