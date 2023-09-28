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
            router.push(`results?page=1&search=${searchText}`);
        }
    }

    return (
        <TextField
            label="Search"
            type="text"
            size='small'
            autoComplete='off'
            sx={{
                width: 500
            }}
            onChange={handleChange}
            onKeyUp={handleEnter}
            InputProps={{
                endAdornment: (
                    <SearchRoundedIcon></SearchRoundedIcon>
                )
            }}
        />
    )
}