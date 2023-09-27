import requestToExhibit from "../exhibitorRequest";
import PlatformsResults from "./PlatformsResults";
import PagePasser from "../results/PagePasser";

import styles from "./results.module.css"

export default async function Page({
    searchParams
  }: {
    searchParams: { [key: string]: string | string[] | undefined }
  }) {
    const response = await requestToExhibit("platforms", parseInt(searchParams.page as string), "-released");

    return(
        <div className={styles.results}>
            <PlatformsResults {...{results: response.results}}/>
            <PagePasser {...{next: response.next, prev: response.previous}}/>
        </div>
    )
}