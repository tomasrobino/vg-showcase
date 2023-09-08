"use client"

import { Button } from "@mui/material"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useRef, useState } from "react"

export default function PagePasser(props: {next: string, prev: string}) {
    const router = useRouter()
    const pathname = usePathname();
    const params = useSearchParams();

    const nextRef = useRef(props.next);

    const [backDisabled, setBackDisabled] = useState(() => {
        if (parseInt(params.get("page")!)===1) {
            return true;
        } else return false;
    });

    const [nextDisabled, setNextDisabled] = useState(() => {
        if (nextRef.current===null) {
            return true;
        } else return false;
    })

    function goBackPage() {
        router.push(`${pathname}?search=${params.get("search")}&page=${(parseInt(params.get("page")!)-1).toString()}`)
        if(parseInt(params.get("page")!)-1===1) {
            setBackDisabled(true);
        }
        if(nextDisabled===true) {
            setNextDisabled(false);
        }
    }

    function passPage() {
        router.push(`${pathname}?search=${params.get("search")}&page=${(parseInt(params.get("page")!)+1).toString()}`)
        console.log(nextRef.current);
        if (nextRef.current===null) {
            setNextDisabled(false);
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