"use client"

import { Button } from "@mui/material"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function PagePasser(props: {next: string, prev: string}) {
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

    /*
    if (props.ifSearch === "") {
        var aux: string = "page="
    } else {
        var aux: string = props.ifSearch+"&page="
    }
    */

    function generalPass() {
        let paramsToUse = params.toString();
        let aux = paramsToUse.indexOf("&", 6);
        if (aux === -1) {
            aux = paramsToUse.length+1;
        }
        let substring = paramsToUse.substring(5, aux);
        return {paramsToUse, substring};
    }

    function goBackPage() {
        let gen = generalPass();
        router.push(`${pathname}?${gen.paramsToUse.replace(gen.substring, (parseInt(gen.substring) - 1).toString())}`);
    }

    function passPage() {
        let gen = generalPass();
        router.push(`${pathname}?${gen.paramsToUse.replace(gen.substring, (parseInt(gen.substring) + 1).toString())}`);
    }

    

    return(
        <div style={{ width: "fit-content" }}>
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