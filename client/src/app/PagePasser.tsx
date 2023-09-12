"use client"

import { Button } from "@mui/material"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useRef, useState } from "react"

export default function PagePasser(props: {next: string, prev: string, toList: string}) {
    const router = useRouter()
    const pathname = usePathname();
    const params = useSearchParams();

    const nextRef = useRef(props.next);
    const prevRef = useRef(props.prev);

    const [backDisabled, setBackDisabled] = useState(() => {
        if (prevRef.current===null) {
            return true;
        } else return false;
    });

    const [nextDisabled, setNextDisabled] = useState(() => {
        if (nextRef.current===null) {
            return true;
        } else return false;
    })

    function goBackPage() {
        router.push(`${pathname}?${props.toList}&page=${(parseInt(params.get("page")!)-1).toString()}`);
        if(prevRef.current===null) {
            setBackDisabled(true);
        }
        if(nextDisabled===true) {
            setNextDisabled(false);
        }
    }

    function passPage() {
        router.push(`${pathname}?${props.toList}&page=${(parseInt(params.get("page")!)+1).toString()}`);
        if (nextRef.current===null) {
            setNextDisabled(true);
        }
        if(backDisabled===true) {
            setBackDisabled(false);
        }
    }

    return(
        <div>
            <Button
                onClick={goBackPage}
                disabled={backDisabled}
            >
                Previous Page
            </Button>
            <Button
                onClick={passPage}
                disabled={nextDisabled}
            >
                Next Page
            </Button>
        </div>
    )
}