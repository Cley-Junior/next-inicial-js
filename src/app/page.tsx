/* eslint-disable react/jsx-key */
'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

// import localFont from 'next/font/local';

// const beaufortFont = localFont({ src: '../../Fonts_Package/BeaufortForLoL-OTF/BeaufortforLOL-Regular' })

export async function getChampionsData()
{
  const data = await fetch("https://ddragon.leagueoflegends.com/cdn/14.3.1/data/pt_BR/champion.json");
  return data.json();
}

export async function getChampionsFreeData()
{
  const data = await fetch("https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-9c60ed82-3157-4bc2-8516-b2b3c78c0fc0");
  return data.json();
}

export function getChampionNameById(objeto: any, ids: number[])
{
  let campeoes = ids.map((id) => {
    for (const nomes in objeto)
    {
      if(objeto[nomes].key == id)
      {
        return (nomes + ", " + objeto[nomes].title);
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
    <div className="background">
      <h1>Free Weekly League of Legends Champions</h1>
      <div style={{
        display: 'grid',
        gridGap: '8px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(217px, auto))'
      }}>
          {
            championsFreeNameData?.map((id) => (
            <div className="item" style={{ position: 'relative', height: '440px' }}>
              <Image 
              src={"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + id?.split(',').slice(0, 1) + "_0.jpg"} 
              quality={100}
              width={217}
              height={399}
              alt={id + " Image"} 
              />
              <p className="caption">{id}</p>
            </div>
            ))
          }
      </div>
    </div>
  )
}