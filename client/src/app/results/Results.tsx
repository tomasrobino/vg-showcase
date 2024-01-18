"use client"

import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { gameResponse } from "../types"
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./results.module.css"
import theme from "../theme";


export default function Results(props: {results: gameResponse[]}) {
    const router = useRouter();

    function handleClick(slug: string) {

        router.replace("../game/"+slug);
    }

    const cards = [];
    //console.log(props.results[0]);
    for (let i = 0; i < props.results.length; i++) {
        let imageToDisplay

        if(props.results[i].background_image !== null) {
            imageToDisplay = 
                <CardMedia

                    style={{
                        width: "100%",
                        height: "200px"
                    }}
                    image={props.results[i].background_image}
                />
        } else {
            imageToDisplay = <Typography>No image</Typography>
        }

        let platforms: Array<String> = props.results[i].platforms.map(e => e.platform.name);
        while (platforms.length > 5) {
            platforms.pop();
        }
        platforms.push("etc.")

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
                <CardActionArea
                    onClick={() => handleClick(props.results[i].slug)}
                >
                    {imageToDisplay}
                    <CardContent>
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