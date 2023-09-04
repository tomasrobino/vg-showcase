"use client"

import { Button } from "@mui/material"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

export default function PagePasser() {
    const [backDisabled, setBackDisabled] = useState(false);

    const router = useRouter()
    const pathname = usePathname();
    const params = useSearchParams();

    function goBackPage() {
        router.push(`${pathname}?search=${params.get("search")}&page=${(parseInt(params.get("page")!)-1).toString()}`)
        if(parseInt(params.get("page")!)-1===1) {
            setBackDisabled(true);
        } else {
            setBackDisabled(false);
        }
    }

    function passPage() {
        router.push(`${pathname}?search=${params.get("search")}&page=${(parseInt(params.get("page")!)+1).toString()}`)
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
            >
                Next Page
            </Button>
        </div>
    )
}