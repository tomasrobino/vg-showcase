"use client"

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function TopButton(props: {text: string, url: string, linkTo: string}) {
    const router = useRouter();

    return (
        <Button
            onClick={() => {router.replace(props.url+props.linkTo)}}
            sx={{
                color: "text.primary"
            }}
        >
            {props.text}
        </Button>
    )
}