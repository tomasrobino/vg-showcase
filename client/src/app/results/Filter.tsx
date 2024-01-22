"use client"

import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

export default function Filter(props: {items: Array<Array<string>>, concept: string, default: string}) {
    

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [filterState, setFilterState] = useState(searchParams.get(props.concept) || props.default);
   
    // Get a new searchParams string by merging the current
    // searchParams with a provided key/value pair
    const createQueryString = useCallback(
      (name: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(name, value);
   
        return params.toString();
      },
      [searchParams]
    );

    function handleSelection(e: SelectChangeEvent<string>) {
        setFilterState(e.target.value);
        router.push(pathname + '?' + createQueryString(props.concept, e.target.value))
    }

    let items: Array<React.JSX.Element> = [];

    props.items.forEach((e, i) => {
        items.push( <MenuItem value={e[0]} key={i}>{e[1]}</MenuItem> );
    })

    return(
        <Select
            onChange={handleSelection}
            value={filterState}
        >
            {items}
        </Select>
    )
}