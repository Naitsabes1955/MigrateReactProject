"use client"
import { getCharacters } from "@/services/dashboard";
import type { characters } from "@/types/characters"
import { useEffect, useState } from "react"
import '@/styles/components/card.css'
import Link from "next/link";

export default function Characters()  {
    const [character, setCharacter] = useState<characters>();

    const fetchData = async () => {
        const characterResult = await getCharacters();
        setCharacter(characterResult);
    };

    useEffect(() => {
        fetchData();

    },[]);
    return(
        <>
            <div className="task-card">
                
                <h1>Trying Set Characters</h1>
                
                <div>
                    <p>
                        The Character's Name is: {character?.nameCharacter}
                    </p>
                    <p>
                        Age:{character?.ageCharacter}
                    </p>
                    <p>
                        Rank: {character?.rankCharacter}
                    </p>
                    
                </div>
                
            </div>
            <Link href={"/"}>
                <button>Go Back</button>
            </Link>
        </>
    )
    
}