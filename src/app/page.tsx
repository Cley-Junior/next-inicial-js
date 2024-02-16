'use client'

import { useEffect, useState } from "react";


export async function getChampionsData()
{
  const data = await fetch("https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion.json");
  return data.json();
}

export async function getChampionsFreeData()
{
  const data = await fetch("https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-9c60ed82-3157-4bc2-8516-b2b3c78c0fc0");
  return data.json();
}

export async function getChampionsSplashArt()
{
  const image = await fetch("https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Akshan_0.jpg");
  return image;
}

export function getChampionNameById(objeto: any, ids: number[])
{
  let campeoes = ids.map((id) => {
    for (const nomes in objeto)
    {
      if(objeto[nomes].key == id)
      {
        return nomes;
      }
    }
  });
  return campeoes??[]; 
}

export default function Home()
{
  const [ championsFreeIdData, setChampionsFreeIdData ] = useState<number[]>([]);
  const [ championsFreeNameData, setChampionsFreeNameData ] = useState<(string | undefined)[]>([]);
  const [ championsData, setChampionsData ] = useState<Object>();

  useEffect(() => 
  {
    getChampionsFreeData().then((response) => {
      setChampionsFreeIdData(response.freeChampionIds);
    });

    getChampionsData().then((response) => {
      setChampionsData(response.data);
    });
  }, [])

  useEffect(() => 
  {
    setChampionsFreeNameData(getChampionNameById(championsData, championsFreeIdData))
  }, [championsData, championsFreeIdData])

  console.dir(championsData,{depth:null});

  return (
    <div>
      <h1>Champions</h1>
      <div>
        {
          championsFreeNameData?.map((id) => <p key={id}>{id}</p>)
        }
      </div>
    </div>
  )
}