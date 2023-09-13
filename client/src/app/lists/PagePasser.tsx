"use client"

import { Button } from "@mui/material"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function PagePasser(props: {next: string, prev: string, ifSearch: string}) {
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

    useEffect(() => {
        if (props.next===null) {
            setNextDisabled(true);
        } else {
            setNextDisabled(false);
        }
        if (props.prev===null) {
            setBackDisabled(true);
        } else {
            setBackDisabled(false);
        }
    }, [props.prev, props.next]);

    if (props.ifSearch === "") {
        var aux: string = "page="
    } else {
        var aux: string = props.ifSearch+"&page="
    }

    function goBackPage() {
        router.push(`${pathname}?${aux}${(parseInt(params.get("page")!)-1).toString()}`);
    }

    function passPage() {
        router.push(`${pathname}?${aux}${(parseInt(params.get("page")!)+1).toString()}`);
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