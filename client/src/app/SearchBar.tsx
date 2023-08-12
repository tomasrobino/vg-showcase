"use client"

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import TextField from "@mui/material/TextField/TextField";
import React from "react";

export default function SearchBar() {
    return (
        <TextField className='search-bar'
            label="Search"
            type="text"
            size='small'
            sx={{
                width: 500,
            }}

            InputProps={{
                endAdornment: (
                    <SearchRoundedIcon></SearchRoundedIcon>
                )
            }}
        ></TextField>
    )
}