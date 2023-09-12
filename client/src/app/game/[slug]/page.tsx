import { gameDetails } from "@/app/types";
import getDetails from "./request"
import parse from "html-react-parser"
import { Typography } from "@mui/material";
import styles from "./gamePage.module.css"

export default async function Page({
    params
}: {
    params: { slug: string}
}) {
    const response: gameDetails = await getDetails({game: params.slug});
    console.log(response.ratings);

    // <PieChart {...{data: [response.ratings[0].count, response.ratings[1].count, response.ratings[2].count, response.ratings[3].count]}}/>

    return(
        <div id="aaa">
            <Typography>{response.released}</Typography>
            <Typography
                className={styles.name}
                variant="h1"
            >{response.name}</Typography>

            <Typography>{response.rating}</Typography>
            <div>
            
            </div>
            <Typography
                className={styles.subtitle}
                variant="h5"
            >About</Typography>
            {parse(response.description)}
            <div>

            </div>
        </div>
    )
}   