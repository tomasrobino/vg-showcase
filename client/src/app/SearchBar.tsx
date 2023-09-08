"use client"

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import TextField from "@mui/material/TextField/TextField";
import { useRouter } from 'next/navigation';
import React, { useState } from "react";


export default function SearchBar() {
    const [searchText, setSearchText] = useState("");
    const router = useRouter();

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setSearchText(event.currentTarget.value);
    }

    function handleEnter(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.key === "Enter" && searchText !== "") {
            router.push(`search?search=${searchText}&page=1`);
        }
    }

    return (
        <TextField className='search-bar'
            label="Search"
            type="text"
            size='small'
            autoComplete='off'
            onChange={handleChange}
            onKeyUp={handleEnter}
            sx={{
                width: 500,
            }}
            InputProps={{
                endAdornment: (
                    <SearchRoundedIcon></SearchRoundedIcon>
                )
            }}
        />
    )
}