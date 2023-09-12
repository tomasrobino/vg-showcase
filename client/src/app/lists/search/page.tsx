import SearchResults from "./SearchResults";
import getResults from "./request";
import styles from "./results.module.css"
import PagePasser from "../../PagePasser";

export default async function Page({
    searchParams
  }: {
    searchParams: { [key: string]: string | string[] | undefined }
  }) {
    const response = await getResults({search: searchParams.search as string, page: parseInt(searchParams.page as string)});

    return(
        <div className={styles.searchResults}>
            <SearchResults {...{results: response.results}}/>
            <PagePasser {...{next: response.next, prev: response.previous, toList: "search="+searchParams.search }} />
        </div>
    )
}