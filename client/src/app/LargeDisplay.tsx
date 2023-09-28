"use client"

import { Box, Card, Typography } from "@mui/material"
import styles from "./largeDisplay.module.css"
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { gameResponse } from "./types";
import theme from "./theme";

export default function LargeDisplay(props: {toDisplayInfo: Array<gameResponse>}) {
    let tyrianPurple = theme.palette.primary.main;
    let paynesGray = theme.palette.secondary.main;
    let powderBlue = theme.palette.secondary.light

    //Since current item is the same as selected carousel, use this very state for both
    const [currentItem, setCurrentItem] = useState(0);

    const squareColors: Array<{color: string, setColor: Dispatch<SetStateAction<string>>}> = [];
    {
        let [color, setColor] = useState(tyrianPurple);
        squareColors.push({color: color, setColor: setColor})
    }
    for (let i = 1; i < props.toDisplayInfo.length; i++) {
        let [color, setColor] = useState(paynesGray);
        squareColors.push({color: color, setColor: setColor})
    }

    const items: Array<{main: string, secondaries: Array<string>}> = [];
    for (let i = 0; i < props.toDisplayInfo.length; i++) {
        items.push({
            main: props.toDisplayInfo[i].short_screenshots[0].image,
            secondaries: [
                props.toDisplayInfo[i].short_screenshots[1].image,
                props.toDisplayInfo[i].short_screenshots[2].image,
                props.toDisplayInfo[i].short_screenshots[3].image,
                props.toDisplayInfo[i].short_screenshots[4].image
            ]
        })
    }

    const [shownImg, setShownImg] = useState(items[currentItem].main);

    const boxArray: Array<JSX.Element> = [];
    for (let i = 0; i < props.toDisplayInfo.length; i++) {
        boxArray.push(
            <Box
                className={styles.carouselButton}
                key={"carousel"+i}
                sx={{
                    backgroundColor: squareColors[i].color
                }}
                onClick={(event) => handleCarouselClick(event, i)}
                onMouseEnter={() => handleCarouselHover(squareColors[i].color, i)}
                onMouseLeave={() => handleCarouselHover(squareColors[i].color, i)}
            />
        )
    }

    const secImgsArray: Array<JSX.Element> = [];
    for (let i = 0; i < 4; i++) {
        secImgsArray.push(
            <Image
                key={"secImg"+i}
                src={items[currentItem].secondaries[i]}
                width={150}
                height={100}
                className={styles.secImg}
                alt=""
                onMouseEnter={(event) => handleImageEnter(event)}
                onMouseLeave={(event) => handleImageLeave(event)}
            />
        )
    }

    function handleClickPass(dir: number) {
        if (dir === 0) {
            if (currentItem === 0) {
                //Go to last item
                updateSelectedCarousel(items.length-1)
            } else {
                //Move leftward
                setCurrentItem(currentItem-1);
                updateSelectedCarousel(currentItem-1);
            }
        } else {
            if (currentItem === items.length-1) {
                //Go to first item
                updateSelectedCarousel(0);
            } else {
                //Move rightwards
                updateSelectedCarousel(currentItem+1);
            }
        }
    }
    
    function handleCarouselClick(_event: React.MouseEvent, index: number) {
        updateSelectedCarousel(index);
    }
    
    function handleCarouselHover(color: string, index: number) {
        //Change color
        if (color !== tyrianPurple) {
            if(color === paynesGray) {
                squareColors[index].setColor(powderBlue);
            } else if(color === powderBlue) {
                squareColors[index].setColor(paynesGray);
            }
        }
    }
    
    function handleNaturalPass() {
        setCurrentItem(currentItem+1);
    }

    function handleImageEnter(event: React.MouseEvent) {
        //event.currentTarget.getAttribute("src") = 
        setShownImg(event.currentTarget.getAttribute("src")!);
    }

    function handleImageLeave(event: React.MouseEvent) {
        setShownImg(items[currentItem].main);
    }

    //Handles switching carousel items
    function updateSelectedCarousel(newSel: number) {
        squareColors[currentItem].setColor(paynesGray)
        setCurrentItem(newSel);
        squareColors[newSel].setColor(tyrianPurple);
        setShownImg(items[newSel].main);
    }

    return(
        <div className={styles.display}>
            <Box className={styles.arrow} onClick={() => {handleClickPass(0)}} sx={{
                borderRadius: 2,
                boxShadow: 3
            }}>
                <ArrowBackIosNewRoundedIcon className={styles.icon}/>
            </Box>
            <Card className={styles.displayContent} sx={{
                    width: 900,
                    height: 1,
                    backgroundColor: "secondary.main",
                    borderRadius: 3,
                    boxShadow: 5
            }}>
                <div className={styles.displayMain}>
                    <Image
                        src={shownImg}
                        width={550}
                        height={350}
                        alt=""
                    />
                </div>
                <div className={styles.displaySecondary}>
                    <div className={styles.displayTitle}>
                        <Typography sx={{
                            fontSize: 20,
                            fontWeight: 540
                        }}>{props.toDisplayInfo[currentItem].name}</Typography>
                    </div>
                    <div className={styles.displayOtherImgs}>
                        {secImgsArray}
                    </div>
                    <div className={styles.displayOtherInfo}>

                    </div>
                </div>
            </Card>
            <Box className={styles.arrow} onClick={() => {handleClickPass(1)}} sx={{
                borderRadius: 2,
                boxShadow: 3
            }}>
                <ArrowBackIosNewRoundedIcon className={`${styles.icon} ${styles.rightIcon}`}/>
            </Box>
            <div className={styles.carousel}>
                {boxArray}
            </div>
        </div>
    )
}