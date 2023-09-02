import { Suspense } from "react";
import SearchResults from "./SearchResults";
import getResults from "./request";
import { gameResponse } from "../types";
import styles from "./results.module.css"

export default async function Page({
    searchParams
  }: {
    searchParams: { [key: string]: string | string[] | undefined }
  }) {
    const response: gameResponse[]= await getResults({search: searchParams.search as string}) as gameResponse[];

    return(
        <div className={styles.searchResults}>
            <Suspense>
                <SearchResults {...{results: response}}/>
            </Suspense>
        </div>
    )
}