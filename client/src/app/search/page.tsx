import SearchResults from "./SearchResults";
import getResults from "./request";
import { gameResponse } from "../types";
import styles from "./results.module.css"

export default async function Page({
    searchParams
  }: {
    searchParams: { [key: string]: string | string[] | undefined }
  }) {
    const response: gameResponse[] = await getResults({search: searchParams.search as string, page: 1}) as gameResponse[];

    return(
        <div className={styles.searchResults}>
            <SearchResults {...{results: response}}/>
        </div>
    )
}