"use client"

import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useState } from "react";

export default function FilterBar() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [ordering, setOrdering] = useState(searchParams.get("ordering") || "-relevance");
   
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
        setOrdering(e.target.value);
        router.push(pathname + '?' + createQueryString('ordering', e.target.value))
    }
   
    return (
        <div style={{
            marginTop: "10px",
            width: "100%"
        }}>
            <Select
                onChange={handleSelection}
                value={ordering}
            >
                <MenuItem value="-released">Newest</MenuItem>
                <MenuItem value="released">Oldest</MenuItem>
                <MenuItem value="-rating">Rating</MenuItem>
                <MenuItem value="name">Name</MenuItem>
                <MenuItem value="-relevance">Relevance</MenuItem>
            </Select>
        </div>
    )
}