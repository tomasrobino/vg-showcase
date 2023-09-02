"use client"


import { gameResponse } from "../types"


export default function SearchResults(props: {results: gameResponse[]}) {
    //const search = useSearchParams();
    //console.log(useSearchParams().get("search"));
    console.log(props.results[0].name)

    return(
        <p>{props.results[0].name}</p>
    )
}