"use client"
import Image from "next/image";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export async function getChampionData(championName: any)
{
    const data = await fetch(`https://ddragon.leagueoflegends.com/cdn/14.3.1/data/pt_BR/champion/${championName}.json`);
    return data.json();
}

export default function CampeaoInfo()
{
    const params = useParams();
    const championName = params.nomeCampeoes;

    const [ championData, setChampionData ] = useState<Object>();

    useEffect(() => 
    {
        getChampionData(championName).then((response) => {
            setChampionData(response.data);
        });
    }, [championName])

    console.log(championData)

    return(
        <main>
            <div className="item" style={{ position: 'relative', height: '440px' }}>
              <Image 
              src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + championName + "_0.jpg"} 
              quality={100}
              width={1215}
              height={717}
              alt={" Image"} 
              />
            </div>
            <div>Campeão {championName}</div>
        </main>
    )
}