"use client"
import { useRedirect } from "@/components/ui/redirect"
import { PressButton } from "@/components/ui/Button"

export default function adminUser(){

    const {goBack} = useRedirect();

    return(
        <>
            <div>
                <h1>Admin users</h1>

                {/* <Link href={"/"}>
                    <button>Go Back</button>
                </Link> */}
            <PressButton onClick={goBack}>GoBack</PressButton>

            </div>
        </>
    )
}