import { Suspense } from "react";
import SearchResults from "./SearchResults";
import getResults from "./request";
import { gameResponse } from "../types";


export default async function Page({
    searchParams
  }: {
    searchParams: { [key: string]: string | string[] | undefined }
  }) {
    const response: gameResponse[]= await getResults({search: searchParams.search as string}) as gameResponse[];

    return(
        <Suspense>
            <SearchResults {...{results: response}}/>
        </Suspense>
    )
}