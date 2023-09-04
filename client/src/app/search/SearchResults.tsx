"use client"


import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { gameResponse } from "../types"
import { useRouter } from "next/navigation";
import React from "react";


export default function SearchResults(props: {results: gameResponse[]}) {
    const router = useRouter();

    function handleClick(slug: string) {
        router.push("game/"+slug);
    }

    const cards = [];
    for (let i = 0; i < props.results.length; i++) {
        cards.push(
            <Card key={"card"+i}>
                <CardActionArea
                    onClick={() => handleClick(props.results[i].slug)}
                >
                    <CardMedia
                        sx={{
                            height: 100,
                            width: 100
                        }}
                        image={props.results[i].background_image}
                    />
                    <CardContent>
                        <Typography>
                            {props.results[i].name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }

    return(
        cards
    )
}