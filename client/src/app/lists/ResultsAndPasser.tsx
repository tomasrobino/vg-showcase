import { AxiosResponse } from "axios";
import { gameResponse } from "../types";
import PagePasser from "./PagePasser";
import Results from "./Results";
import styles from "../results.module.css"

export default function ResultsAndPasser(props: {response: any, ifSearch: string}) {
    return(
        <div className={styles.results}>
                <Results {...{results: props.response.results}}/>
                <PagePasser {...{next: props.response.next, prev: props.response.previous, ifSearch: props.ifSearch }}/>
        </div>
    )
}