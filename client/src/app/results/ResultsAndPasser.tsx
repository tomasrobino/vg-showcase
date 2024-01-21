import { Suspense } from "react";
import FilterBar from "./FilterBar";
import PagePasser from "./PagePasser";
import Results from "./Results";
import styles from "./results.module.css"

export default function ResultsAndPasser(props: {response: any}) {
    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <Suspense>
                <FilterBar/>
            </Suspense>
            <div className={styles.results}>
                <Results {...{results: props.response.results}}/>
            </div>
            <PagePasser {...{next: props.response.next, prev: props.response.previous}}/>
        </div>
    )
}