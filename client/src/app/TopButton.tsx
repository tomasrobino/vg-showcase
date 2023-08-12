"use client"

import { Button } from "@mui/material";

export default function TopButton(props: {text: string, action: string}) {
    return (
        <Button
            onClick={handleClick}
        >
            {props.text}
        </Button>
    )
}

function handleClick() {
    
}