"use client"

import { useRouter } from "next/navigation";

export function useRedirect (){

    const router = useRouter();

    return {
        goBack: () =>{
            router.back()
        },
        goToAdmin: () => {
            router.push("/admin/user")
        },
        goToApiInfo: () => {
            router.push("/dashboard")
        }
    }
}