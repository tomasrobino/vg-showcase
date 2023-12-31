import PagePasser from "./PagePasser";
import Results from "./Results";
import styles from "./results.module.css"

export default function ResultsAndPasser(props: {response: any}) {
    return(
        <div className={styles.results}>
                <Results {...{results: props.response.results}}/>
                <PagePasser {...{next: props.response.next, prev: props.response.previous}}/>
        </div>
    )
}