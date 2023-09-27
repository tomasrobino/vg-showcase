"use client"

import { useRouter } from "next/navigation";
import { platformsResponse } from "../types";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

export default function PlatformsResults(props: {results: platformsResponse[]}) {
    const router = useRouter();

    function handleClick(slug: string) {
        //router.replace("../game/"+slug);
    }

    const cards = [];
    for (let i = 0; i < props.results.length; i++) {
        let imageToDisplay

        if(props.results[i].image_background !== null) {
            imageToDisplay = 
                <CardMedia
                    sx={{
                        height: 100,
                        width: 100
                    }}
                    image={props.results[i].image_background}
                />
        } else {
            imageToDisplay = <Typography>No image</Typography>
        }

        cards.push(
            <Card key={"card"+i}>
                <CardActionArea
                    onClick={() => handleClick(props.results[i].slug)}
                >
                    {imageToDisplay}
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