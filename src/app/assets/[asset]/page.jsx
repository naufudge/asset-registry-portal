"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, Suspense, useState } from "react";
import './asset.css'

export default function AssetPage({ params: { assetId } }) {
    const router = useRouter()
    const path = usePathname()

    const [assetGotten, setAssetGotten] = useState(false)
    const [asset, setAsset] = useState({
      "asset_number": "",
      "sap_number": "",
      "name": "",
      "present_location": "",
      "condition": ""
    })

    useEffect(() => {
      const getAsset = async () => {
        try {
          const searchTerm =  path.split("/").pop();
          const response = await fetch(`http://10.12.29.68:8000/asset/${searchTerm}`)
          const _asset = await response.json()
          setAsset(_asset)
          setAssetGotten(true)
        } catch (error) {
          console.log("There was an error", error.message)
        }
      }
      if (!assetGotten) getAsset();
    }, [assetGotten, asset])
   
    return (
        <div className="main grid text-center place-items-center">
            <Suspense fallback={<h2>Loading..</h2>}>
                <div className="main-card mt-10 m-3 p-10 drop-shadow-lg bg-white rounded-2xl items-center justify-center">
                  <p className="text-2xl font-bold">{asset.name}</p>
                  <br />
                  <h1><b>Inventory Number:</b> {asset.asset_number}</h1>
                  <h1><b>Location:</b> {asset.present_location}</h1>
                </div>

                <button 
                onClick={() => router.back()}
                className="rounded-full bg-transparent outline p-2 m-3 text-purple-400 hover:bg-purple-400 hover:text-white transform duration-300"
                >Go back</button>
            </Suspense>
        </div>
    )
}