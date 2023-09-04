import SearchResults from "./SearchResults";
import getResults from "./request";
import { gameResponse } from "../types";
import styles from "./results.module.css"
import PagePasser from "./PagePasser";

export default async function Page({
    searchParams
  }: {
    searchParams: { [key: string]: string | string[] | undefined }
  }) {
    const response: gameResponse[] = await getResults({search: searchParams.search as string, page: parseInt(searchParams.page as string)}) as gameResponse[];

    return(
        <div className={styles.searchResults}>
            <SearchResults {...{results: response}}/>
            <PagePasser/>
        </div>
    )
}