"use client"

import { useSearchParams } from "next/navigation"

export default function SearchResults() {
    const search = useSearchParams();
    console.log(search.get("search"));

    return(
        <p>dsflisdbfudslui</p>
    )
}