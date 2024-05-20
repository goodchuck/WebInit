"use client"

import { chzzkApi } from "@/libs/features/chzzk/chzzkAPI"
import { useEffect } from "react"

export const Livelist = () => {

    useEffect(() => {
        async function fetchAsync() {
            const data = await chzzkApi.getPopularLiveList();
            console.log(data);
        }
        fetchAsync();
    }, [])

    return (
        <>
            <h1>Livelist</h1>
        </>
    )
}