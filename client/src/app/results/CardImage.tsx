"use client"

import { CardMedia } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { useState } from "react";
import theme from "../theme";

export default function CardImage(props: {screenshots: Array<{id: number, image: string}>}) {
    const [shownImg, setShownImg] = useState(0);

    function handleClickPass(dir: number, length: number) {
        if (dir === 0) {
            if (shownImg === 0) {
                //Go to last item
                setShownImg(length-1)
            } else {
                //Move leftward
                setShownImg(shownImg-1);
            }
        } else {
            if (shownImg === length-1) {
                //Go to first item
                setShownImg(0);
            } else {
                //Move rightwards
                setShownImg(shownImg+1);
            }
        }
    }

    return(
        <CardMedia
            style={{
                width: "100%",
                height: "200px",
                position: "relative"
            }}
            image={props.screenshots[shownImg].image}
        >
            <div onClick={() => {handleClickPass(0, props.screenshots.length)}} style={{ position: "absolute", top: "100px" }}>
                <ArrowBackIcon style={{ 
                    padding: "2px",
                    backgroundColor: `${theme.palette.secondary.light}`,
                    borderRadius: "100%",
                    marginRight: "5px",
                    marginLeft: "5px",
                    opacity: "0.5" 
                }}/>
            </div>
            <div onClick={() => {handleClickPass(1, props.screenshots.length)}} style={{ position: "absolute", top: "100px", right: "0px" }}>
                <ArrowForwardIcon style={{
                    padding: "2px",
                    backgroundColor: `${theme.palette.secondary.light}`,
                    borderRadius: "100%",
                    marginRight: "5px",
                    marginLeft: "5px",
                    opacity: "0.5" 
                }}/>
            </div>
        </CardMedia>
    )
}