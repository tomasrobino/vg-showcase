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

    function placeP(text: string): string {
        let withinP: boolean = false;
        let res: string = text;
        let closingTag: boolean = false;
        if (res[0] !== "<") {
            res = "<p>" + res;
            withinP = true;
        }
        let i = 1;
        while (i < res.length) {
            if (withinP && res[i] === "<" && res[i+3] !== "/") {
                let part1: string = res.slice(0, i) + "</p>";
                res = part1 + res.slice(i);
                i+=4;
                withinP = false;
            } else if (closingTag) {
                if (withinP === false && res[i] === ">" && i < res.length-1) {
                    if (res[i+1] !== "<" && (res[i+1] !== " " || res[i+2] !== "<")) {
                        let part1: string = res.slice(0, i+1) + "<p>";
                        res = part1 + res.slice(i+1);
                        i+=3;
                        withinP = true;
                        closingTag = false;
                    }
                }
            } else if (res[i] === "<" && res[i+1] === "/") {
                closingTag = true;
            }
            i++;
        }
        return res;
    }

    let description: Array<JSX.Element> = parse(placeP(response.description)) as Array<JSX.Element>;
    description = description.map((element, i) => {
        let CustomTag = `${element.type}` as keyof JSX.IntrinsicElements;
        return (
            <CustomTag key={i}>{element.props.children}</CustomTag>
        )
    });

    // <PieChart {...{data: [response.ratings[0].count, response.ratings[1].count, response.ratings[2].count, response.ratings[3].count]}}/>

    return(
        <div>
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
            {description}
        </div>
    )
}   